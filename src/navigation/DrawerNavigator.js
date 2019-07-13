import {
    createMaterialBottomTabNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createDrawerNavigator,
    createStackNavigator
} from 'react-navigation'
import HomeController from '../controller/home/HomeController'

export default DrawerNavigator = createDrawerNavigator({
    'Home1': {
        screen: createStackNavigator(
            {
                HomeController: {
                    screen: HomeController,
                    navigationOptions: {
                        title: 'Lista de compras'
                    }
                }
            }),
        navigationOptions: ({
            drawerLabel: 'Home 1'
        })
    }
},
    {
        initialRouteName: 'Home1'
    }
)