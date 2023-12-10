import React, { useState, useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { API_KEY } from '@env';

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [weather, setWeather] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        requestLocationPermission();
    }, []);

    useEffect(() => {
        if (currentLocation) {
            console.log(
                'Current Location:',
                currentLocation.latitude,
                currentLocation.longitude,
            );
            fetchWeatherData();
        }
    }, [currentLocation]);

    const fetchWeatherData = async () => {
        try {
            const res = await fetch(
                `http://api.openweathermap.org/data/2.5/forecast?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&appid=${API_KEY}&units=metric`,
            );
            const data = await res.json();
            // console.log(data);
            setWeather(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    function requestLocationPermission() {
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Weather Location Permission',
                message: 'App needs access to your location',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        )
            .then(granted => {
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('Location permission granted');
                    getCurrentLocation();
                } else {
                    console.log('Location permission denied');
                }
            })
            .catch(err => {
                console.warn(err);
            });
    }

    function getCurrentLocation() {
        Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setCurrentLocation({ latitude, longitude });
            },
            error => {
                console.log('Error getting location:', error.message);
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }
    return {weather, loading, error};
};
