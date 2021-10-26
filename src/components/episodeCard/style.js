import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  card: {
    height: hp(12.5),
    width: wp(88),
    borderRadius: 15,
    marginBottom: hp(2),
    marginHorizontal: wp(6),
  },
  shadowCardView: {
    height: hp(12.5),
    width: wp(88),
    borderRadius: 15,
    backgroundColor: 'rgba(0,0,0,0.8)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textsView: {
    height: hp(7),
    width: wp(73),
    marginLeft: wp(3),
    justifyContent: 'space-between',
  },
  episode: {
    fontSize: hp(1.8),
    color: 'white',
  },
  episodeName: {
    fontSize: hp(3),
    fontWeight: 'bold',
    color: 'white',
  },
  arrowImg: {
    height: hp(4),
    width: hp(2),
    marginLeft: wp(2),
  },
});
