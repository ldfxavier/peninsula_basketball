import { createStackNavigator } from 'react-navigation';

import Partida from './pages/partida';
import Cronometro from './pages/cronometro';

export default createStackNavigator({
    Partida,
    Cronometro,
},{
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#d06740'
        },
        headerTintColor: '#fff'
    }
});