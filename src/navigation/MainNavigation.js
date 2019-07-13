import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import LoginController from '../controller/login/LoginController'
import DrawerNavigator from '../navigation/DrawerNavigator'

const MainNavigation = createSwitchNavigator({
    'Login': {
        screen: LoginController,

    },
    'DrawerApp': {
        screen: DrawerNavigator
    }
},
    {
        initialRouteName: 'DrawerApp'
    }
)

export default createAppContainer(MainNavigation)