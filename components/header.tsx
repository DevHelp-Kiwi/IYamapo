import { View, Text, StyleSheet } from 'react-native';

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Meu App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20, 
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});