import React from 'react';
import { Text, View } from 'react-native';
import GlobalStyles from '../globalStyling/GlobalStyles';

//Hjem view, tom
function HjemView(){

   
   
    return (
            <View style={GlobalStyles.container} >
                <View style={GlobalStyles.textContainer}>
                    <Text style={GlobalStyles.title}>Velkommen til Inkspiration</Text>
                </View>
            </View>
        )
    
}

//eksport af HjemView således denne kan importeres og benyttes i andre komponenter
export default HjemView