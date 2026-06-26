import { Estilo } from '@/components/estilo';
import { Birthstone_400Regular } from '@expo-google-fonts/birthstone/400Regular';
import { useFonts } from '@expo-google-fonts/birthstone/useFonts';
import { Inter_400Regular } from '@expo-google-fonts/inter/400Regular';
import { Inter_600SemiBold } from '@expo-google-fonts/inter/600SemiBold';
import { Lato_900Black } from '@expo-google-fonts/lato';
import { PlayfairDisplay_400Regular_Italic, PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Link } from 'expo-router';
import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TextInput } from 'react-native';



export default function Index() {
    let [fontsLoaded] = useFonts({
        Lato_900Black,
        PlayfairDisplay_400Regular_Italic,
        PlayfairDisplay_700Bold,
        Birthstone_400Regular,
        Inter_400Regular,
        Inter_600SemiBold,
    });
    if (!fontsLoaded) {
        return null;
    }
    return (

        <ScrollView style={styles.scrollContent}
            showsVerticalScrollIndicator={true}>
            <Estilo vari='col'>


                {/*img background pega prop como felxbox*/}{/**/}
                <Estilo vari='banner'>
                    <ImageBackground
                        source={require('@/assets/images/capabanner.png')}
                        style={styles.item} >
                        {/*Linha para identar 50% cada*/}
                        <Estilo vari='row' >
                            {/*coluna de texto*/}
                            <Estilo vari='col' >
                                <Estilo vari='wrapper'>
                                    <Text style={{ fontFamily: 'Lato_900Black', fontSize: 20, color: "#b18537" }}>
                                        CAMPANHA</Text>

                                </Estilo>

                                <Estilo vari='wrapper'>
                                    <Text style={{ fontFamily: 'PlayfairDisplay_700Bold', fontSize: 60, color: '#fff' }}>
                                        RESPIRA</Text>

                                </Estilo>
                                <Estilo vari='wrapper'>
                                    <Text style={{ fontFamily: 'Birthstone_400Regular', fontSize: 45, color: "#b18537" }}>
                                        Um oasis na rota N2</Text>

                                </Estilo>
                                <Estilo vari='wrapper'>
                                    <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 15, color: '#fff' }}>
                                        Uma campanha de video que dá vida</Text>
                                    <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 15, color: '#fff' }}> a pequenos negócios do Médio tejo</Text>
                                    <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 15, color: '#fff' }}>  e tranforma história em conexões reais.</Text>

                                </Estilo>
                                <Estilo vari='wrapper'>
                                    <Text style={{ fontFamily: 'PlayfairDisplay_400Regular_Italic', fontSize: 20, }}>
                                        Ver video da campanha</Text>

                                </Estilo>


                            </Estilo>

                            {/*outro item vazio para identar responsivamente*/}
                            <Estilo vari='item'></Estilo>
                        </Estilo>

                    </ImageBackground>

                </Estilo>





                <Estilo vari='row'>
                    <Estilo vari='col' style={{ backgroundColor: '#fff', padding: 25 }}>

                        <Text style={{ fontFamily: 'Inter_600SemiBold', fontSize: 15, alignSelf: 'center', alignContent: 'center', alignItems: 'center', color: "#b18537" }}>
                            COMO FUNCIONA A RESPIRA?</Text>
                        <Text style={{ fontFamily: 'PlayfairDisplay_700Bold', fontSize: 18, alignSelf: 'center', alignContent: 'center', alignItems: 'center' }}>
                            Simples. Direto. E eficaz.</Text>


                    </Estilo>



                </Estilo>
                {/*criamos stortelling row*/}
                <Estilo vari='row' style={{ backgroundColor: 'white', flex: 1, padding: 50 }}>
                    {/*Coluna 1*/}
                    <Estilo vari='row' style={{ flex: 3, padding: 10 }}>
                        {/*Icone ->*/}<Estilo vari='item' style={{ borderRadius: '100%', backgroundColor: "#223924", padding: 10, alignItems: 'center', justifyContent: 'center', alignSelf: 'baseline', width: 40, height: 40 }}> <MaterialCommunityIcons name="account-group-outline" size={24} color='white' /></Estilo>
                        <Estilo vari='col' style={{ padding: 10 }}>
                            <Text style={{ fontFamily: 'Inter_600SemiBold', fontSize: 20, alignSelf: 'flex-start', color: "#b18537" }}>
                                01
                            </Text>
                            <Text style={{ alignSelf: 'flex-start', paddingBlock: 10, fontFamily: 'PlayfairDisplay_700Bold' }}>
                                Criamos o storytelling
                            </Text>
                            <Text style={{ fontFamily: 'Inter_400Regular', color: '#000000' }}>
                                Entendemos a sua história, os seus objetivos e o que torna o seu negocio único</Text>

                        </Estilo>
                        <Feather name="arrow-right" size={24} color="#b18537" />
                    </Estilo>
                    {/*Coluna 2*/}
                    <Estilo vari='row' style={{ flex: 3, padding: 10 }}>
                        <Estilo vari='item' style={{ borderRadius: '100%', backgroundColor: "#223924", padding: 10, alignItems: 'center', justifyContent: 'center', alignSelf: 'baseline', width: 40, height: 40 }}> <MaterialCommunityIcons name="account-group-outline" size={24} color='white' /></Estilo>
                        <Estilo vari='col' style={{ padding: 10 }}>
                            <Text style={{ fontFamily: 'Inter_600SemiBold', fontSize: 20, alignSelf: 'flex-start', color: "#b18537" }}>
                                02
                            </Text>
                            <Text style={{ alignSelf: 'flex-start', paddingBlock: 10, fontFamily: 'PlayfairDisplay_700Bold' }}>
                                Criamos o storytelling
                            </Text>
                            <Text style={{ fontFamily: 'Inter_400Regular' }}>
                                Entendemos a sua história, os seus objetivos e o que torna o seu negocio único</Text>

                        </Estilo>
                        <Feather name="arrow-right" size={24} color="#b18537" />
                    </Estilo>
                    {/*Coluna 3*/}
                    <Estilo vari='row' style={{ flex: 3, padding: 10 }}>
                        <Estilo vari='item' style={{ borderRadius: '100%', backgroundColor: "#223924", padding: 10, alignItems: 'center', justifyContent: 'center', alignSelf: 'baseline', width: 40, height: 40 }}> <Entypo name="paper-plane" size={24} color="#fff" /></Estilo>
                        <Estilo vari='col' style={{ padding: 10 }}>
                            <Text style={{ fontFamily: 'Inter_600SemiBold', fontSize: 20, alignSelf: 'flex-start', color: "#b18537" }}>
                                03
                            </Text>
                            <Text style={{ alignSelf: 'flex-start', paddingBlock: 10, fontFamily: 'PlayfairDisplay_700Bold' }}>
                                Criamos o storytelling
                            </Text>
                            <Text style={{ fontFamily: 'Inter_400Regular' }}>
                                Entendemos a sua história, os seus objetivos e o que torna o seu negocio único</Text>

                        </Estilo>
                        <Feather name="arrow-right" size={24} color="#b18537" />
                    </Estilo>
                </Estilo>


            </Estilo>
            {/*Pra quem é respira row*/}
            <Estilo vari='row'>
                <Estilo vari='col' style={{ backgroundColor: '#fff', padding: 25 }}>

                    <Text style={{ fontFamily: 'Inter_600SemiBold', fontSize: 15, alignSelf: 'center', alignContent: 'center', alignItems: 'center', color: "#b18537" }}>
                        PARA QUEM É A RESPIRA?</Text>
                    <Text style={{ fontFamily: 'PlayfairDisplay_700Bold', fontSize: 18, alignSelf: 'center', alignContent: 'center', alignItems: 'center' }}>
                        Pefeita para quem quer crescer e estar na rota certa.</Text>


                </Estilo>

            </Estilo>
            {/*Todos os icones row*/}
            <Estilo vari='row'>
                <Estilo vari='row' style={{ backgroundColor: "#fff", height: 100 }} >
                    <Feather name="target" size={24} color="#3f6e58" />
                    <Entypo name="paper-plane" size={24} color="#3f6e58" />
                    <MaterialCommunityIcons name="silverware-fork-knife" size={24} color="#3f6e58" />
                    <SimpleLineIcons name="cup" size={24} color="#3f6e58" />
                    <FontAwesome6 name="bed" size={24} color="#3f6e58" />
                    <SimpleLineIcons name="handbag" size={24} color="#3f6e58" />
                    <SimpleLineIcons name="bag" size={24} color="#3f6e58" />
                    <MaterialCommunityIcons name="account-group-outline" size={24} color="#3f6e58" />
                </Estilo>
                <Text style={{ fontFamily: 'Lato_900Black', fontSize: 20, backgroundColor: 'white' }}>Lato900black</Text>
            </Estilo>


            {/* Mapa row*/}
            <Estilo vari='row' style={{ justifyContent: 'space-around', flex: 1 }} >
                <Estilo vari='wrapper'>
                    <ImageBackground
                        source={require('@/assets/images/mapatejo.png')}
                        style={styles.mapa}
                        imageStyle={{ resizeMode: "contain" }}></ImageBackground>
                </Estilo>


                {/* Form */}
                <Estilo vari='col' style={{ flex: 1, backgroundColor: '#202916', width: 'auto', height: 'auto', borderRadius: 5, minHeight: 600 }}>
                    <Estilo vari='col'>
                        <Text style={{ fontFamily: 'PlayfairDisplay_700Bold', fontSize: 22, color: '#fff', width: "50%" }}>
                            VAMOS DAR VIDA À SUA HTÓRIA?</Text>
                        <Text style={{ color: '#fff', width: "60%", alignSelf: 'flex-start' }}>conte-nos sobre o seu negócio e criamos o video ideal pra si.</Text>
                    </Estilo>

                    <Estilo vari='col'>
                        <Estilo vari='row'>
                            {/* Nome*/}
                            <TextInput placeholder='Nome' style={styles.texto}></TextInput>
                            {/* Email*/}
                            <TextInput placeholder='Email' style={styles.texto}></TextInput>
                        </Estilo>

                        <Estilo vari='row'>
                            {/* Telefone */}
                            <TextInput placeholder='Telefone' style={styles.texto}></TextInput>
                            {/* Nome do negócio*/}
                            <TextInput placeholder='Nome do negócio' style={styles.texto}></TextInput>
                        </Estilo>
                        <Estilo vari='row'>
                            {/* Como podemos ajudar? */}
                            <TextInput placeholder='Como podemos ajudar?' style={styles.texto}></TextInput>
                        </Estilo>

                    </Estilo>

                    <Estilo vari='wrapper'>
                    
                        <Link href="/" style={styles.button}>
                            <MaterialCommunityIcons name="calendar-month-outline" size={24} color="black" />
                            <Text>MARCAR REUNIÃO</Text>
                        </Link>
                        <Estilo vari='row'>
                            <MaterialIcons name="lock-outline" size={14} color="#fff" />
                            <Text style={{ color: '#fff', width: "90%", fontSize: 8, fontFamily: 'Inter_400Regular', paddingVertical: 10 }}>Entraremos em contato para agendar a melhor hora</Text>
                        </Estilo>
                    </Estilo>
                </Estilo>
            </Estilo>

            <Estilo vari='row'>
                <Estilo vari='row' style={{ padding: 20, backgroundColor: 'white', }}>
                    <Estilo vari='row' style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <SimpleLineIcons name="cup" size={24} color="#3f6e58" />
                        <Text>abçabçe</Text></Estilo>

                    <SimpleLineIcons name="cup" size={24} color="#3f6e58" />
                    <SimpleLineIcons name="cup" size={24} color="#3f6e58" />
                    <SimpleLineIcons name="cup" size={24} color="#3f6e58" />
                    <SimpleLineIcons name="cup" size={24} color="#3f6e58" />
                </Estilo>

            </Estilo>
        </ScrollView >
    );
}


const styles = StyleSheet.create({

    scrollContent: {
        gap: 15,
    },
    item: {
        backgroundColor: '#eeeeee',
        width: '100%',
        height: '100%',
        minHeight: 400,
        zIndex: -1,
        justifyContent: 'center',
        alignItems: 'flex-start',

    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        padding: 20,
        backgroundColor: '#b18537',
        borderRadius: 8

    },
    mapa: {
        width: '95%',
        height: 'auto',
        alignSelf: 'center'
        


    },
    texto: {
        color: "#fff",
        width: '100%',
        height: 35,
        padding: 5,
        borderRadius: 5,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        textAlign: 'left',
        fontSize: 12,
        fontFamily: 'Inter_400Regular',
        outlineColor: '#bebebe',
        borderWidth: 1,
        borderColor: "#ffffff"


    },
});

{/* 'cover', 'contain', 'stretch', 'repeat', 'center')	  */ }