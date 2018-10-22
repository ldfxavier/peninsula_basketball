import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class Cronometro extends Component {

    constructor(props) {
        super(props);

        const tempoMaximo = (this.props.tempoMaximo) ? this.props.tempoMaximo * 60 : null;

        this.state = {
            tempoCorrido: tempoMaximo ? this.transforma_segundos(tempoMaximo) : '00:00',
            rodando: false,
            iniciarTempo: tempoMaximo,
            tempoMaximo: tempoMaximo
        };
    }

    transforma_segundos(segundos){
              
        function duas_casas(numero){
            if (numero <= 9){
                numero = "0"+numero;
            }
            return numero;
        }

        minuto = duas_casas(Math.floor((segundos%3600)/60));
        segundo = duas_casas((segundos%3600)%60);
                  
        formatado = minuto+":"+segundo;
                  
        return formatado;
    }

    iniciar() {
        if(this.state.rodando) {
            clearInterval(this.interval);

            this.setState({rodando: false});
            return;
        }

        var tempo = null;
        if(this.state.iniciarTempo != null){
            tempo = this.state.iniciarTempo;
        }

        this.interval = setInterval(() => {
            if(this.state.tempoMaximo === null || this.state.tempoMaximo === undefined){
                tempo = tempo + 1;
            }else{
                tempo = tempo - 1;
            }

            cronometro = this.transforma_segundos(tempo);

            this.setState({
                tempoCorrido: cronometro,
                iniciarTempo: tempo,
                rodando: true
            });
        }, 1000);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.tempoContainer}>
                        <Text style={styles.tempo}>
                            {this.state.tempoCorrido}
                        </Text>
                        <TouchableOpacity
                            onPress={this.iniciar.bind(this)}
                            style={[this.state.rodando ? styles.pausar : styles.iniciar, styles.botao]}
                        >
                            <Text style={styles.textoBranco}>
                            {this.state.rodando ? <Icon name="controller-paus" size={30} /> : <Icon style={styles.iconPlay} name="controller-play" size={30} />}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },

    header: {
        flex: 1
    },
    
    footer: {
        flex: 1
    },

    tempoContainer: {
        flex: 1,
        alignItems: 'center'
    },

    tempo: {
     fontSize: 60
    },

    botao: {
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    iniciar: {
        backgroundColor: '#0bc480',
    },

    pausar: {
        backgroundColor: '#f95959',
    },

    textoBranco: {
        fontSize: 12,
        color: '#FFF',
        fontWeight: 'bold'
    }
});
