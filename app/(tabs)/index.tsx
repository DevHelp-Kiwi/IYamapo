import { Estilo } from '@/components/estilo';
import Icons from '@/components/icons';
import { Link } from 'expo-router';
import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const { Feather, SimpleLineIcons, FontAwesome6, MaterialCommunityIcons } = Icons;

export default function Index() {
  return (
    <ScrollView style={styles.scrollContent}
      showsVerticalScrollIndicator={true}>
      <View style={styles.container}>
        {/*Acima ^ é container de background */}

        {/* Banner header*/}

        <Estilo vari='banner'>
          <ImageBackground
            source={require('@/assets/images/homescreen.jpg')}
            style={styles.banner} /> </Estilo>

        {/* Span */}
        <View style={[styles.row, { backgroundColor: '#63c53c', justifyContent: 'space-evenly' }]}><Text> Não fazemos apenas audiovisual</Text><View style={styles.item}></View></View>



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
        </Estilo>



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
        </Estilo>





        {/* BANNER 2 */}


        {/* SOL E CORRENTE */}
        <View style={[styles.row, { justifyContent: "space-evenly" }]}>
          <View style={[styles.item, { height: '100%' }]}>
            <View style={[styles.item, { backgroundColor: "#e0bdbd" }]}>
              <Text> Sol e corrente</Text>
            </View>
          </View>
          <View style={styles.col}>
            <Text>LOREM IPSLUM</Text>
            <Link href="/N2" style={styles.button}>
              Assista Trailer
            </Link>
          </View>
        </View>

        {/* TAB BANNER */}
        <View style={styles.row}>
          <View style={[styles.item, { backgroundColor: "#e0bdbd" }]}>
            <Text>O QUE FAZEMOS</Text></View>
          <View style={styles.item}></View></View>

        {/* ARTISTA AUDIOVISUAL?  */}
        <View style={styles.row}>
          <View style={[styles.item, { backgroundColor: "#e0bdbd" }]}>
            <Text>ARTISTA AUDIOVISIAL?</Text>
          </View>
          <View style={styles.item}></View></View>

        {/* INFO OBJECT */}
        <View style={styles.row}><View style={styles.banner}></View> <View style={styles.item}></View></View>


      </View></ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9b2b2',
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
  bannerr: {

    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
    minHeight: 400,
    zIndex: -1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  item: {
    backgroundColor: '#ff0000',
    padding: 10,
    width: 130,
    height: 130,

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
});
