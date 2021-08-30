import React from 'react';
import { Button, Text, TextInput, View, StyleSheet} from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-community/async-storage';

const InsertObject = async(key)


export default function Form(){
    return(
        <View style={styles.DivForm}>
            <View style={styles.Form}>
                
             
                <TextInput style={styles.FormInput} placeholder='Digite seu Email' keyboardType='email-address'/>
                
                <TextInput style={styles.FormInput} placeholder='Digite sua Senha' secureTextEntry={true}/>

                <Button style={styles.buttonLogIn} title='Log-in'/>

            </View>
        </View>
    )
}