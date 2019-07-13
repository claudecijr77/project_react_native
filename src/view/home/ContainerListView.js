import React from 'react'
import { FlatList, View } from 'react-native'
import ItensView from './ItensView'

export default class ContainerListView extends React.Component {
    
    constructor(props) {

        super(props)

    }

    itemListCompras = ({ item }) => (
        <ItensView
            onPressDescricao={this.props.onPressDescricao}
            onPressDelete={this.props.onPressDelete}
            item={item}
        />
    )

    render() {
        return (
            <FlatList
                data={this.props.itemList}
                renderItem={this.itemListCompras}
                keyExtractor={this.props.keyExtractor}
                ItemSeparatorComponent={() => <View style={{ borderBottomWidth: 1, borderColor: 'grey' }} />}
            />
        )
    }

}






