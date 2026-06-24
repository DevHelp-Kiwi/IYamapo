import { Estilo } from '@/components/estilo';
import { Lato_900Black, useFonts } from '@expo-google-fonts/lato';
import { PlayfairDisplay_400Regular_Italic } from '@expo-google-fonts/playfair-display';
import { Link } from 'expo-router';
import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text } from 'react-native';


export default function Index() {
    let [fontsLoaded] = useFonts({
        Lato_900Black,
        PlayfairDisplay_400Regular_Italic,

    });
    if (!fontsLoaded) {
        return null;
    }
    return (

        <ScrollView style={styles.scrollContent}
            showsVerticalScrollIndicator={true}>
            <Estilo vari='col'>
                <Estilo vari='row' style={{ backgroundColor: 'white' }}>
                    <Estilo vari='container'>
                        {/*banner*/}
                        <Estilo vari='banner'>
                            <ImageBackground
                                source={require('@/assets/images/capabanner.png')}
                                style={styles.item}
                            />
                        </Estilo>



                        <Estilo vari='container'>
                            <Estilo vari="title">Este é o Título Principal
                                <Link href="/" style={styles.button}>
                                </Link>
                            </Estilo>
                        </Estilo>




                        {/*<Estilo vari="subtitle" >Este é um Subtítulo Importante</Estilo>*/}
                        <Text style={{ fontFamily: 'PlayfairDisplay_400Regular_Italic', fontSize: 20 }}>PlayfairDisplay_400Regular_Italic</Text>



                        {/* 1. Título: basta informar vari="title" */}

                        {/*<Estilo vari="body">
                        Este é o corpo do texto. Ele é usado para parágrafos longos, descrições e
                        qualquer conteúdo que não seja um título. É muito mais fácil de ler e
                        manter!
                    </Estilo>*/}
                        <Text style={{ fontFamily: 'Lato_900Black', fontSize: 20 }}>Lato900black</Text>
                    </Estilo>
                    <Estilo vari='col' style={{ flexDirection: 'column' }}>


                    </Estilo>
                </Estilo>


            </Estilo>

        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollContent: {
        gap: 15,
    },
    item: {
        backgroundColor: '#ff0000',

        paddingTop: 400,
        width: '100%',
        height: '100%',
        minHeight: 500,

        borderRadius: 4,
    },
    row: {

        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: 150,

        backgroundColor: '#f0f0f0',
        padding: 10,

        borderColor: '#000000',
        borderStyle: "solid",
        borderWidth: 0,
        borderBottomWidth: 2,
    },
    col: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',

        backgroundColor: '#f0f0f0',

        borderRadius: 8,
    },
    square: {
        width: 100,
        height: 100,
        backgroundColor: '#0f8655',
        borderRadius: 8,
    },
    banner: {
        width: '60%',
        height: "100%",
        backgroundColor: '#ffcc80',
        justifyContent: 'center',
        alignItems: 'baseline',
        borderRadius: 8,
    },
    text: {
        color: '#fff',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#662f2f',
    },

});

