import React from 'react'
import { 
  View, 
  Text,
  Image,
  StatusBar
} from 'react-native'

import IlustrationImg from '../../assets/illustration.png'
import { styles } from './styles'
import { ButtonIcon } from '../../components/ButtonIcon'

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <Image 
        source={IlustrationImg} 
        style={styles.image}
        resizeMode='stretch'
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente {`\n`}
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon title='Entre com o Discord' activeOpacity={0.8}/>
      </View>
    </View>
  )
}