// components/Typography.tsx
import { StyleSheet, Text, type TextProps } from 'react-native';

// 1. Definindo os tipos de variantes disponíveis
type Estilos = 'title' | 'subtitle' | 'body' | 'col' | 'row' | 'banner';
const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#666',
    marginBottom: 6,
  },
  body: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#444',
    lineHeight: 22,
  },
  container: {
    flex: 1,
    backgroundColor: '#c9b2b2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: '100%',
    height: 250,
    backgroundColor: '#c02b2b',
    padding: 1,

   
  },
  col: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#bbbbbb',
    
  },
  banner: {
    flexDirection: "row",
    alignContent: "space-around",
    flex: 1,
    width: "100%"

  },


});
// 2. Mapeando cada variante para um conjunto de estiloss
const variantStyles = {
  title: styles.title,
  subtitle: styles.subtitle,
  body: styles.body,
  col: styles.col,
  row: styles.row,
  banner: styles.banner,
};

// 3. Definindo as propriedades que o nosso componente vai aceitar
interface TypographyProps extends TextProps {
  vari: Estilos; // A variante é obrigatória
  children: React.ReactNode; // O conteúdo do texto
  // ... outras props customizadas se necessário
}

// 4. Criando o componente principal
export function Estilo({ vari, style, children, ...rest }: TypographyProps) {
  // A magia acontece aqui: o 'style' do componente vai ser a união do
  // estilos da variante escolhida com quaisquer estiloss extras passados via 'style' prop.
  return (
    <Text style={[variantStyles[vari], style]} {...rest}>
      {children}
    </Text>
  );
}

