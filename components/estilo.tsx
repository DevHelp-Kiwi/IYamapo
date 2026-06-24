// components/Layout.tsx
import { StyleSheet, View, ViewProps } from 'react-native';

type Estilos = 'container' | 'row' | 'col' | 'banner' | 'image' | 'wrapper' | 'item';
interface LayoutProps extends ViewProps {
  vari: Estilos;
  children: React.ReactNode;
}

const layoutStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  row: {
     flexDirection: 'row',
      justifyContent: 'space-evenly',
       alignItems: 'center',
       /*auto prop parece estar bugado*/
        width: '100%',
         height: 'auto',
        


           
          },
  col: {
     flexDirection: 'column',
      justifyContent: 'space-evenly',
       alignItems: 'center',
         width: 'auto',
          height: 'auto',
          flex: 1,
         },
  banner: {
     flexDirection: 'row',
      alignContent: 'space-around',
       width: 1600,
      height:  500,
            justifyContent: 'flex-start',
        alignItems: 'flex-start',
      
      display: 'flex'
     },
  image: {

  },
  wrapper: {
alignItems: 'center',
flex: 2,
  },
  item:{
    padding: 50,
   
      width: '50%',
         height: '50%',
        
  }
});

export function Estilo({ vari, style, children, ...rest }: LayoutProps) {
  return (
    <View style={[layoutStyles[vari], style]} {...rest}>
      {children}
    </View>
  );
}