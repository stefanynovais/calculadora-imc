//Esse componente classifica o IMC com base no valor (Sobrepeso, Obesidade grau I...).
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Essa função que retorna um valor, com base no IMC. 
export default function Classification({ imc }) {
    const getClassification = () => {
        if (imc < 18.5) return 'Abaixo do peso';
        if (imc >= 18.5 && imc < 25) return 'Peso normal';
        if (imc >= 25 && imc < 30) return 'Sobrepeso';
        if (imc >= 30 && imc < 35) return 'Obesidade grau 1';
        if (imc >= 35 && imc < 40) return 'Obesidade grau 2';
        if (imc > 40) return 'Obesidade grau 3 (obesidade mórbida)';
    };
    //O método GET retorna um valor, sem modificá-lo. Ou seja, apenas lê os valores, e retorna uma resposta.

    //Retorna o título "Classificação do IMC" e uma resposta da função "getClassification".
    return (
        <View style={styles.box}>
            <Text style={styles.title}>Classificação do IMC</Text>
            <Text style={styles.classification}>{getClassification()}</Text>
        </View>
    );
}

//Função para criarmos estilos organizados para os nossos componentes (box, title, classification).
const styles = StyleSheet.create({
    box: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#e8f5e9',
        borderRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 6,
        color: '#333',
    },
    classification: {
        fontSize: 18,
        color: '#2e7d32',
    },
});