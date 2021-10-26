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
    paddingBottom: hp(3),
    alignItems: 'center',
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(5),
    paddingVertical: hp(3),
    borderBottomWidth: hp(0.15),
    borderColor: 'gray',
  },
  characterImage: {
    height: hp(10),
    width: hp(10),
    borderRadius: hp(100),
  },
  characterNameView: {
    flex: 1,
  },
  characterName: {
    fontSize: hp(3),
    marginLeft: wp(4),
    fontWeight: 'bold',
    color: 'black',
  },
  title: {
    fontSize: hp(3),
    fontWeight: 'bold',
    marginBottom: hp(1.5),
    marginLeft: wp(6),
    color: 'black',
  },
  infoViewContainer: {
    marginTop: hp(3),
  },
});
