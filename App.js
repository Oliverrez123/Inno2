import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ChatView from './components/ChatView';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Card } from 'react-native-paper';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpView';
import GlobalStyles from './globalStyling/GlobalStyles'
import HjemView from './components/HjemView';
import ProfilView from './components/ProfilView';
import SearchView from './components/SearchView';
import OpslagView from './components/OpslagView';
import { getApps, initializeApp } from "firebase/app";

const Drawer = createDrawerNavigator();

// Firebase-konfiguration
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpgo1gVEMy3nrorP5cn2hVH0JMISNc4L4",
  authDomain: "firebassen.firebaseapp.com",
  projectId: "firebassen",
  storageBucket: "firebassen.appspot.com",
  messagingSenderId: "223589075096",
  appId: "1:223589075096:web:122520f546eb964b72e8ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default function App() {
  const [user, setUser] = useState({ loggedIn: false });

  // Initialiser Firebase-appen, hvis den ikke allerede er initialiseret
  if (getApps().length < 1) {
    initializeApp(firebaseConfig);
    console.log("Firebase On!");
  } else {
    console.log("Firebase not on!");
  }

  const auth = getAuth();

  // En funktion, der aktiverer en lytter til ændringer i brugerens logintilstand
  function onAuthStateChange(callback) {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        // Brugeren er logget ind
        const uid = user.uid;
        callback({ loggedIn: true, user: user });
        console.log("You are logged in!");
        // ...
      } else {
        // Brugeren er logget ud
        // ...
        callback({ loggedIn: false });
      }
    });
  }

  // Brug useEffect til at oprette og rydde op i lytteren til brugerens logintilstand
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  // Komponent til visning af indhold for gæster (ikke-logget ind bruger)
  const GuestPage = () => {
    return (
      <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.paragraph}>
          Opret eller Login med din Firebase-email
        </Text>

        <Card style={{ padding: 20, margin: 20 }}>
          <SignUpForm />
        </Card>

        <Card style={{ padding: 20, margin: 20 }}>
          <LoginForm />
        </Card>
      </View>
    )
  }

  // Komponent til visning af indhold for logget ind bruger
  const LoggedInPage = () => {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HjemView} />
          <Drawer.Screen name='Search' component={SearchView} />
          <Drawer.Screen name='Profil' component={ProfilView} />
          <Drawer.Screen name='Opslag' component={OpslagView} />
          <Drawer.Screen name='Chat' component={ChatView} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }

  // Returnér LoggedInPage, hvis brugeren er logget ind, ellers GuestPage
  return user.loggedIn ? <LoggedInPage /> : <GuestPage />;
}


