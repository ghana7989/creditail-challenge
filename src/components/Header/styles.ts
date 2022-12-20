import {StyleSheet} from 'react-native';
import THEME from '../../styles/theme.style';

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: THEME.UI.Primary.Blue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: THEME.Text.White,
    fontSize: 20,
  },
  left: {
    flexDirection: 'row',
    marginRight: 30,
  },
  middle: {
    flex: 1,
  },
  right: {
    width: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default styles;
