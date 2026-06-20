import { Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { Header } from '@/components/header';   
import { Footer } from '@/components/footer';   

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Stack>
          <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
          <Stack.Screen name="about" options={{ title: 'About', headerShown: false }} />
        </Stack>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1, 
  },
   scrollContent: {
    flexGrow: 1,  
  },
});