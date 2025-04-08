//Aqui neste arquivo é onde os principais componentes serão importados, inclusive do React Native também.
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FormIMC from './src/components/FormIMC';
import Title from './src/components/Title';
import React from 'react';



export default function App() {
  return (
    //Começa o container principal da tela e seus componentes (título e formulário com cálculos).
    <View style={styles.container}>
      <Title />
      <FormIMC />
      <StatusBar style="auto" />
    </View>
  );
}

//Aqui temos uma função para criarmos estilos mais organizados ao nosso componente "container".
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
