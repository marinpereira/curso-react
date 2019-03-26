import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Simples from './componentes/Simples'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto='Flexível !!'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
