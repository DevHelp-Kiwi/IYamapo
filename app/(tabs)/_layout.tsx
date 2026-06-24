// app/_layout.tsx
import { Footer } from '@/components/footer';
import { Header } from '@/components/header'; // ← Agora importa corretamente
import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Header />   {/* ← Agora funciona */}
      <View style={styles.content}>
        <Stack>
          <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
          <Stack.Screen name="about" options={{ title: 'About', headerShown: false }} />
          <Stack.Screen name="N2" options={{ title: 'Rota n2', headerShown: false }} />
        </Stack>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
});