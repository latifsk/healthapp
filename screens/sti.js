import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, ScrollView, FlatList, TouchableOpacity, Modal } from "react-native";

export default function STI(){

// state for opening and closing modal
    const [modalOpen, setModal]= useState(false)

// state for keeping data on STI
    const [stiInfo, setInfo]= useState([
        {key:1, 
        STIname:"Human papillomavirus (HPV)", 
        STIsymptopns:["Symptoms of HPV may appear years after the initial infection with a variety of symptoms including:",
        "Warts of many kind (HPV-6, HPV-11) – genital warts, oropharyngeal warts, flat warts, plantar warts etc. (HPV-16, HPV-18 don\’t cause warts but can lead to cancer",
        "Trouble swallowing", "Many infected persons never have symptoms", "Unexplained weight loss", "Unusual growths", "Lumps", "Constant sores", "Constant lesions", "Coughing up blood"],
        STIcause:"", 
        STIremedy:"", 
        STIadvice:""},
        
        
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

    <View style={{backgroundColor:"rgba(255,110,180,0.3)", height:"100%"}}>

        <FlatList
        data={stiInfo}
        renderItem = {({item})=>{

                return(

                    <TouchableOpacity onPress={()=>{setModal === false ? true : false}} activeOpacity={0.8} key={item.key} 
                    style={{borderWidth:0.3, borderRadius:5, backgroundColor:"white", marginHorizontal:"3%", marginTop:"5%",flexDirection:"row"
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
                    </TouchableOpacity>
                )
            }}
            />


            <Modal visible={modalOpen} >
                <View>
                    <TouchableOpacity onPress={()=>{setModal === true ? false : true}}>
                        <Ionicons name="close" size={20} color={"red"} />
                    </TouchableOpacity>
                    <View>
                        <Text>heading here</Text>
                    </View>

                    <View>

                    </View>
                </View>
            </Modal>


    </View>
)
}