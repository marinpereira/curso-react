/* Validar propriedades recebidas dentro de um componente */
/* prop-types fará as validações */
import React from 'react'
import PropTypes from 'prop-types'
import {Text} from 'react-native'
import Padrao from '../estilo/Padrao'

const ValidarProps = props =>
    <Text style={Padrao.fonte40}>
       {props.label}
       {props.ano + 2000}
    </Text>

/*
Valor default das propriedades, caso não seja passado nenhum valor
em casos de nulo, undefined
*/
ValidarProps.defaultProps = {
   // {props.label || 'Opa'}
   label: 'Ano: '
}

/* Regras de Validação, critérios */
ValidarProps.propTypes = {
   ano: PropTypes.number.isRequired
}

export default ValidarProps
