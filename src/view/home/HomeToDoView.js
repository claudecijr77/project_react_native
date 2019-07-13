import React from 'react'
import { View } from 'react-native'
import HeaderToDo from '../../view/home/HeaderToDoView'
import ContainerListView from '../../view/home/ContainerListView'

const HomeToDoView = (props) => (
    <View>

        <HeaderToDo
            onChangeText={props.onChangeText}
            value={props.value}
            onPressSalvar={props.onPressSalvar}
            onPressCancelar={props.onPressCancelar}
            isEditing={props.isEditing}
        />


        <ContainerListView
            itemList={props.itemList}
            keyExtractor={props.keyExtractor}
            onPressDescricao={props.onPressDescricao}
            onPressDelete={props.onPressDelete}
        />

    </View>
)

export default HomeToDoView