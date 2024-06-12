import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isFormValid = email.length > 0 && password.length > 0;

    const handleLogin = () => {
        if (isFormValid) {
            navigation.navigate('Home');
        } else {
            Alert.alert('Error', 'Please enter both email and password');
        }
    };

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="Login"
                    onPress={handleLogin}
                    disabled={!isFormValid}
                />
                <Button
                    title="Sign Up"
                    onPress={() => navigation.navigate('SignUp')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 16 },
    title: { fontSize: 24, marginBottom: 16, textAlign: 'center' },
    input: { height: 50, borderColor: 'gray', borderWidth: 1, marginBottom: 16, paddingLeft: 8 },
    buttonContainer: { gap: 12, width: '80%', alignSelf: 'center' }
});

export default LoginScreen;
