import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    width: wp(100),
    marginTop: hp(3),
    alignItems: 'center',
  },
  comingSoonImage: {
    height: hp(10),
    width: wp(50),
    marginBottom: hp(5),
  },
});
