import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';

const BtnSalvarView = (props) => (
    <Button
        style={style.button}
        onPress={props.onPress}
        title="Gravar"
    />
)

export default BtnSalvarView

const style = StyleSheet.create({
    button: {
        padding: 5,
        margin: 5
    }
})