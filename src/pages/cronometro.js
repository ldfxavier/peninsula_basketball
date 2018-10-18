import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class Cronometro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tempoCorrido: '00:00',
            rodando: false,
            startTime: null,
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

    start() {
        if(this.state.rodando) {
            clearInterval(this.interval);

            this.setState({rodando: false});
            return;
        }

        var timer = null;
        if(this.state.startTime != null){
            timer = this.state.startTime;
        }

        this.interval = setInterval(() => {
            timer = timer + 1;

            cronometro = this.transforma_segundos(timer);

            this.setState({
                tempoCorrido: cronometro,
                startTime: timer,
                rodando: true
            });
        }, 1000);
    }

    reset(){
        clearInterval(this.interval);

        this.setState({
            tempoCorrido: '00:00',
            startTime: null,
            rodando: false
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.timerContainer}>
                        <Text style={styles.timer}>
                            {this.state.tempoCorrido}
                        </Text>
                    </View>
                    <View style={styles.botaoContainer}>
                        <TouchableOpacity
                            onPress={this.start.bind(this)}
                            style={[this.state.rodando ? styles.stop : styles.start, styles.botao]}
                        >
                            <Text style={styles.textoBranco}>
                            {this.state.rodando ? 'Stop' : 'Start'}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={this.reset.bind(this)}
                            style={[styles.stop, styles.botao]}
                        >
                            <Text style={styles.textoBranco}>
                                Reset
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

    timerContainer: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    botaoContainer: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    timer: {
     fontSize: 60
    },

    botao: {
        height: 100,
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    start: {
        backgroundColor: '#2b9f13',
    },

    stop: {
        backgroundColor: '#c32441',
    },

    textoBranco: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold'
    }
});
