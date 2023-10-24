import React, { useState } from 'react';
import {
    Button,
    Text,
    View,
    TextInput,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function LoginForm() {
    const auth = getAuth();

    // Statevariabler til email, password, om handlingen er fuldført, og eventuelle fejlmeddelelser
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isCompleted, setCompleted] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    // Håndterer login ved hjælp af Firebase Authentication
    const handleSubmit = async () => {
        // Forsøg at logge ind ved at bruge email og password
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Håndter vellykket login
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                // Håndter fejl under login og vis fejlbesked
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
            });
    }

    // Render loginknappen
    const renderButton = () => {
        return <Button onPress={() => handleSubmit()} title="Login" />;
    };

    return (
        <View>
            <Text style={styles.header}>Login</Text>
            <TextInput
                placeholder="email"
                value={email}
                onChangeText={(email) => setEmail(email)}
                style={styles.inputField}
            />
            <TextInput
                placeholder="password"
                value={password}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry
                style={styles.inputField}
            />
            {errorMessage && (
                <Text style={styles.error}>Error: {errorMessage}</Text>
            )}
            {renderButton()}
        </View>
    );
}

// Lokal styling til brug i LoginForm
const styles = StyleSheet.create({
    error: {
        color: 'red',
    },
    inputField: {
        borderWidth: 1,
        margin: 10,
        padding: 10,
        width: 300
    },
    header: {
        fontSize: 40,
    },
});

// Eksport af LoginForm, så den kan importeres og bruges i andre komponenter
export default LoginForm;
