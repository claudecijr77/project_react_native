import React from 'react'
import HomeToDoView from '../../view/home/HomeToDoView'

export default class HomeController extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            item: {
                id: '',
                value: ''
            },
            itemList: [],
            isEditing: false
        }

        this.handlerEditItem = this.handlerEditItem.bind(this)

    }

    handlerTextImput = (text) => {
        this.setState({
            item: {
                id: (this.state.item.id !== '') ? this.state.item.id : '',
                value: text
            }
        })
    }

    chkId(id) {

        let found = true

        this.state.itemList.forEach((item) => {
            (item.id == id) ? found = false : found = true
        })

        return found
    }

    addItemToList = () => {

        if (this.state.item.value.trim() === '') {
            return alert('Favor inserir a descrição do item!')
        }

        let newId = this.state.itemList.length + 1

        while (!this.chkId(newId)) {
            newId++
        }

        if (this.state.item.id === '') {
            let newItem = {
                id: String(newId),
                value: this.state.item.value.trim()
            }

            this.setState({
                itemList: [...this.state.itemList, newItem],
                item: { id: '', value: '' }
            })

        } else {

            let alterArray = this.state.itemList
            alterArray.forEach((item) => (
                item.id === this.state.item.id) ? item.value = this.state.item.value.trim() : null
            )

            this.setState({
                itemList: [...alterArray],
                item: {
                    id: '',
                    value: ''
                },
                isEditing: false
            })

        }
    }

    CancelEdit = () => {
        this.setState({
            item: {
                id: '',
                value: ''
            },
            isEditing: false
        })
    }

    _keyExtractor = (item, index) => item.id;

    handlerEditItem(chave) {

        this.setState({
            item: {
                id: chave,
                value: this.state.itemList.find((item) => item.id === chave).value
            },

            isEditing: true

        })
    }

    handlerDeleteItem(obj) {

        let array = [...this.state.itemList]
        let index = array.indexOf(obj)

        if (index !== -1) {
            array.splice(index, 1)
            this.setState({ itemList: array })
        }

    }

    render() {

        return (

            <HomeToDoView
                onChangeText={this.handlerTextImput}
                value={this.state.item.value}
                onPressSalvar={this.addItemToList}
                onPressCancelar={this.CancelEdit}
                isEditing={this.state.isEditing}
                
                itemList={this.state.itemList}
                keyExtractor={this._keyExtractor}
                onPressDescricao={this.handlerEditItem}
                onPressDelete={this.handlerDeleteItem}
            />

        )
    }
}