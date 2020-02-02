import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

function Main( { navigation } ) {
    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();

            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                });
            }
        }

        loadInitialPosition();
    }, []);
    if (!currentRegion) {
        return null;
    }

    return (
        <>

        <MapView initialRegion={currentRegion} style={styles.map}>
            <Marker coordinate={{ latitude: -23.9661989, longitude: -46.3336866 }} >
                <Image style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/39165369?s=40&v=4' }} />
                <Callout onPress = {() => {
                    // navegação
                    navigation.navigate('Profile', { github_username: 'neuyer' })
                }}>
                    <View style={styles.callout}>
                        <Text style={styles.devName}>Ariel Neumeyer</Text>
                        <Text style={styles.devBio}>babaca lindo</Text>
                        <Text style={styles.devTechs}> html</Text>
                    </View>
                </Callout>
            </Marker>
        </MapView>
        <View styles= {styles.searchForm}>
            <TextInput style = {styles.searchInput}
            placeholder='Buscar Devs por techs...'
            placeholderTextColor='#999'
            autoCapitalize="words"
            autoCorrect= {false}
            />

            <TouchableOpacity style= {styles.loadButton}>
                <MaterialIcons name='my-location' size={150} color= '#fff' />
            </TouchableOpacity>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },

    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#fff'
    },

    callout: {
        width: 260,
    },

    devName: {
        fontWeight: 'bold',
    },

    devBio: {
        color: '#665',
        marginTop: 5,
    },

    devTechs: {
        marginTop: 5,
    },

    searchForm: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row',
        backgroundColor: '#fc2003'
    },

    loadButton: {
        backgroundColor: '#fc2003',
        flexDirection: "row-reverse",
    },
})

export default Main;