import { StyleSheet, Text, View } from 'react-native';

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Meu App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 30,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});