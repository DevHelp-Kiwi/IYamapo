import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Link href="/" style={styles.button}> About screen </Link>

      {/*      <Text style={styles.text}>About screen</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#ffffff',
  },
});
