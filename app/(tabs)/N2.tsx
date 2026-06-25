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
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Link } from 'expo-router';
import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text } from 'react-native';



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

                    <Link href="/" style={styles.button}>
                    </Link>

                </Estilo>
                {/*criamos stortelling row*/}
                <Estilo vari='row' style={{ backgroundColor: 'white' }}>
                    {/*Coluna 1*/}
                    <Estilo vari='row' style={{ flex: 3, padding: 10 }}>
                        <Estilo vari='item' style={{ borderRadius: '100%', backgroundColor: "#223924", padding: 10, alignItems: 'center', justifyContent: 'center', alignSelf: 'baseline', width: 40, height: 40 }}> <MaterialCommunityIcons name="account-group-outline" size={24} color='white' /></Estilo>
                        <Estilo vari='col' style={{ padding: 10 }}>
                            <Text style={{ fontFamily: 'Inter_600SemiBold', fontSize: 20, alignSelf: 'flex-start', color: "#b18537" }}>
                                01
                            </Text>
                            <Text style={{ alignSelf: 'flex-start', paddingBlock: 10, fontFamily: 'PlayfairDisplay_700Bold' }}>
                                Criamos o storytelling
                            </Text>
                            <Text style={{ fontFamily: 'Inter_400Regular' }}>
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
    },
});

