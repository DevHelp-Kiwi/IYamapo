import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
   <ScrollView       style={styles.scrollContent}
      showsVerticalScrollIndicator={true}>
    <View style={styles.container}>
      {/*Acima ^ é container de background */}

      {/* Banner header*/}
      <View style={styles.row}><View style={styles.item}></View>
      <View style={[styles.item, {backgroundColor: "#e0bdbd"}]}>
      <Text>LOREM DASTIS DNIO PACLOECOS TOSCHEDO S,NDS</Text>
      
      </View></View>

      {/* BANNER 2 */}
      <View style={[styles.row, { backgroundColor: '#63c53c', justifyContent: 'space-evenly' }]}><Text> Não fazemos apenas audiovisual</Text><View style={styles.item}></View></View>

      {/* SOL E CORRENTE */}
      <View style={[styles.row, {justifyContent: "space-evenly" }]}>
        <View style={[styles.item, {height: '100%'}]}>
          <View style={[styles.item, {backgroundColor: "#e0bdbd"}]}>
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
        <View style={[styles.item, {backgroundColor: "#e0bdbd"}]}>
        <Text>O QUE FAZEMOS</Text></View>
        <View style={styles.item}></View></View>

      {/* ARTISTA AUDIOVISUAL?  */}
      <View style={styles.row}>
        <View style={[styles.item, {backgroundColor: "#e0bdbd"}]}>
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
  item: {
    backgroundColor: '#ff0000',
    padding: 10,
    width: 130 ,
    height: 130 ,
   
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
  col:{
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
