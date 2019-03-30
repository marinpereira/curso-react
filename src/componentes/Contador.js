import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'


export default class Contador extends Component {
 
    state = {
       numero: this.props.numeroInicial
    }
    
    /*
    constructor(props) {
       super(props)
       this.state = {}
       this.maisUm = this.maisUm.bind(this)
       this.limpar = this.limpar.bind(this)
    }

    sem => 
    maisUm() {}
    chamada
    onPress = {() => this.maisUm()}
    */

    maisUm = () => {
        this.setState({numero: this.state.numero + 1})
    }

    limpar = () => {
        this.setState({numero: this.props.numeroInicial})
    }

    menosUm = () => {
        this.setState({numero: this.state.numero - 1})
    }

    render() {
        return (
           <View>
             <Text style={{fontSize:60}}>{this.state.numero}</Text>
             <TouchableHighlight
                 onPress={this.maisUm}
                 onLongPress={this.limpar}>
                 <Text>Incrementar/Zerar</Text>
             </TouchableHighlight>
             <TouchableHighlight
                 onPress={this.menosUm}
                 onLongPress={this.limpar}>
                 <Text>Decrementar/Zerar</Text>
             </TouchableHighlight>
           </View>
        )
    }
}