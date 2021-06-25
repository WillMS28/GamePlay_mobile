import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { AppointmentsDetails } from '../screens/AppointmentsDetails'
import { AppointmentsCreate } from '../screens/AppointmentsCreate'

import { theme } from "../global/theme";

const { Navigator, Screen } = createStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100
        }
      }}
    >

      <Screen 
        name='Home'
        component={Home}
      />

      <Screen 
        name='AppointmentsDetails'
        component={AppointmentsDetails}
      />

      <Screen 
        name='AppointmentsCreate'
        component={AppointmentsCreate}
      />
    </Navigator>
  )
}