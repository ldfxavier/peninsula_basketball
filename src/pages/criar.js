import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Main extends Component {

    static navigationOptions = {
        title: 'Península Basketball'
    };

    state = {
        partida: {
            pontos: '',
            tempo: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <Icon style={styles.icone} name="ios-basketball" size={30} />
                    <Text style={styles.titulo}> CRIAR PARTIDA </Text>
                    <Text style={styles.label}>Tempo:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Tempo da partida em minutos"
                        keyboardType="number-pad"
                        onChangeText={(valor) => this.setState({
                            partida: {
                                pontos: this.state.partida.pontos,
                                tempo: valor
                            }
                        })}
                    />
                    <Text style={styles.label}>Pontos:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Máximo de pontos"
                        keyboardType="number-pad"
                        onChangeText={(valor) => this.setState({
                            partida: {
                                pontos: valor,
                                tempo: this.state.partida.tempo
                            }
                        })}
                    />
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => this.props.navigation.navigate('Partida', { Partida: this.state.partida })}
                    >
                        <Text style={styles.textoBotao}>CRIAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    form:{
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
    },

    icone: {
        alignSelf: 'center',
        color: '#db8e40'
    },

    input: {
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 5,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 20,
    },

    titulo: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#999',
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#999',
    },

    botao: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#0bc480',
        alignItems: 'center'
    },

    textoBotao: {
        color: '#fff',
        fontWeight: 'bold'
    }

});
