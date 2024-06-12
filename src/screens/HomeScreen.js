// src/screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ route, navigation }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const userData = await AsyncStorage.getItem('userData');
            setUser(JSON.parse(userData));
        };
        if (route.params?.user) {
            setUser(route.params.user);
        } else {
            fetchData();
        }
    }, [route.params]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            {user ? (
                <Text style={styles.subText}>Welcome, {user.name} !</Text>
            ) : (
                <Text>Loading...</Text>
            )}
            <View style={styles.buttonContainer}>
                <Button title="Logout" onPress={() => navigation.navigate('Login')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 30, marginBottom: 16 },
    buttonContainer: { marginTop: 24 },
    subText: { fontSize: 16 }

});

export default HomeScreen;
