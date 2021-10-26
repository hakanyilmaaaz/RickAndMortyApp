import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: hp(3),
  },
  contentContainer: {
    width: wp(100),
    paddingBottom: hp(3),
    alignItems: 'flex-start',
    marginLeft: wp(4),
  },
  title: {
    fontSize: hp(3),
    fontWeight: 'bold',
    marginBottom: hp(1.5),
    marginLeft: wp(6),
    color: 'black',
  },
  description: {
    fontSize: hp(2),
    marginLeft: wp(6),
    color: 'black',
  },
});
