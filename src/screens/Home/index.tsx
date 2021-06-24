import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

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

  const navigation = useNavigation()

  function handleCategorySelect (categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  function handleAppointmentsDetails () {
    navigation.navigate('AppointmentsDetails')
  }

  function handleAppointmentsCreate () {
    navigation.navigate('AppointmentsCreate')
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

      <View style={styles.header}>
        <Profile />

        <ButtonAdd 
          onPress={handleAppointmentsCreate}
        />
      </View>
      
        
      <CategorySelect 
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      
      <ListHeader 
        title='Partidas agendadas' 
        subtitle='Total 2'
      />

      <FlatList 
        data={appointments}
        style={styles.matches}
        keyExtractor={ item => item.id}
        renderItem={({ item }) => (
          <Appointment 
            data={item}
            onPress={handleAppointmentsDetails}
          />
        )}
        contentContainerStyle= {{ paddingBottom: 69 }}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
      />
    </Background>
  )
}