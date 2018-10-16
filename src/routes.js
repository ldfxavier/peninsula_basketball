import { createStackNavigator } from 'react-navigation';

import Partida from './pages/partida';

export default createStackNavigator({
    Partida,
},{
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#d06740'
        },
        headerTintColor: '#fff'
    }
});