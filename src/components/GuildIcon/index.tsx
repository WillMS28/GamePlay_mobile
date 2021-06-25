import React from "react";
import { Image, View } from "react-native";

const { CDN_IMAGE } = process.env

import { styles } from './styles'
import { theme } from "../../global/theme";

import DiscordSVG from '../../assets/discord.svg'

type Props = {
  guildId: string
  iconId: string | null
}

export function GuildIcon({ guildId, iconId } : Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`

  
  //'https://i.redd.it/s9biyhs4lix61.jpg'

  return (
    <View style={[styles.container, !iconId ? { backgroundColor: theme.colors.discord } : { backgroundColor: 'transparent' }]}>
      {
        iconId ?
          <Image 
            source={{ uri }} 
            style={styles.image}
            resizeMode='cover' 
          /> 
        :
          <DiscordSVG 
            width={40}
            height={40}
          />

      }
    </View>

  )
}
