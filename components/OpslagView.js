
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import { Button, Image, Linking, Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { StatusBar } from "expo-status-bar";
import GlobalStyles from '../globalStyling/GlobalStyles';



//oprettelse af funktionalitet i cameraviewet, taget fra øvelsestime

const OpslagView = ({ navigation }) => {
    const cameraRef = useRef();
    const [hasPermission, setHasPermission] = useState(null);

    const [imagesArr, setImagesArr] = useState([]);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        (async () => {
            // Indhent adgang til kamera
            const { status } = await Camera.requestCameraPermissionsAsync();
            if (status !== 'granted') {
                alert('GIV ADGANG TIL DIT KAMERA!!');
            }
            if (Platform.OS !== 'web') {
                // Indhent adgang til at bruge galleri
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {

                    alert('Hallo giv adgang til kamera først man!');
                }
            }
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return (
            <View style={GlobalStyles.gallery}>
                <Text>No access to camera</Text>
                <Button title={"Change settings"} onPress={() => Linking.openSettings()} />
            </View>
        )
    }

    const snap = async () => {
        if (!cameraRef.current) {
            return;
        }
        setLoading(true);
        const result = await cameraRef.current.takePictureAsync();
        setImagesArr((imagesArr) => [result].concat(imagesArr));
        setLoading(false);
    };

    const CameraGallery = () => {
        return (
            <View style={GlobalStyles.gallery}>


                
                <Text style={GlobalStyles.buttonGallery}>Billeder taget: {imagesArr.length}</Text>
                <ScrollView horizontal={true}>
                    {
                        imagesArr.length > 0
                            ? imagesArr.map((image, index) => (
                                <TouchableOpacity key={index} style={{ paddingHorizontal: 10 }} onPress={() => navigation.navigate('image', { image: image.uri })}>
                                    <Image source={{ uri: image.uri }} style={{ width: 100, height: 200 }} />
                                </TouchableOpacity>
                            ))
                            : <Text style={{ color: "yellow" }}> Ingen billeder taget </Text>
                    }
                </ScrollView>
            </View>
        )
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImagesArr((imagesArr) => [result].concat(imagesArr));
        }
    };

    return (
        <Fragment>
            <StatusBar StatusBarStyle="dark-content" style={{ fontcolor: "white" }} backgroundColor={'rgba(255,255,255,0.4)'} />
            <View style={GlobalStyles.container}>
                <Camera style={GlobalStyles.camera} type={type} ref={cameraRef}>
                    <View style={{ flexDirection: "column", alignContent: "center", flex: 1, padding: 20 }}>
                        <View style={GlobalStyles.buttonContainer}>
                            <TouchableOpacity
                                style={GlobalStyles.button}
                                onPress={() => {
                                    setType(
                                        type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back
                                    );
                                }}>
                                <Text style={GlobalStyles.text}> Flip </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={GlobalStyles.button}
                                onPress={snap}
                            >
                                <Text style={GlobalStyles.text}>
                                    {loading ? "Loading..." : "Take a picture"}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={GlobalStyles.button}
                                onPress={pickImage}
                            >
                                <Text style={GlobalStyles.text}> Galleri </Text>
                            </TouchableOpacity>
                        </View>
                        <CameraGallery />
                    </View>
                </Camera>
            </View>
        </Fragment>
    );
};

export default OpslagView;


