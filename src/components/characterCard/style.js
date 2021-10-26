import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  card: {
    height: wp(28),
    width: wp(28),
    marginHorizontal: wp(1),
    borderRadius: 15,
    marginBottom: hp(2),
  },
  shadowCardView: {
    height: wp(28),
    width: wp(28),
    borderRadius: 15,
    backgroundColor: 'rgba(0,0,0,0.6)',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: wp(2)
  },
  leftView: {
    flexDirection: 'row',
    height: hp(7),
    width: wp(73),
    marginLeft: wp(3),
    alignItems: 'center',
  },
  characterImage: {
    height: hp(8),
    width: hp(8),
    borderRadius: hp(100),
  },
  characterName: {
    fontSize: hp(1.8),
    fontWeight: 'bold',
    marginBottom: hp(0.5),
    color: 'white',
  },
  arrowImg: {
    height: hp(4),
    width: hp(2),
    marginLeft: wp(2),
  },
});
