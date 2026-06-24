// components/header.tsx
import { Lato_900Black, useFonts } from '@expo-google-fonts/lato';
import { PlayfairDisplay_400Regular_Italic } from '@expo-google-fonts/playfair-display';
import { Link } from 'expo-router';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Ajuste o caminho da imagem decorativa
const vector8 = require('../assets/images/adaptive-icon.png'); 

const navItems = [
  { label: "RESPIRA", href: "/#respira", active: true },
  { label: "COMO FUNCIONA", href: "/#como-funciona", active: false },
  { label: "PARA QUEM É", href: "/#para-quem-e", active: false },
  { label: "QUEM SOMOS", href: "/#quem-somos", active: false },
  { label: "CONTACTO", href: "/#contacto", active: false },
];

export function Header() {  // ← Exportação com nome Header
      let [fontsLoaded] = useFonts({
          Lato_900Black,
          PlayfairDisplay_400Regular_Italic,
  
      });
      if (!fontsLoaded) {
          return null;
      }
  return (
    <View style={styles.header}>
      {/* Container interno para centralizar o conteúdo */}
      <View style={styles.headerContent}>
        {/* Logo */}
        <Link href="/" style={styles.logoLink}>
          <View style={styles.logoWrapper}>
            <Text style={styles.logoText}>IYAMAPÔ</Text>
            <Text style={styles.logoSubtext}>PRODUTORA</Text>
          </View>
        </Link>

        {/* Linha decorativa (opcional) */}
      

        {/* Navegação */}
        <View style={styles.navContainer}>

          
          <View style={styles.navItems}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={[
                  styles.navLink,
                  item.active ? styles.navLinkActive : styles.navLinkInactive,
                ]}
              >
                {item.label}
              </Link>
            ))}
          </View>

          {/* Botão de ação */}
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Marcar reunião</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
    paddingVertical: 10,
    paddingHorizontal: 10,
    minHeight: 90,
    justifyContent: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: 1200,
    minWidth: 800,
    width: '100%',
    alignSelf: 'center',
  },
  logoLink: {
    // Remove posicionamento absoluto
    marginRight: 20,
  },
  logoWrapper: {
    alignItems: 'center',
  },
  logoText: {
    fontFamily: 'PlayfairDisplay-SemiBold',
    fontWeight: '600',
    fontSize: 30, // Reduzido para caber melhor
    color: '#b18537',
    letterSpacing: 3.3,
    lineHeight: 36,
  },
  logoSubtext: {
    fontFamily: 'Manrope-Medium',
    fontWeight: '600',
    fontSize: 9.8,
    color: '#141414',
    textAlign: 'center',
    letterSpacing: 3.38,
    lineHeight: 14,
    marginTop: -5,
  },
  decorativeLine: {
    width: 83,
    height: 2,
    marginHorizontal: 20,
    // Esconder em telas pequenas se quiser
  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    gap: 20,
  },
  navItems: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20, // Reduzido para caber
    flexWrap: 'wrap',
  },
  navLink: {
    fontFamily: 'Lato_900Black',
    fontWeight: '700',
    fontSize: 9, // Reduzido
    letterSpacing: 1.5,
    lineHeight: 19.6,
  },
  navLinkActive: {
    color: '#af7a2e',
  },
  navLinkInactive: {
    color: '#141414',
  },
  actionButton: {
    backgroundColor: '#aa7c30',
    paddingVertical: 17,
    paddingHorizontal: 12,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 150,
  },
  actionButtonText: {
    fontFamily: 'Lato_900Black',
    fontWeight: '600',
    fontSize: 14,
    color: 'white',
    letterSpacing: 1.5,
    lineHeight: 19.6,
  },
});

// Ajuste para telas pequenas (opcional)
if (width < 768) {
  // Pode adicionar estilos condicionais se quiser
}