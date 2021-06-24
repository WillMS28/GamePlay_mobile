import React from 'react'
import { View, Text, Image, Alert, ActivityIndicator } from 'react-native'

import { useAuth } from '../../hooks/auth'

import { styles } from './styles'
import { theme } from '../../global/theme'

import { Background } from '../../components/Background'
import IlustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'

export function SignIn() {

  const { loading, signIn } = useAuth()

  async function handleSignIn() {
    try {
      await signIn()
    } catch (err) {
      Alert.alert(err)
    }
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

          {
            loading ? 
              <ActivityIndicator color={theme.colors.primary}/> 
            : 
              <ButtonIcon 
                title='Entre com o Discord' 
                onPress={handleSignIn}
              />
          }

        </View>
      </View>
    </Background>
  )
}