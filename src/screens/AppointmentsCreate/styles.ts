import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  label: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading
  },
  form: {
    paddingHorizontal:24,
    marginTop: 32
  },
  select: {
    width: '100%',
    height: 68,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    borderRadius: 8,
    alignItems: 'center',
    paddingRight: 25,
    overflow: 'hidden',
  },
  selectBody: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: 64,
    height: 68,
    backgroundColor: theme.colors.secondary40,
    borderColor: theme.colors.secondary50,
    borderRadius: 8,
    borderWidth: 1
  },
  field: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
  },
  colums: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  divider: {
    marginRight: 4,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    color: theme.colors.highlight
  },
  caracteresLimit: {
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text400,
    fontSize: 13
  },
  footer: {
    marginVertical: 20,
    marginBottom: 23
  }
})