// components/Typography.tsx
import { StyleSheet, Text, type TextProps } from 'react-native';

// definir styles primeiro se não buga. mas isso também pode ser resolvido com um import
const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#bbff00',
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
});

// 1. Definindo os tipos de variantes disponíveis
type TypographyVariant = 'title' | 'subtitle' | 'body';

// 2. Dicionário
const variantStyles = {
  title: styles.title,
  subtitle: styles.subtitle,
  body: styles.body,
};

// 3. Definindo as propriedades que o nosso componente vai aceitar
interface TypographyProps extends TextProps {
  variant: TypographyVariant; // A variante é obrigatória
  children: React.ReactNode; // O conteúdo do texto
  // ... outras props customizadas se necessário
}

// 4. Criando o componente principal
export function Typography({ variant, style, children, ...rest }: TypographyProps) {
  // A magia acontece aqui: o 'style' do componente vai ser a união do
  // estilo da variante escolhida com quaisquer estilos extras passados via 'style' prop.
  return (
    <Text style={[variantStyles[variant], style]} {...rest}>
      {children}
    </Text>
  );
}

// 5. Definindo os estilos para cada variante
