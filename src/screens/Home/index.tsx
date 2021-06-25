import React, { useState, useCallback } from "react";
import { View, FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { COLLECTION_APPOINTMENTS } from '../../config/database'

import { styles } from './styles'

import { Background } from '../../components/Background'
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from '../../components/ListHeader'
import { Appointment, AppointmentProps } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'
import { Load } from '../../components/Load'

export function Home() {
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(true)
  const [appointments, setAppointments] = useState<AppointmentProps[]>([])

  const navigation = useNavigation()

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  } 

  function handleAppointmentsDetails () {
    navigation.navigate('AppointmentsDetails')
  }

  function handleAppointmentsCreate () {
    navigation.navigate('AppointmentsCreate')
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if(category){      
      setAppointments(storage.filter(item => item.category === category));
    }else{
      setAppointments(storage)
    }
  
    setLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadAppointments()
  },[category]))


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
      {
        loading ? <Load /> :
        <>
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
      </>
      }
    </Background>
  )
}