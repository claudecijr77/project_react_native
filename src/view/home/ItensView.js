import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'


const ItensView = (props) => (
    <View>
        <View style={style.viewItem}>

            <TouchableOpacity style={style.containerDescricao} onPress={() => props.onPressDescricao(props.item.id)}>
                <Text style={style.itemDescricao}> {props.item.value} </Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.containerDelete} onPress={props.onPressDelete}>
                <Text style={style.itemDelete}> Apagar </Text>
            </TouchableOpacity>

        </View>
    </View>
)

export default ItensView

const style = StyleSheet.create({
    containerDelete: {
        flex: 0.2
    },
    containerDescricao: {
        flex: 0.8
    },
    viewItem:{
        flexDirection: 'row'
    },
    itemDescricao: {
        fontSize: 30
    },
    itemDelete: {

    }    
})
