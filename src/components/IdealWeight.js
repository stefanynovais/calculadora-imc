//Esse componente retorna o peso mínimo e máximo de uma pessoa.  
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Função para calcular o peso mínimo e máximo de acordo com a altura da pessoa.
export default function IdealWeight({ altura }) {
    const calcWeightRange = () => {
        const alturaNum = altura;
        const min = (18.5 * alturaNum * alturaNum).toFixed(2);
        const max = (24.9 * alturaNum * alturaNum).toFixed(2);
        return { min, max };
    };

    const { min, max } = calcWeightRange();
    //Esta função retorna um objeto (calc) com duas propriedades (min e max), desestruturando o objeto, 
    //deixando o código mais limpo e legível.

    //Recebe todos os valores calculados e exibe na tela.
    return (
        <View style={styles.box}>
            <Text style={styles.title}>Peso ideal para a sua altura: </Text>
            <Text style={styles.range}>
                Mínimo: {min} kg | Máximo: {max} kg
            </Text>
        </View>
    );
}

//Função para criarmos estilos mais organizados aos nossos componentes(box, title, range).
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
    },
    range: {
        fontSize: 18,
        color: '#2e7d32',
    },
});