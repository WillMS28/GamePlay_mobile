import React, { useState, useEffect } from 'react'
import { View, ImageBackground, Text, FlatList, Alert, Share, Platform } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'

import { api } from '../../services/api'

import { theme } from '../../global/theme'
import { styles } from './styles'
import BannerImg from '../../assets/banner.png'

import { Background } from '../../components/Background'
import { Header } from '../../components/Header'
import { ListHeader } from '../../components/ListHeader'
import { MemberProps, Members } from '../../components/Member'
import { ButtonIcon } from '../../components/ButtonIcon'
import { ListDivider } from '../../components/ListDivider'
import { AppointmentProps } from '../../components/Appointment'
import { Load } from '../../components/Load'


type Params = {
  guildSelected: AppointmentProps
}

type GuildWidget = {
  id: string
  name: string
  instant_invite: string
  members: MemberProps[]
}

export function AppointmentsDetails() {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget)
  const [loading, setLoading] = useState(true)


  const route = useRoute()
  const { guildSelected } = route.params as Params

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`)

      setWidget(response.data)

    } catch {
      Alert.alert('Verifique as configurações do servidor. Widget deve está habilidato!')
    } finally {
      setLoading(false)
    }
  }

  function handleShareInvitation() {
    const message = Platform.OS === 'ios'
    ?
    `Junte-se a ${guildSelected.guild.name}`
    :
    widget.instant_invite

    Share.share({
      message,
      url: widget.instant_invite
    })
  }


  useEffect(() => {
    fetchGuildWidget()
  })

  return (
    <Background>
      <Header 
        title='Detalhes'
        action={
          guildSelected.guild.owner &&
            <BorderlessButton onPress={handleShareInvitation} >
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
            { guildSelected.guild.name }
          </Text>
          <Text style={styles.subtitle}>
            { guildSelected.description }
          </Text>
        </View>

      </ImageBackground>

      {
        loading ? <Load /> :
          <>
            <ListHeader 
              title='jogadores'
              subtitle= {`Total ${widget.members.length}`}
            />

            <FlatList 
              data={widget.members}
              keyExtractor={item => item.id}
              renderItem= {({ item }) => (
                <Members data={item}/>
              )}
              ItemSeparatorComponent={() => <ListDivider isCentered/>}
              style={styles.members}
            />
          </>
      }


      <View style={styles.footer}>
        <ButtonIcon title='Entrar na partida' />  
      </View>
      
    </Background>
  )
}
