import React from 'react';
import { Text, View} from 'react-native';
import GlobalStyles from '../globalStyling/GlobalStyles';

//empty view for fremtidig chatfunktion
function ChatView(){
    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.textContainer}>
                <Text style={GlobalStyles.text}>Her kan du chatte med fremtidige kunder/tattovører</Text>
            </View>
        </View>
    )
    
}
//eksporter
export default ChatView