import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  title: {
    fontSize: hp(3),
    fontWeight: 'bold',
    marginLeft: wp(6),
    color: 'black',
  },
  description: {
    fontSize: hp(2),
    marginTop: hp(1.5),
    marginBottom: hp(3),
    marginLeft: wp(6),
    color: 'black',
  },
});
