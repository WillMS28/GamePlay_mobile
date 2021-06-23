import React, { useState } from "react";
import { View, FlatList } from "react-native";

import { styles } from './styles'
import { Background } from '../../components/Background'


import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from '../../components/ListHeader'
import { Appointment } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'

export function Home() {
  const [category, setCategory] = useState('')

  function handleCategorySelect (categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20: 40h',
      description: 'É hoje que a criança chora e a mão não vê!'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20: 40h',
      description: 'É hoje que a criança chora e a mão não vê!'
    },
  ]

  return (
    <Background>
      <View>
        <View style={styles.header}>
          <Profile />

          <ButtonAdd />
        </View>
      
        
        <CategorySelect 
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
      
        <View style={styles.content}>
          <ListHeader 
            title='Partidas agendadas' 
            subtitle='Total 6'
          />

          <FlatList 
            data={appointments}
            style={styles.matches}
            keyExtractor={ item => item.id}
            renderItem={({ item }) => (
              <Appointment data={item} />
            )}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />
            }
          />

        </View>
      </View>
    </Background>
  )
}