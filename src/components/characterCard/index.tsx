import React, {FC} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CharacterCardProps} from './characterCard';
import {styles} from './style';

const CharacterCard: FC<CharacterCardProps> = props => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('CharacterDetails', {character: props.character})
      }>
      <ImageBackground
        source={{uri: props.character.image}}
        imageStyle={{borderRadius: 15, resizeMode: 'cover'}}
        style={styles.card}>
        <View style={styles.shadowCardView}>
          <Text style={styles.characterName} numberOfLines={1}>
            {props.character.name}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CharacterCard;
