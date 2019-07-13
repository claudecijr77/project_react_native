import React from 'react'
import { View } from 'react-native'
import InputView from './InputView'
import BtnContainerView from './BtnContainerView'

const HeaderToDo = (props) => (
    <View>
        <InputView onChangeText={props.onChangeText} value={props.value} />
        <BtnContainerView onPressSalvar={props.onPressSalvar} onPressCancelar={props.onPressCancelar} isEditing={props.isEditing} />
    </View>
)

export default HeaderToDo