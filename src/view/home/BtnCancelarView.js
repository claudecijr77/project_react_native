import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';

const BtnCancelarView = (props) => (
    <Button
        style={style.button}
        onPress={props.onPress}
        title="Cancelar Edição"
    />
)

export default BtnCancelarView

const style = StyleSheet.create({
    button: {
        padding: 5,
        margin: 5
    }
})