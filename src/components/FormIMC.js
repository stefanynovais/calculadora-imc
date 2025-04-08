//Componente onde serão informados o peso e altura do usuário, calcula o IMC e exibe ao usuário  
//e também avisa se o usuário informou valores numéricos ao peso e altura.
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import Result from './Result';
import Classification from './Classification';
import IdealWeight from './IdealWeight';

//Função para a lógica do IMC, e validar se o usuário informou os valores numéricos ao peso e altura.
const FormIMC = () => {
    // O peso é o valor atual da viriável (imutável), setPeso é uma função para alterar o valor da variável "peso".
    const [peso, setPeso] = useState(''); //O "useState" seria uma lógica automática para a atualização da interface.
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [erro, setErro] = useState('');

    const calcularIMC = () => {
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);

        let valido = true;
        //isNaN é uma lógica que significa "Is not a number -> Não é um número".
        //Se o valor de "pesoNum" e "alturaNum" forem strings ou menores ou iguais a zero, retornará a função "setErro".
        if (isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0) {
            setErro('Por favor, insira valores númericos para metros (altura) e kg (peso).');
            setImc(null);
            return;
        }

        //Calcula o IMC
        const imcCalculado = (pesoNum / (alturaNum * alturaNum)).toFixed(2);
        setImc(imcCalculado);
        setErro('');
    };

    //Exibe na tela do usuários os inputs dos containers.
    return (
        <View style={styles.form}>
            <Text style={styles.label}>Peso (kg):</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: 70" //Exemplo do que o usuário pode colocar no input.
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
            />

            <Text style={styles.label}>Altura (metros):</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: 1.70"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
            />

            <Button title="Calcular IMC" onPress={calcularIMC} color="#2e7d32" />

            {/*Só mostra o texto "erro" se a variável não for vazia.*/}
            {erro !== '' && <Text style={styles.erro}>{erro}</Text>}
            {imc && (
                <>
                    <Result imc={imc} />
                    <Classification imc={parseFloat(imc)} />
                    <IdealWeight altura={parseFloat(altura)} />
                </>
            )}
        </View>
    );
};

//Função para criarmos estilos organizados dos componentes (form, label, input, erro).
const styles = StyleSheet.create({
    form: {
        marginTop: 20,
        width: '90%',

    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        fontSize: 16,
        marginBottom: 15,
        padding: 10,
        borderColor: '#ccc',
        borderRadius: 8,
    },
    erro: {
        color: 'red',
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },

});

//Comando para exportarmos o componente FormIMC a um outro arquivo.
export default FormIMC; 