import React from 'react'
import {Text} from 'react-native'
import Padrao from '../estilo/Padrao'

// inicial
// export default function(props){
//   return <Text>{props.texto}</Text>
// }

// 1 mudança Arrow function =>
// export default (props) =>{
//     return <Text>Arrow: {props.texto}</Text>
// }

// 2 Mudança Arrow function e um parametro
// export default props =>{
//     return <Text>Arrow: {props.texto}</Text>
// }

// 3 Mudança Arrow function retirando {} e return
export default props => 
    <Text style={[Padrao.ex]}>Arrow: {props.texto}</Text>
