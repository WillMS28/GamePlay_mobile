import React from 'react'
import { View, ImageBackground, Text, FlatList } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'

import { theme } from '../../global/theme'
import { styles } from './styles'

import { Background } from '../../components/Background'
import { Header } from '../../components/Header'
import { ListHeader } from '../../components/ListHeader'
import { Members } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import BannerImg from '../../assets/banner.png'

export function AppointmentsDetails() {
  const members = [
    {
      id: '1',
      username: 'William',
      avatar_url: 'http://github.com/WillMS28.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'William',
      avatar_url: 'http://github.com/WillMS28.png',
      status: 'online'
    },
    {
      id: '3',
      username: 'William',
      avatar_url: 'http://github.com/WillMS28.png',
      status: 'online'
    },
  ]

  return (
    <Background>
      <Header 
        title='Detalhes'
        action={
          <BorderlessButton>
            <Fontisto 
              name='share'
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground 
        style={styles.banner}
        source={BannerImg}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>
          <Text style={styles.subtitle}>
            Dota sempre foi maior que LOL!
          </Text>
        </View>

      </ImageBackground>

      <ListHeader 
        title='jogadores'
        subtitle='Total 3'
      />

      <FlatList 
        data={members}
        keyExtractor={item => item.id}
        renderItem= {({ item }) => (
          <Members data={item}/>
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

    </Background>
  )
}
