import React from 'react'
import {createDrawerNavigator} from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import {Inverter, MegaSena} from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'

export default createDrawerNavigator({
    Evento: {
      screen: Evento
    },

    ValidarProps: {
      screen: () => <ValidarProps ano={18}/>,
      navigationOptions: { title: 'Validar Props'}
    },

    Plataformas: {
        screen: Plataformas
    },
    Contador: {
        screen: () => <Contador numeroInicial={100}/>
    },
    MegaSena:
    {
        screen: () => <MegaSena numeros={8}/>,
        navigationOptions: { title: 'Mega Sena'}
    },
    Inverter:
    {
        screen: () => <Inverter texto='React-Nativo !!!'/>
    },
    ParImpar:
    {
        screen: () => <ParImpar numero={30}/>,
        navigationOptions: { title: 'Par & Impar'}
    },
    Simples:
    {
        screen: () => <Simples texto='Flexivel'/>
    }
}, {drawerWidth:180})
