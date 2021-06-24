import React from "react";
import { View, FlatList } from 'react-native'

import { styles } from './styles'

import { Guild, GuildProps } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'

type Props = {
  handleGuildSelect: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'null',
      owner: true
    },
    {
      id: '2',
      name: 'Os sem dedos',
      icon: 'null',
      owner: false
    },
    {
      id: '3',
      name: 'Tem inimigo ali',
      icon: 'null',
      owner: false
    },
    {
      id: '4',
      name: 'Tem inimigo ali',
      icon: 'null',
      owner: false
    },
    {
      id: '5',
      name: 'Tem inimigo ali',
      icon: 'null',
      owner: false
    },
    {
      id: '6',
      name: 'Tem inimigo ali',
      icon: 'null',
      owner: false
    },
    {
      id: '7',
      name: 'Tem inimigo ali',
      icon: 'null',
      owner: false
    },
  ]

  return (
    <View style={styles.container}>
      <FlatList 
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild 
            onPress={() => handleGuildSelect(item)}
            data={item} 
          />
        )}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 104 }}
        ItemSeparatorComponent={() => <ListDivider isCentered/>}
        ListHeaderComponent={() => <ListDivider isCentered/>}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
      />
    </View>
  )
}