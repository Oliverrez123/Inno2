import React from 'react';
import { Text, View } from 'react-native';
import GlobalStyles from "../globalStyling/GlobalStyles";

//"ProfilView modtager navigation som en parameter. Dette gør det muligt at navigere til andre views."
function ProfilView() {

    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.textContainer}>
                <Text style={GlobalStyles.text}>Her er din profil. Hvis du vil redigere din profil må du lige vente til vi er færdige med at udvikle. Thanks</Text>
            </View>
        </View>
    )
}



//Eksport af ProfilView
export default ProfilView  