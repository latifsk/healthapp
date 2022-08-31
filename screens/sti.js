import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal, ScrollView } from "react-native";
import YouTubePlayer from 'react-native-youtube-iframe';

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
        
        STIcause: "Mainly spreads through sex with an infected person or sexual activity including vaginal, anal, and oral. The HPV virus can also spread by genital contact without sex, although this is not common. Infected Toilet seats. Mother to child \(in some rare cases where a child may develop recurrent respiratory papillomatosis where hpv related warts grow inside their throats or airways.). Increased number of sexual partners. Unprotected vaginal, oral or anal sex. A weakened immune system. Direct contact with a wart.",

        STIremedy:"Laser or light therapy: This involves using a high-powered, targeted beam to remove the abnormal tissue., Medications – prescription creams etc., Electrocautery – burning off warts with electric current., Cryotherapy – freezing warts using liquid nitrogen., Removal by surgical means.",
        
        STIadvice:"Reducing the number of sexual partners. Practice safe sex by use of condoms. Vaccinating against HPV. Report unusual growths, lesions, sores, or swellings around genital areas immediately to your health care providers. Get screened and test regularly. Protect your partner by letting them know. HPV is not curable however; the immune system can get rid of the virus naturally over time. Otherwise, it only leads to cancer.",
    
        STIyoutube:"pyihsgc209Q",
    },


    {key:2, 
        STIname:"Chlamydia",
        STIexp:"It's passed on through unprotected sex (sex without a condom) and is particularly common in sexually active teenagers and young adults. Chlamydia is a common sexually transmitted infection (STI) caused by bacteria. People who have chlamydia often don’t have outward symptoms in the early stages. Untreated chlamydia can cause serious complications, so it’s important to get regular screenings and talk with your doctor or another healthcare professional if you have any concerns.",
        
        STIsymptoms: "Most people with chlamydia do not notice any symptoms and do not know they have it. If you do develop symptoms, you may experience: Sore throat, dry throat, fever, and coughing. Pain when peeing, unusual discharge from the vagina, penis or bottom. In women, pain in the tummy, bleeding after sex and bleeding between periods. In men, pain and swelling in the testicles.",
        
        STIcause: "Chlamydia is a bacterial infection. Typically, sex or contact with genital secretions that are infected spread the bacterium (semen or vaginal fluid). Chlamydia can be contracted through: Unprotected oral, anal, or vaginal sex. Exchanging sexually active objects that are not cleaned or covered with a fresh condom after each usage. Your genitalia touching those of your partner means that you can contract chlamydia from them even if there is no penetration, orgasm, or ejaculation. Contaminated vaginal fluid or sperm entering your eye. Additionally, a pregnant mother can pass it on to her unborn child. Chlamydia cannot be spread through casual physical contact, such as kissing and embracing, or through the sharing of objects like towels, toilet seats, swimming pools, or cutlery." ,

        STIremedy: "Chlamydia is easy to treat and can be cured. Since it’s bacterial in nature, antibiotics treat it. Azithromycin is an antibiotic usually prescribed in a single, large dose. Doxycycline is an antibiotic that must be taken twice per day for about 1 week. A healthcare professional may also prescribe other antibiotics. No matter which antibiotic is prescribed, dosage instructions should be followed carefully to make sure the infection clears up fully. This can take up to 2 weeks, even with the single-dose medications. During the treatment time, it’s important not to have sex. It’s still possible to transmit and contract chlamydia if exposed again, even if you’ve treated a previous infection. It’s important to remember that untreated chlamydia can lead to long-term complications, including fertility problems and chronic inflammation. Home remedies for chlamydia that may be effective (for symptoms, not the infection itself) include: Goldenseal. This medicinal plant may limit symptoms during an infection by reducing inflammation." ,
        
        STIadvice: "Abstaining from sexual activity is the only guaranteed way to prevent chlamydia. However, if you are sexually active, there are several simple steps you can take to decrease your risk of contracting chlamydia, as well as many other STIs. Here are a few ways to reduce your risk: Use barrier methods. Using a condom, dental dam, or other barrier method each time you have oral, vaginal, or anal sex can help significantly decrease the risk of infection. Get tested. Getting screened regularly for STIs can help prevent the transmission of chlamydia and ensure that you get treatment if needed. A doctor can help determine how often you should get tested, depending on your risk level. Communicate with your sexual partners. Having multiple sexual partners can increase your risk of chlamydia and other STIs. But you can decrease this risk by openly discussing STI prevention and using barrier methods every time you have sex. Avoid sharing sex toys. If you do decide to share any sex toys, wash them thoroughly between each use and cover with a condom.",
    
        STIyoutube:"pr5WInVawvg",
    },



    {key:3, 
        STIname:"Bacterial Vaginosis",
        STIexp:"Bacterial vaginosis (BV) is a condition caused by an overabundance of certain bacteria in the vagina. This alters the normal bacterial balance in the vagina. In women aged 15 to 44, BV is the most common vaginal condition. The cause of BV is unknown to researchers. However, we do know that the condition is most common in sexually active people. A vaginal imbalance of \"good\" and \"harmful\" bacteria causes BV. Douching, not using condoms, and having new or multiple sex partners can all disrupt the normal balance of vaginal bacteria, increasing your chances of contracting BV. We also don't know how BV is caused by sex. There is also no evidence that treating a sex partner influences whether someone develops BV. Having BV increases your risk of contracting other STDs. People who have never had sex are rarely affected by BV. BV cannot be contracted through toilet seats, bedding, or swimming pools.",
        
        STIsymptoms: "A thin white or grey vaginal discharge. Burning when peeing. A strong fish-like odour, especially after sex. Pain and itching in the vagina",
        
        STIcause: 'A vaginal imbalance of "good" and "harmful" bacteria causes BV. Douching, not using condoms, and having new or multiple sex partners can all disrupt the normal balance of vaginal bacteria, increasing your chances of contracting BV. We also do not know how BV is caused by sex. There is also no evidence that treating a sex partner influences whether someone develops BV. Having BV increases your risk of contracting other STDs. People who have never had sex are rarely affected by BV.' ,

        STIremedy: "Antibiotics can be prescribed by a doctor to treat BV. If you have symptoms, you should see a doctor who can examine you and treat you. Even if your symptoms go away, it is critical to take all of the medication prescribed by your doctor. Treatment may also lower the risk of contracting other STDs. Even after treatment, BV can reoccur. Some prescribed medications include; Metronidazole, Clindamycin, Tinidazole, Secnidazole." ,
        
        STIadvice: "Healthcare providers and scientists do not fully comprehend how BV spreads or how to prevent it. The following basic precautions may help reduce your risk of contracting BV; Not having sex. Researchers are still studying how women get BV. You can get BV without having sex, but BV is more common in women who have sex. Limiting your number of sex partners. Analysts believe that your chances of getting BV goes up with the quantity of accomplices you have. Using condoms, the right way every time you have sex. Not douching. Douching upsets, the balance of good and harmful bacteria in your vagina. This may raise your risk of BV. It may also make it easier to get BV again after treatment. Doctors do not recommend douching. Although mild cases of BV may resolve on their own, treatment can help lower the risk of complications.",
    
        STIyoutube:"PfMar1ymwqE",
    },


    {key:4, 
        STIname:"Hepatitis B",
        STIexp:"Hepatitis B is a viral infection that causes inflammation of the liver. Hepatitis B, also known as HBV and Hep B, can cause cirrhosis (hardening or scarring), liver cancer, and even death. When Hep B illness occurs, it is either acute (short-term) or chronic (long-term). Most people who have a mild illness recover completely within four to eight weeks, but, in more severe cases, recovery can take several months. In very rare cases, acute hepatitis B can cause serious liver damage and, in very rare cases, it can be fatal. After recovering from acute hepatitis B, a person is immune and is not able to pass the virus on to others.",
        
        STIsymptoms: "    Hepatitis B ranges from mild to severe. They usually appear about one to four months after you've been infected, although you could see them as early as two weeks post-infection. Some people, usually young children, may not have any symptoms. Hepatitis B signs and symptoms may include: Abdominal pain, dark urine, fever, joint pain, loss of appetite, nausea and vomiting, weakness and fatigue, and yellowing of your skin and the whites of your eyes (jaundice)",
        
        STIcause: "Hepatitis B infection is caused by the hepatitis B virus (HBV). The virus is passed from person to person through blood, semen, or other body fluids. It is not spread by sneezing or coughing. Common ways that HBV can spread are : Sexual contact You may get hepatitis B if you have unprotected sex with someone who is infected. The virus can pass to you if the person's blood, saliva, semen, or vaginal secretions enter your body. Sharing of needles HBV easily spreads through needles and syringes contaminated with infected blood. Sharing IV drug paraphernalia puts you at a high risk of hepatitis B. Accidental needle sticks Hepatitis B is a concern for healthcare workers and anyone else who comes into contact with human blood. Mother to a child. Pregnant women infected with HBV can pass the virus to their babies during childbirth. However, the newborn can be vaccinated to avoid getting infected in almost all cases. Talk to your doctor about being tested for hepatitis B if you are pregnant or want to become pregnant." ,

        STIremedy: "Hepatitis B vaccination is the best and most effective way of preventing the spread of hepatitis B. Since 1985, the hepatitis B vaccine has been part of the national immunization schedule. The vaccine is given to babies between six weeks and five months. Babies born to mothers with hepatitis B receive an extra dose of the vaccine at birth as well as a dose of hepatitis B-specific immune globulin. In children and adolescents who did not receive the hepatitis B vaccine in the first year of life, the full three-dose course is recommended. Measures that can help prevent the spread of the hepatitis B virus include: Teaching children not to touch the blood or wounds of others. Covering cuts, scratches, and grazes. Do not share personal items such as razors and toothbrushes. Never share needles or syringes if you use intravenous drugs. Practising safe sex, including the use of condoms. Seek assurance that body piercing and tattooing needles and equipment are sterile." ,
        
        STIadvice: "Learn the HBV status of any sexual partner. Don't engage in unprotected sex unless you're absolutely certain your partner isn't infected with HBV or any other sexually transmitted infection. If you don't know the health status of your partner, use a new latex or polyurethane condom every time you have sex. Remember that although condoms can reduce your risk of contracting HBV, they don't eliminate it. Don't use illegal drugs. If you use illicit drugs, get help to stop. If you can't stop, use a sterile needle each time you inject illicit drugs. Never share needles. Be cautious about body piercing and tattooing. If you get a piercing or tattoo, look for a reputable shop. Ask about how the equipment is cleaned. Make sure the employees use sterile needles. If you can't get answers, look for another shop. Ask about the hepatitis B vaccine before you travel. If you're traveling to a region where hepatitis B is common, ask your doctor about getting the hepatitis B vaccine in advance. It's usually given in a series of three injections over a six-month period.",
    
        STIyoutube:"0jrHRv2pJXQ",
    },


    
    {key:5, 
        STIname:"Syphillis",
        STIexp:"Syphilis is a bacterial infection usually spread by sexual contact. The disease starts as a painless sore — typically on the genitals, rectum or mouth. Syphilis spreads from person to person via skin or mucous membrane contact with these sores.",
        
        STIsymptoms: "Syphilis develops in stages, and symptoms vary with each stage. But the stages may overlap, and symptoms don't always occur in the same order. You may be infected with syphilis without noticing any symptoms for years.",
        
        STIcause: "Treponema pallidum is the bacteria that causes syphilis. By coming into touch with an infected person's sore while engaging in sexual activity, syphilis is most frequently disseminated. Minor skin or mucous membrane tears or abrasions allow the germs to enter the body. Both the main and secondary phases of syphilis, as well as occasionally the early latent stage, are communicable. Syphilis can also less often spread by kissing or other close contact with an active lesion. During pregnancy or childbirth, moms might potentially transmit it to their unborn children. Using the same toilet, bathtub, clothing, or dining utensils, as well as from doorknobs, hot tubs, pools, or swimming pools, will not spread syphilis. Syphilis does not recur on its own after being treated. You might, however, get sick again if you come into contact with another syphilis sore." ,
        
        STIremedy: "When diagnosed and treated in its early stages, syphilis is easy to cure. The preferred treatment at all stages is penicillin, an antibiotic medication that can kill the organism that causes syphilis. If you're allergic to penicillin, your doctor may suggest another antibiotic or recommend penicillin desensitization. The recommended treatment for primary, secondary or early-stage latent syphilis — which refers to an infection within the last year — is a single injection of penicillin. If you've had syphilis for longer than a year, you may need additional doses. Penicillin is the only recommended treatment for pregnant women with syphilis. Women who are allergic to penicillin can undergo a desensitization process that may allow them to take penicillin. Even if you're treated for syphilis during your pregnancy, your newborn child should be tested for congenital syphilis and if infected, receive antibiotic treatment. The first day you receive treatment, you may experience what's known as the Jarisch- Herxheimer reaction. Signs and symptoms include a fever, chills, nausea, achy pain and a headache. This reaction usually doesn't last more than one day." ,
        
        STIadvice: "Teach patients how to reduce risk factors to prevent future infections by limiting the number of sexual partners. Using condoms with spermicide and inspecting partners for any rashes or lesions may reduce exposure to the disease. Explain the need for regular laboratory testing (VDRL) every 3 months for 2 years to detect a relapse. Urge patients in the latent or late stages to have blood tests every 6 months for 2 years.",
        
        STIyoutube:"hhmH2YlIW5Q",
    },
    
 

    {key:6, 
        STIname:"Gonorrhea",
        STIexp:"Gonorrhea is a bacterial sexually transmitted infection (STI) that can be passed between sexual partners through penetrative (oral, vaginal, or anal) sex. Gonorrhea is an increasingly common STI, particularly among young adults, and is often present without any symptoms. If left untreated, gonorrhea may lead to more serious infections or infertility.",
        
        STIsymptoms: "Gonorrhea is often asymptomatic (without symptoms). When symptoms are present, they may take up to two weeks or so to appear. Some symptoms include: Abnormal vaginal discharge (e.g., color, odor, and/or texture), pain or burning with urination, pain or discomfort during sex, rectal pain, discharge or bleeding, pelvic or lower abdominal pain",
        
        STIcause: 'Gonorrhea is transmitted through vaginal, anal, or oral sex, when one person’s mucous membranes come into contact with the infected genital secretions (vaginal fluids, semen, pre-ejaculate) of an infected partner. Gonorrhea may also be transmitted from an infected woman to her newborn during childbirth.' ,

        STIremedy: "Gonorrhea is often curable with the appropriate treatment which includes both an antibiotic injection and oral antibiotics. It is important to complete all gonorrhea medication even if symptoms are no longer present, and to remain abstinent for at least one week after both you and your partners are treated." ,
        
        STIadvice: "Recently, there has been an increase in cases of antibiotic-resistant gonorrhea, making treatment more difficult. If symptoms persist a few days into antibiotic treatment, you may have an antibiotic resistant strain of gonorrhea, and should go back to your medical provider for further evaluation and a new treatment plan. Gonorrhea infections can often occur with other sexually transmitted infections. For this reason, if you are diagnosed with gonorrhea, it is strongly recommended that you are tested for other common STIs as well, including chlamydia, syphilis, and HIV. After completing treatment for gonorrhea patients should return for re-testing in 3 months to see if you have been re-infected.",
        
        STIyoutube:"2e9PRTVzJGg",
    },
    
    
    {key:7, 
        STIname:"HIV/AIDS",
        STIexp:"HIV stands for human immunodeficiency virus. HIV infects and destroys cells of your immune system, making it hard to fight off other diseases. When HIV has severely weakened your immune system, it can lead to acquired immunodeficiency syndrome (AIDS). Because HIV works backward to insert its instructions into your DNA, it is called a retrovirus. AIDS is the final and most serious stage of an HIV infection. People with AIDS have very low counts of certain white blood cells and severely damaged immune systems. They may have additional illnesses that indicate that they have progressed to AIDS. Without treatment, HIV infections progress to AIDS in about 10 years.",
        
        STIsymptoms: "Headache, fatigue, aching muscles, sore throat, swollen lymph nodes, red rashes that do not itch, usually on your torso, fever. Ulcers (sores) in your mouth, oesophagus, anus, or genitals. Headache and other neurological symptoms. Being tired all the time. Swollen lymph nodes in your neck or groin. Fever that lasts more than 10 days. Night sweats. Weight loss with no obvious reason. Purplish spots on your skin that don't go away. Shortness of breath. Severe, long-lasting diarrhea. Yeast infections in your mouth, throat, or vagina. Bruises or bleeding you can't explain. Weight loss, diarrhoea, fever, a cough that won’t go away, night sweats, mouth and skin problemsrequent infections. Serious illnesses or diseases",
        
        STIcause: "HIV is caused by the human immunodeficiency virus. The virus attacks the helper T-cells of your immune system, leaving it weakened. AIDS is caused by having too few immune cells to fight off other illnesses. You can get HIV through the blood, semen, vaginal fluids, breast milk and rectal fluids of an infected person. People of all sexes and sexual orientations can get infected with and spread HIV. The virus can enter your body through your mouth, anus, penis, vagina or broken skin. It can’t get through your skin unless you have a cut or wound. Pregnant people with HIV can also give it to their babies. Having sex without a condom and sharing needles to take drugs are the most common ways that HIV spreads. Even if you feel fine, you can still give HIV to others." ,
        
        STIremedy: "HIV is treated with a combination of medicines (pills) taken by mouth every day. This combination of pills is called antiretroviral therapy (ART). Taking a combination of types of pills, rather than just one, is the most effective way to keep HIV from multiplying and destroying your cells. There are also combination pills that have several medications in a single pill. Your healthcare provider will carefully select a combination specifically for you. The goal of ART is to reduce HIV in the blood (viral load) to an amount that’s not detectable by an HIV test and to slow HIV’s weakening of your immune system." ,
        
        STIadvice: "It's very important to take your medications as prescribed and to make sure you don’t miss appointments. This is called treatment adherence. If you miss medications, even by accident, HIV can change how it infects your cells (mutate), potentially causing your medications to stop working. If your schedule prevents you from taking medications on time or making it to appointments, talk to your healthcare provider.",
    
        STIyoutube:"5g1ijpBI6Dk",
    },


    




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
                        <View style={{padding:"4%", backgroundColor:"rgba(150,150,150,0.1)", width:"19%",justifyContent:"center", alignItems:"center"}}>
                            <Text style={{fontSize:35 , color: "purple",fontWeight:"bold"}}>
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
                        <Ionicons name="close" size={30} color={"red"} />
                    </TouchableOpacity>

                    <View style={{marginTop:"2%"}}>
                        <Text style={{fontSize:30, fontWeight:'500'}}>{chosenData.STIname}</Text>
                    </View>

                    <ScrollView contentContainerStyle={{paddingBottom:"5%"}}>

                        <View style={{marginTop:"3%", marginBottom:"5%"}}>
                            <Text style={{fontSize:16, fontWeight:'normal'}}>{chosenData.STIexp}</Text>
                        </View>

                        <View style={{height:250}}>
                            <YouTubePlayer 
                                style={{marginTop:"5%"}}
                                height={300}
                                videoId={chosenData.STIyoutube}
                                />
                        </View>

                        <View style={{marginTop:"5%"}}>
                            <Text style={{fontSize:20, fontWeight:'600'}} >Symptoms</Text>
                            <Text style={{fontSize:16, fontWeight:'normal'}} >{chosenData.STIsymptoms}</Text>
                        </View>

                        <View style={{marginTop:"5%"}}>
                            <Text style={{fontSize:20, fontWeight:'600'}} >Modes of transmission/Causes</Text>
                            <Text style={{fontSize:16, fontWeight:'normal'}} >{chosenData.STIcause}</Text>
                        </View>

                        <View style={{marginTop:"5%"}}>
                            <Text style={{fontSize:20, fontWeight:'600'}} >Prevention & Treatment</Text>
                            <Text style={{fontSize:16, fontWeight:'normal'}} >{chosenData.STIremedy}</Text>
                        </View>

                        <View style={{marginTop:"5%"}}>
                            <Text style={{fontSize:20, fontWeight:'600'}} >Health Advice</Text>
                            <Text style={{fontSize:16, fontWeight:'normal'}} >{chosenData.STIadvice}</Text>
                        </View>

                    </ScrollView>
                    

                </View>
            </Modal>


    </View>
)
}