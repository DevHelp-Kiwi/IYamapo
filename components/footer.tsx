import { View, Text, StyleSheet } from 'react-native';

export function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2025 Meu App - Todos os direitos reservados</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 50,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  text: {
    fontSize: 12,
    color: '#333',
  },
});