//Esse componente retorna o título da "Calculadora de IMC".
import { View, Text, StyleSheet } from 'react-native';

//Função para retornar o título.
const Title = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calculadora de IMC</Text>
        </View>

    );
};

//Função para criarmos estilos mais organizados aos nossos componentes (container, title).
const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginBottom: 20,
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
});

//Comando para exportarmos o componente Title a um outro arquivo.
export default Title;