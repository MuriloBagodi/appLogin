import React from 'react';
import { Text, View } from 'react-native';


export default function MsgResponse(props){
    return(
        <View>
            <Text>{props.msgOk}</Text>
            <Text>{props.msgErr}</Text>
        </View>
    )
}