import React from 'react'
import LoginView from '../../view/login/LoginView'
import { validaLogin } from '../../api/Api';

export default class LoginController extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: 'guilherme',
            password: 'google94',
            message: '',
            loading: false,
        }
    }

    changeUserState = (user) => (
        this.setState({
            user: user
        })
    )


    changePasswordState = (password) => (
        this.setState({
            password: password
        })
    )

    validationLogin = () => {

        this.setState({
            loading: true,
            message: ''
        })

        validaLogin(this.state.user, this.state.password)
            .then((result) => result.json())
            .then((resp) => {

                if (resp.meta.status === 'success') {
                    this.props.navigation.navigate('DrawerApp')
                    // console.log(this.props)
                } else {
                    this.setState({
                        message: resp.meta.message,
                        loading: false
                    })
                }

            })
            .catch((error) => console.error(error))
    }


    render() {
        return (
            <LoginView
                state={this.state}
                functions={{
                    'changeUsuario': this.changeUserState,
                    'changeSenha': this.changePasswordState,
                    'validationLogin': this.validationLogin
                }}
            />
        )
    }
}