import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Modal from "react-native-modal";

class ModalPontos extends Component {
    render() {
        return (
            <View>
                <Modal 
                    isVisible={this.state.modalPontos}
                >
                    <View style={styles.modalPontos}>
                        <TouchableOpacity 
                            onPress={() => this.alterarPontos(1, 1, 1)}
                            style={styles.botaoMaisPontos}
                        >
                        <Text style={styles.botaoMaisPontosTexto}>+1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => this.alterarPontos(2, 1, 1)}
                            style={styles.botaoMaisPontos}
                        >
                        <Text style={styles.botaoMaisPontosTexto}>+2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => this.alterarPontos(3, 1, 1)}
                            style={styles.botaoMaisPontos}
                        >
                        <Text style={styles.botaoMaisPontosTexto}>+3</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    }
}

export default ModalPontos;

const styles = StyleSheet.create({
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

	botaoMaisPontosTexto: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#FFF'
	},
});

