import React from 'react'
import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useAuth } from '../../hooks/auth'

import IlustrationImg from '../../assets/illustration.png'
import { styles } from './styles'
import { Background } from '../../components/Background'

import { ButtonIcon } from '../../components/ButtonIcon'

export function SignIn() {
  const navigation = useNavigation()

  const { user } = useAuth()

  function handleSignIn() {
    navigation.navigate('Home')
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image 
          source={IlustrationImg} 
          style={styles.image}
          resizeMode='stretch'
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {`\n`}
            e organize suas {`\n`}
            jogatinas {`\n`}
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>

          <ButtonIcon 
            title='Entre com o Discord' 
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  )
}