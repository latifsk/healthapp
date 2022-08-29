import React, { useState } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";

export default function STI(){

// state for keeping data on STI
    const [stiInfo, setInfo]= useState([
        {key:1, STIname:"Human papillomavirus (HPV)", STIsymptopns:"", STIcause:"", STIremedy:"", STIadvice:""},
        {key:2, STIname:"Syphillis", STIsymptopns:"", STIcause:"", STIremedy:"", STIadvice:""},
        {key:3, STIname:"Gono", STIsymptopns:"", STIcause:"", STIremedy:"", STIadvice:""},
        {key:4, STIname:"HIV", STIsymptopns:"", STIcause:"", STIremedy:"", STIadvice:""},
        {key:5, STIname:"Dice", STIsymptopns:"", STIcause:"", STIremedy:"", STIadvice:""},
        {key:6, STIname:"Dice", STIsymptopns:"", STIcause:"", STIremedy:"", STIadvice:""},
        {key:7, STIname:"Dice", STIsymptopns:"", STIcause:"", STIremedy:"", STIadvice:""},
        {key:8, STIname:"Dice", STIsymptopns:"", STIcause:"", STIremedy:"", STIadvice:""},
        {key:9, STIname:"Dice", STIsymptopns:"", STIcause:"", STIremedy:"", STIadvice:""},
        {key:10, STIname:"Dice", STIsymptopns:"", STIcause:"", STIremedy:"", STIadvice:""},

        
    ])

return(

    <View style={{backgroundColor:"pink", height:"100%"}}>
        {/* <ScrollView> */}
        <FlatList
        data={stiInfo}
        renderItem = {({item})=>{

                return(

                    <View key={item.key} style={{borderWidth:0.3, borderRadius:5, backgroundColor:"white", marginHorizontal:"3%", marginTop:"5%",
                            flexDirection:"row"
                    }}>
                        <View style={{padding:"4%", backgroundColor:"rgba(150,150,150,0.1)", width:"17%",
                            justifyContent:"center", alignItems:"center"
                    }}>
                            <Text style={{fontSize: item.key > 3 ? 25:40 , color: item.key <= 3 ? "pink":"grey",
                                fontWeight:"bold"
                        }}>
                                {item.key}
                            </Text>
                        </View>



                        <View style={{padding:"5%", justifyContent:"center", alignItems:"center" }}>
                            <Text style={{fontSize:16}}>{item.STIname}</Text>
                        </View>    
                    </View>
                )
            }}
            />
        {/* </ScrollView> */}
    </View>
)
}