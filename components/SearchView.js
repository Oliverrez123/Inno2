import React from 'react';
import { Text, View} from 'react-native';
import GlobalStyles from '../globalStyling/GlobalStyles';
//Fremtiding søgefunktion
function SearchView() {
    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.textContainer}>
                <Text style={GlobalStyles.text}>Søg her for inspiration!</Text>
            </View>
        </View>
    )   

}

export default SearchView