import React, {FC} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ARROW, EPISODECARD_BACKGROUND} from '@Assets';
import {EpisodeCardProps} from './episodeCard';
import {styles} from './style';

const EpisodeCard: FC<EpisodeCardProps> = props => {
  const navigation = useNavigation();

  return (
    <>
      {props.episode ? (
        <TouchableOpacity
          onPress={() =>
            navigation.push('EpisodeDetails', {episodeId: props.episode.id})
          }>
          <ImageBackground
            source={EPISODECARD_BACKGROUND}
            imageStyle={{borderRadius: 15, resizeMode: 'cover'}}
            style={styles.card}>
            <View style={styles.shadowCardView}>
              <View style={styles.textsView}>
                <Text style={styles.episode}>
                  {props.episode.episode}
                  {' - '}
                  {props.episode.characters &&
                    props.episode.characters.length}{' '}
                  characters
                </Text>
                <Text style={styles.episodeName} numberOfLines={1}>
                  {props.episode.name}
                </Text>
              </View>
              <Image source={ARROW} style={styles.arrowImg} />
            </View>
          </ImageBackground>
        </TouchableOpacity>
      ) : null}
    </>
  );
};

export default EpisodeCard;
