import React from 'react'
import { View, Text, TextInput, Button, ProgressBarAndroid } from 'react-native'
import { userLabel, passwordLabel } from '../../helpers/labels/pt-br/LoginLabels'

export default LoginView = (props) => {

    if (props.state.loading) {
        return <ProgressBarAndroid style={{top: '40%'}} />
    }

    return (

        <View style={styles.ViewContainer}>

            <View style={styles.ViewCampos}>
                <Text style={styles.Text}> {userLabel} </Text>
                <TextInput
                    style={styles.TextInput}
                    value={props.state.user}
                    onChangeText={props.functions.changeUsuario}
                />
                <Text style={styles.Text}> {passwordLabel} </Text>
                <TextInput
                    style={styles.TextInput}
                    value={props.state.password}
                    onChangeText={props.functions.changeSenha}
                    secureTextEntry={true}
                />
                <Button
                    title='Acessar'
                    onPress={props.functions.validationLogin}
                />
                <Text>{props.state.message}</Text>
            </View>

        </View>
    )
}

const styles = {
    ViewContainer: {
        flex: 1,
        alignItems: 'center'
    },
    TextInput: {
        borderWidth: 1,
        margin: 5
    },
    ViewCampos: {
        top: '30%',
        padding: 10,
        width: '90%'
    },
    Text: {
        color: 'black',
        margin: 5
    }
}