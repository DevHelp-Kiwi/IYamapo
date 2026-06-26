import { Estilo } from '@/components/estilo';
import { Birthstone_400Regular } from '@expo-google-fonts/birthstone/400Regular';
import { useFonts } from '@expo-google-fonts/birthstone/useFonts';
import { Inter_400Regular } from '@expo-google-fonts/inter/400Regular';
import { Inter_600SemiBold } from '@expo-google-fonts/inter/600SemiBold';
import { Lato_900Black } from '@expo-google-fonts/lato';
import { PlayfairDisplay_400Regular_Italic, PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
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
                <Estilo vari='row' style={{ backgroundColor: 'white', flex: 1, padding: 50, paddingBottom: 70 }}>
                    {/*Coluna 1*/}
                    <Estilo vari='row' style={{ flex: 3, padding: 10 }}>
                        {/*Icone ->*/}<Estilo vari='item' style={{ borderRadius: '100%', backgroundColor: "#223924", padding: 10, alignItems: 'center', justifyContent: 'center', alignSelf: 'baseline', width: 40, height: 40 }}> <MaterialCommunityIcons name="account-group-outline" size={24} color='white' /></Estilo>
                        <Estilo vari='col' style={{ padding: 10, paddingBottom: 50 }}>
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
                        <Estilo vari='col' style={{ padding: 10, paddingBottom: 50 }}>
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
                        <Estilo vari='col' style={{ padding: 10, paddingBottom: 50 }}>
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
                {/*SPAN*/}
                <Estilo vari='wrapper' style={{ height: 1, width: '85%', padding: 5, backgroundColor: '#adab9a', alignSelf: 'center' }}></Estilo>

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
                    
                    <Estilo vari='col'><MaterialCommunityIcons name="silverware-fork-knife" size={24} color="#3f6e58" />
                    <Text>Restaurantes</Text>
                    </Estilo>
                    <Estilo vari='col'><SimpleLineIcons name="cup" size={24} color="#3f6e58" />
                    <Text>Cafés e Pastelarias</Text></Estilo>
                    <Estilo vari='col'><FontAwesome6 name="bed" size={24} color="#3f6e58" />
                    <Text>Alojamentos Locais</Text></Estilo>
                    <Estilo vari='col'><SimpleLineIcons name="handbag" size={24} color="#3f6e58" />
                    <Text>Comércio Local</Text></Estilo>
                    <Estilo vari='col'><SimpleLineIcons name="bag" size={24} color="#3f6e58" />
                    <Text>Pequenas Empresas</Text></Estilo>
                    
                    
                    
                    
                    
                   
                </Estilo>
                <Text style={{ fontFamily: 'Lato_900Black', fontSize: 20, backgroundColor: 'white' }}>Lato900black</Text>
            </Estilo>


            {/* Mapa row*/}
            <Estilo vari='row' style={{ justifyContent: 'space-around', flex: 1, alignItems: 'center' }} >
                <Estilo vari='wrapper' style={{ flex: 1 }}>
                    <ImageBackground
                        source={require('@/assets/images/mapatejo.png')}
                        style={styles.mapa}
                        imageStyle={{ resizeMode: "contain" }}></ImageBackground>
                </Estilo>


                {/* Form */}
                <Estilo vari='col' style={{ flex: 1, backgroundColor: '#202916', width: 'auto', height: 'auto', borderRadius: 5, minHeight: 500, alignItems: 'stretch', justifyContent: 'space-evenly' }}>
                    <Estilo vari='col' style={{ width: "40%", alignSelf: 'flex-start', padding: 50 }}>
                        <Text style={{ fontFamily: 'PlayfairDisplay_700Bold', fontSize: 22, color: '#fff' }}>
                            VAMOS DAR VIDA À SUA HISTÓRIA?</Text>
                        <Estilo vari='wrapper' style={{ alignSelf: 'flex-start', maxHeight: 70, paddingBottom: 10 }}>
                            <Text style={{ textDecorationLine: 'underline', textDecorationColor: '#b18537', color: '#b18537' }}> ___________________
                                {/*vazio para pegar apenas as props do underline*/}
                            </Text>
                        </Estilo>
                        <Text style={{ color: '#fff', width: "100%", alignSelf: 'flex-start' }}>
                            Conte-nos sobre o seu negócio e criamos o video ideal pra si.</Text>
                    </Estilo>

                    <Estilo vari='col' >
                        <Estilo vari='row' style={{ width: '90%', paddingVertical: 10 }}>
                            {/* Nome*/}
                            <TextInput placeholder='Nome' style={styles.texto}></TextInput>
                            {/* Email*/}
                            <TextInput placeholder='Email' style={styles.texto}></TextInput>
                        </Estilo>

                        <Estilo vari='row' style={{ width: '90%', paddingVertical: 10 }}>
                            {/* Telefone */}
                            <TextInput placeholder='Telefone' style={styles.texto}></TextInput>
                            {/* Nome do negócio*/}
                            <TextInput placeholder='Nome do negócio' style={styles.texto}></TextInput>
                        </Estilo>
                        <Estilo vari='row' style={{ width: '90%', paddingVertical: 10 }}>
                            {/* Como podemos ajudar? */}
                            <TextInput placeholder='Como podemos ajudar?' style={styles.texto2} ></TextInput>
                        </Estilo>

                    </Estilo>

                    <Estilo vari='wrapper'>

                        <Link href="/" style={styles.button}>
                            <MaterialCommunityIcons name="calendar-month-outline" size={25} color="#fff" style={{ paddingHorizontal: 15 }} />
                            <Text style={{ color: '#fff' }}>MARCAR REUNIÃO</Text>
                        </Link>
                        <Estilo vari='row' style={{ justifyContent: 'center', width: "90%" }} >
                            <MaterialIcons name="lock-outline" size={14} color="#fff" style={{ padding: 10 }} />
                            <Text style={{ color: '#fff', fontSize: 8, fontFamily: 'Inter_400Regular', paddingVertical: 10, textAlign: 'center' }}>
                                Entraremos em contato para agendar a melhor hora</Text>
                        </Estilo>
                    </Estilo>
                </Estilo>
            </Estilo>

            <Estilo vari='row'>
                <Estilo vari='row' style={{ backgroundColor: "#e9e9e9", height: '45%', width: '100%', flex: 1 }} >
                    <Estilo vari='row' style={{height: 200, width: "15%", justifyContent: 'space-around', padding: 10}}><Estilo vari='wrapper' style={{paddingHorizontal: 28}}><FontAwesome6 name="clapperboard" size={24} color="#3f6e58"  /></Estilo>
                    <Text>Produção audiovisual de alta qualidade</Text>
                    </Estilo>
                    <Estilo vari='row'style={{height: 200, width: "15%", justifyContent: 'space-around', padding: 10}}><Estilo vari='wrapper' style={{paddingHorizontal: 28}}><Feather name="target" size={34} color="#3f6e58" /></Estilo>
                    <Text>Foco em resultados e autenticidade</Text>
                    </Estilo>
                    <Estilo vari='row' style={{height: 200, width: "15%", justifyContent: 'space-around', padding: 10}}><Estilo vari='wrapper' style={{paddingHorizontal: 28}}><EvilIcons name="location" size={40} color="#3f6e58" /></Estilo>
                    <Text>Especialistas no Médio Tejo</Text>
                    </Estilo>
                    <Estilo vari='row' style={{height: 200, width: "15%", justifyContent: 'space-around', padding: 10}}><Estilo vari='wrapper' style={{paddingHorizontal: 28}}><FontAwesome name="handshake-o" size={32} color="#3f6e58" /></Estilo>
                    <Text>Acompanhamento próximo e humano</Text>
                    </Estilo>
                    <Estilo vari='row' style={{height: 200, width: "15%", justifyContent: 'space-around', padding: 10}}><Estilo vari='wrapper' style={{paddingHorizontal: 28}}><MaterialCommunityIcons name="trending-up" size={47} color="#3f6e58" /></Estilo>
                    Conteúdos que geram impacto
                    </Estilo>
                </Estilo>
               
            </Estilo>
        </ScrollView >
    );
}


const styles = StyleSheet.create({

    scrollContent: {
        gap: 15,
        backgroundColor: '#ffffff'
    },
    item: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: '100%',
        minHeight: 400,
        zIndex: -1,
        justifyContent: 'center',
        alignItems: 'flex-start',

    },
    button: {
        fontSize: 18,
        padding: 20,
        backgroundColor: '#b18537',
        borderRadius: 8,
        width: '90%',
        alignItems: 'center',
        alignContent: 'space-around',
        textAlign: 'center'


    },
    mapa: {
        width: '95%',
        height: 'auto',
        alignSelf: 'center',
        padding: 250



    },
    texto: {
        color: "#fff",
        width: '100%',
        height: 45,
        padding: 5,
        paddingHorizontal: 15,
        paddingBottom: 17,
        borderRadius: 5,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        textAlign: 'left',
        fontSize: 12,
        fontFamily: 'Inter_400Regular',
        outlineColor: '#bebebe',
        borderWidth: 1,
        borderColor: "#ffffff",



    },
    texto2: {
        color: "#fff",
        width: '100%',
        height: 50,
        padding: 5,
        paddingHorizontal: 15,
        paddingBottom: 17,
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