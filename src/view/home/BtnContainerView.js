import React from 'react'
import { View, StyleSheet } from 'react-native'
import BtnSalvarView from './BtnSalvarView'
import BtnCancelarView from './BtnCancelarView'

const BtnContainerView = (props) => (
    <View>
        <View style={style.viewButton}>
            <BtnSalvarView onPress={props.onPressSalvar}/>
        </View>

        {props.isEditing &&
            <View style={style.viewButton}>
                <BtnCancelarView onPress={props.onPressCancelar} />
            </View>
        }
    </View>
)

export default BtnContainerView

const style = StyleSheet.create({
    viewButton: {
        padding: 5,
        margin: 5
    }
})