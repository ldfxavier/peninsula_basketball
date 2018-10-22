import { createStackNavigator } from 'react-navigation';

import Partida from './pages/partida';
import Criar from './pages/criar';

export default createStackNavigator({
    Criar,
    Partida
},{
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#db8e40'
        },
        headerTintColor: '#fff'
    }
});