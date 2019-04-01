import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Evento extends Component {

   state = {
      /*  Componente controlado/vinculado/amarrado texto : '' e onChangeText={this.alterarTexto} */
      texto : ''
      /* Componente não controlado texto : null e sem Evento */
   }

   /*
   forma reduzida de escrever chave e Valor
   o nome do parametro é igual ao envio e recebimento de parametros
   this.setState({ texto: texto }) = this.setState({ texto })
   */
   alterarTexto = texto => {
      this.setState({ texto })
   }

   render() {
      return (
         <View>
           <Text style={Padrao.fonte40}>{this.state.texto}</Text>
           <TextInput value={this.state.texto} style={Padrao.input} onChangeText={this.alterarTexto} />
         </View>

      )
   }


}
