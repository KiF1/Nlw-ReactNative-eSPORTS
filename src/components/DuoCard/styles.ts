import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: '#2A2634',
    borderRadius: 12,
    padding: 20,
    marginRight: 16,
    alignItems: 'center'
  },
  button: {
   width: '100%',
   height: 36,
   borderRadius: 6,
   backgroundColor: THEME.COLORS.PRIMARY,
   flexDirection: 'row',
   alignItems:  'center',
   justifyContent: 'center'
  },
  buttonTitle: {
    color: 'white',
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    marginLeft: 8
  }
});