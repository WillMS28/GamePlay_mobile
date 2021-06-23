import React, { useState } from 'react'
import { View, ImageBackground, Text, FlatList } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'


import { theme } from '../../global/theme'
import { styles } from './styles'

import { Background } from '../../components/Background'
import { CategorySelect } from '../../components/CategorySelect'
import { Header } from '../../components/Header'
import { GuildIcon } from '../../components/GuildIcon'

export function AppointmentsCreate() {
  const [category, setCategory] = useState('')

  function handleCategorySelect (categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  return (
    <Background>
      <Header 
        title='Agendar partida'
      />

      <Text style={[styles.label, {
        marginLeft: 24,
        marginTop: 36,
        marginBottom: 18
      }]}>
        Categoria
      </Text>

      
      <View>
        <CategorySelect 
          setCategory={handleCategorySelect}
          categorySelected={category}
          hasCheckBox
        />
      </View>

      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            { 
              //<View style={styles.image}/>
              <GuildIcon /> 
            }
            <View style={styles.selectBody}>
              <Text style={styles.label}>
                Selecione um servidor
              </Text>
            </View>

            <Feather 
              name='chevron-right'
              color={theme.colors.heading}
              size={18}
            />

          </View>
        </RectButton>
      </View>
   


    </Background>
  )
}
