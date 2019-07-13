import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const InputView = (props) => (
    <View>
        <TextInput
            style={style.edit}
            onChangeText={props.onChangeText}
            value={props.value}
        />
    </View>
)

export default InputView

const style = StyleSheet.create({
    edit: {
        borderWidth: 1,
        margin: 10,
        padding: 5,
        borderRadius: 50
    }
})