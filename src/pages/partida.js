import React, { Component } from 'react';
import { 
    View,
	Text,
	Platform,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from "react-native-modal";

import Cronometro from './cronometro';

class Partida extends Component {
  
	static navigationOptions = {
		title: 'Partida',
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            alignSelf: 'center',
            // marginLeft: Platform.OS === 'ios' ? 0 : -50
        },
	};

	state = {
		timeUm: {
			nome: 'Time 01',
			pontos: 0,
		},
		timeDois: {
			nome: 'Time 02',
			pontos: 0,
		},
		modalPontos: false,
		modalRetirarPontos: false,
		time: 0,
		tipo: 0,
	};

	alterarPontos(valor, time, tipo){		
		if(time == 1){
			var pontos = this.state.timeUm.pontos;
			if(tipo == 1){
				pontos = pontos + valor;
			}else if(tipo == 2 && pontos != 0){
				pontos = pontos - valor;
				if(pontos < 0){
					pontos = 0;
				}
			}
			this.setState(state => ({
				...state,
				timeUm: {
					...state.timeUm,
					pontos,
					tipo
				}
			}));
		}else if(time == 2){
			var pontos = this.state.timeDois.pontos;
			if(tipo == 1){
				pontos = pontos + valor;
			}else if(tipo == 2 && pontos != 0){
				pontos = pontos - valor;
			}
			this.setState(state => ({
				...state,
				timeDois: {
					...state.timeDois,
					pontos,
					tipo
				}
			}));
		}
		this.mostrarModal(false);
	};

	mostrarModal = (valor, time, tipo) =>
    this.setState({ modalPontos: valor, time, tipo });

	render() {
		return (
		<View style={styles.container}>
			<Modal 
				isVisible={this.state.modalPontos}
			>
				<View style={styles.modalPontos}>
					<TouchableOpacity 
						onPress={() => this.alterarPontos(1, this.state.time, this.state.tipo)}
						style={this.state.tipo === 1 ? styles.botaoMaisPontos : styles.botaoMenosPontos}
					>
					<Text style={styles.botaoMaisPontosTexto}>{this.state.tipo === 1 ? '+' : '-'}1</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						onPress={() => this.alterarPontos(2, this.state.time, this.state.tipo)}
						style={this.state.tipo === 1 ? styles.botaoMaisPontos : styles.botaoMenosPontos}
					>
					<Text style={styles.botaoMaisPontosTexto}>{this.state.tipo === 1 ? '+' : '-'}2</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						onPress={() => this.alterarPontos(3, this.state.time, this.state.tipo)}
						style={this.state.tipo === 1 ? styles.botaoMaisPontos : styles.botaoMenosPontos}
					>
					<Text style={styles.botaoMaisPontosTexto}>{this.state.tipo === 1 ? '+' : '-'}3</Text>
					</TouchableOpacity>
				</View>
			</Modal>

			<View style={styles.placar}>

				<View style={styles.pontosTime}>
					<Text style={styles.nomeTime}>{this.state.timeUm.nome}</Text>
					<View style={styles.placarPontos}>
						<Text style={styles.pontos}>{this.state.timeUm.pontos}</Text>	
					</View>
					<View style={styles.containerBotao}>
						<TouchableOpacity
							onPress={() => this.mostrarModal(true, 1, 1)}
							style={styles.botao}
						>
							<Icon name="plus-circle" style={styles.addPonto} />
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => this.mostrarModal(true, 1, 2)}
							style={styles.botao}
						>
							<Icon name="minus-circle" style={styles.retirarPonto} />
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.pontosTime}>
					<Text style={styles.nomeTime}>{this.state.timeDois.nome}</Text>
					<View style={styles.placarPontos}>		
						<Text  style={styles.pontos}>{this.state.timeDois.pontos}</Text>		
					</View>
					<View style={styles.containerBotao}>
						<TouchableOpacity
							onPress={() => this.mostrarModal(true, 2, 1)}
							style={styles.botao}
						>
							<Icon name="plus-circle" style={styles.addPonto} />
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => this.mostrarModal(true, 2, 2)}
							style={styles.botao}
						>
							<Icon name="minus-circle" style={styles.retirarPonto} />
						</TouchableOpacity>
					</View>
				</View>

			</View>

			<Cronometro />

		</View>
		);
	}
}

export default Partida;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	
	placar: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	placarPontos: {
		height: 100,
		width: 150,
		borderRadius: 5,
		backgroundColor: '#000',
		alignItems: 'center',
		alignContent: 'center'
	},

	pontosTime: {
		flexDirection: 'column',
		alignItems: 'center',
		alignContent: 'center',
	},

	nomeTime: {
		fontSize: 20,
		textAlign: 'center',
		fontWeight: 'bold',
		padding: 5,
	},

	pontos: {
		color: '#FFF',
		fontSize: 70,
		fontWeight: 'bold',
	},

	addPonto: {
		color: '#0bc480',
		borderRadius: 5,
		fontSize: 80
	},

	retirarPonto: {
		color: '#f95959',
		borderRadius: 5,
		fontSize: 80
	},

	containerBotao: {
		flexDirection: 'row',
	},

	botao: {
		width: 88,
		height: 95,
		borderRadius: 50,
		marginTop: 20,
		alignItems: 'center',
		alignContent: 'center'
	},

	modalPontos: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
	},

	botaoMaisPontos: {
		width: 50,
		height: 50,
		margin: 20,
		borderRadius: 40,
		backgroundColor: '#0bc480',
		alignItems: 'center',
		alignContent: 'center',
	},

	botaoMenosPontos: {
		width: 50,
		height: 50,
		margin: 20,
		borderRadius: 40,
		backgroundColor: '#f95959',
		alignItems: 'center',
		alignContent: 'center',
	},

	botaoMaisPontosTexto: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#FFF'
	},

	containerTimer:{
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
	},
	
	play: {
		marginTop: 20,
		backgroundColor: '#0bc480',
		width: 100,
		height: 100,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
	},
	
	pause: {
		marginTop: 20,
		backgroundColor: '#f95959',
		width: 100,
		height: 100,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
	},

	iconePlay: {
		fontSize: 40,
		color: '#FFF',
		marginLeft: 5,
	},

	iconePause: {
		fontSize: 40,
		color: '#FFF',
	}

});
