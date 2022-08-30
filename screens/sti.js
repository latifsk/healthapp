import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal } from "react-native";

export default function STI(){

// state for opening and closing modal
    const [modalOpen, setModal]= useState(false)

// state for selected object
    const [chosenData, setChosenData] = useState({})

// state for keeping data on STI
    const stiInfo =[
        {key:1, 
        STIname:"Human papillomavirus (HPV)",
        STIexp:"HPV is a virus that most sexually active people are exposed to. HPV has over 100 variants and may take up to 2-years to show symptoms. HPV transmits through skin-to-skin contact, often sexual contact. HPV is preventable but can also be managed after infection currently.",
        
        STIsymptoms: "Symptoms of HPV may appear years after the initial infection with a variety of symptoms including Warts of many kind  – genital warts, oropharyngeal warts, flat warts, plantar warts etc. (HPV-16, HPV-18 do not cause warts but can lead to cancer, trouble swallowing, Many infected persons never have symptoms, Unexplained weight loss, Unusual growths, Lumps, Constant sores, Constant lesions, Coughing up blood" ,
        
        STIcause: "Mainly spreads through sex with an infected person or sexual activity including vaginal, anal, and oral. The HPV virus can also spread by genital contact without sex, although this is not common. Infected Toilet seats. Mother to child \(in some rare cases where a child may develop recurrent respiratory papillomatosis where hpv related warts grow inside their throats or airways.). Increased number of sexual partners. Unprotected vaginal, oral or anal sex. A weakened immune system. Direct contact with a wart." , 
        STIremedy:"", 
        STIadvice:""},
        
        
        // {key:2, STIname:"Syphillis", STIsymptoms:"", STIcause:"", STIremedy:"", STIadvice:""},
        // {key:3, STIname:"Gono", STIsymptoms:"", STIcause:"", STIremedy:"", STIadvice:""},
        // {key:4, STIname:"HIV", STIsymptoms:"", STIcause:"", STIremedy:"", STIadvice:""},
        // {key:5, STIname:"Dice", STIsymptoms:"", STIcause:"", STIremedy:"", STIadvice:""},
        // {key:6, STIname:"Dice", STIsymptoms:"", STIcause:"", STIremedy:"", STIadvice:""},
        // {key:7, STIname:"Dice", STIsymptoms:"", STIcause:"", STIremedy:"", STIadvice:""},
        // {key:8, STIname:"Dice", STIsymptoms:"", STIcause:"", STIremedy:"", STIadvice:""},
        // {key:9, STIname:"Dice", STIsymptoms:"", STIcause:"", STIremedy:"", STIadvice:""},
        // {key:10, STIname:"Dice", STIsymptoms:"", STIcause:"", STIremedy:"", STIadvice:""},

        
    ]

return(

    // <View style={{backgroundColor:"rgba(255,110,180,0.3)", height:"100%"}}>
    <View style={{backgroundColor:"white", height:"100%"}}>

        <FlatList
        showsVerticalScrollIndicator={false}
        data={stiInfo}
        renderItem = {({item})=>{

                return(

                    <TouchableOpacity onPress={()=>{modalOpen === false ? setModal(true) : setModal(false); 
                        setChosenData(item)
                    
                    }} activeOpacity={0.8} key={item.key} 
                    style={{borderWidth:0.3, borderColor:"rgba(0,0,0,0.3)", borderRadius:5, backgroundColor:"white", marginHorizontal:"3%", marginTop:"5%",flexDirection:"row"
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


            <Modal visible={modalOpen} transparent={false} animationType={"slide"} >
                <View style={{paddingTop:"15%", paddingHorizontal:"4%", height:"100%", backgroundColor:"pink"}}>
                    
                    <TouchableOpacity onPress={()=>{modalOpen === true ? setModal(false) : setModal(true) }}>
                        <Ionicons name="close" size={25} color={"red"} />
                    </TouchableOpacity>

                    <View style={{marginTop:"2%"}}>
                        <Text>{chosenData.STIname}</Text>
                    </View>

                    <View style={{marginTop:"2%"}}>
                        <Text>{chosenData.STIexp}</Text>
                    </View>

                    <View style={{marginTop:"2%"}}>
                        <Text>{chosenData.STIsymptoms}</Text>
                    </View>

                    <View style={{marginTop:"2%"}}>
                        <Text>{chosenData.STIcause}</Text>
                    </View>

                </View>
            </Modal>


    </View>
)
}