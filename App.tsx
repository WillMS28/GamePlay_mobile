import React from 'react'
import { StatusBar } from 'react-native'

// Importação do hook para usar fonts do google, e as proprias fontes que foram instaladas
import { useFonts } from 'expo-font'
import AppLoading  from 'expo-app-loading'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'

import { Routes } from './src/routes'

import { Background } from './src/components/Background'

export default function App() {
  // carregando as fonts em uma variavel
  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_500Medium, 
    Rajdhani_500Medium, 
    Rajdhani_700Bold
  })
  // verificando se as fonts foram carregadas, se não => continuar na tela de loading
  if (!fontsLoaded) {
    // App permanece na tela de splash
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <Routes />
    </Background>
  )
}