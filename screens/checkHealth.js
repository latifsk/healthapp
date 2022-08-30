import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';


const CHECKER = 'https://patient.info/symptom-checker'
const SIDE = 'https://google.com' 

export default function EmbedHealth(){
    return(

        <View style={styles.container}>
            <View style={{width:"100%", height:"100%"}}>
                <WebView
                    source={{uri: CHECKER}}
                    onLoad={console.log("done")}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"grey",
        flex:1,
    }
})