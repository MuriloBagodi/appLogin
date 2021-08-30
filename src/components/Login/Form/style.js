import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    DivForm:{
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:'#fafafa',
        alignItems:'center',
        marginTop:30,
        borderTopEndRadius: 30,
        borderTopLeftRadius:30
    },
    Form:{
        marginTop:50,
        padding: 20,
        width:"100%",
        height:"100%",
    },
    FormLabel:{
        fontSize: 20,
        letterSpacing: 3,
        marginBottom: 10
    },
    FormInput:{
        fontSize: 16,
        letterSpacing: 2,
        padding: 5,
        margin: 10,
        backgroundColor: '#f6f6f6',
        borderRadius: 10
    },
    buttonLogIn:{
        backgroundColor: '#def087'
    }
})

export default styles