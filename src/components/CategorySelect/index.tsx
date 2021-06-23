import React from "react";
import { ScrollView } from "react-native";

import { styles } from './styles'

import { categories } from '../../utils/categories'
import { Category } from '../../components/Category'

type Props = {
  categorySelected: string
  setCategory: (category: string) => void
  hasCheckBox?: boolean
}

export function CategorySelect({ 
  categorySelected, 
  setCategory, 
  hasCheckBox=false 
} : Props) {
  return (
    <ScrollView 
      horizontal
      style={styles.container} 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map(category => (
          <Category 
            key={category.id}
            icon={category.icon}
            title={category.title}
            checked={ category.id === categorySelected }
            onPress={() => setCategory(category.id)}
            hasCheckBox={hasCheckBox}
          />
        ))
      }
    </ScrollView>

  )
}