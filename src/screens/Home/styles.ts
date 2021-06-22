import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {

  },
  header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 42
  }
})