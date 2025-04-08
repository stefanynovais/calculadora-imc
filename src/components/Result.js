//Esse componente exibe o resultado do cálculo do IMC.
import React from 'react';
import { Text, StyleSheet } from 'react-native';

//Função para exibir o texto e a resposta do cálculo de IMC.
const Result = ({ imc }) => {
    return (
        <Text style={styles.result}> Seu IMC é: {imc}</Text>
    );
};

//Função para estilizar de forma organizada o componente "result".
const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
})

//Comando para exportar o componente Result para um outro arquivo.
export default Result;