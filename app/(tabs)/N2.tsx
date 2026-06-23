import { Estilo } from '@/components/estilo';
import { Lato_900Black, useFonts } from '@expo-google-fonts/lato';
import { PlayfairDisplay_400Regular_Italic } from '@expo-google-fonts/playfair-display';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';


export default function Index() {
    let [fontsLoaded] = useFonts({
        Lato_900Black,
        PlayfairDisplay_400Regular_Italic,

     });
        if(!fontsLoaded) {
            return null;
        }
    return (

        <ScrollView style={styles.scrollContent}
            showsVerticalScrollIndicator={true}>
            <Estilo vari='col'>
                <View>
                    <View style={[styles.item, { backgroundColor: "#e0bdbd" }, {}]}><Estilo vari="title">Este é o Título Principal</Estilo></View>
                    <View style={[styles.item, { backgroundColor: "#e0bdbd" }]}>
                        {/*<Estilo vari="subtitle" >Este é um Subtítulo Importante</Estilo>*/}
                       <Text style={{ fontFamily: 'PlayfairDisplay_400Regular_Italic', fontSize: 20 }}>PlayfairDisplay_400Regular_Italic</Text>
                        </View>
                    <View style={[styles.item, { backgroundColor: "#e0bdbd" }]}>
                        {/*<Estilo vari="body">
                        Este é o corpo do texto. Ele é usado para parágrafos longos, descrições e
                        qualquer conteúdo que não seja um título. É muito mais fácil de ler e
                        manter!
                    </Estilo>*/}
                    <Text style={{ fontFamily: 'Lato_900Black', fontSize: 20 }}>Lato900black</Text>
                    </View>
                </View>
                {/* 1. Título: basta informar vari="title" */}
                <Estilo vari='banner' style={{ backgroundColor: 'white' }}>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#6d1b1b"
    },
    item: {
        backgroundColor: '#ff0000',
        padding: 10,
        width: 200,
        height: 130,
        borderRadius: 4,
    },
    scrollContent: {
        gap: 15,
    },


})