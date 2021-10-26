import React, {FC, useState, useEffect, useContext} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import axios from 'axios';
import {EpisodeCard, InfoView} from '@Components';
import {styles} from './style';

const API = 'https://rickandmortyapi.com/api/';

const CharacterDetailsScreen: FC = props => {
  const character = props.route.params.character;
  const [episodeIdList, setEpisodeIdList] = useState([]);
  const [episodesList, setEpisodesList] = useState(null);

  useEffect(() => {
    setEpisodeIds();
  }, []);

  useEffect(() => {
    getEpisodes();
  }, [episodeIdList]);

  const setEpisodeIds = () => {
    let tempIds = [];
    if (character !== null) {
      character.episode.map(item => {
        tempIds.push(
          item.replace('https://rickandmortyapi.com/api/episode/', ''),
        );
      });
    }
    setEpisodeIdList(tempIds);
  };

  const getEpisodes = async () => {
    try {
      const response = await axios.get(`${API}episode/${episodeIdList}`);
      setEpisodesList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnlyOneEpisode = (episodeDetail: any) => {
    const oneEpisodeArray = [];
    oneEpisodeArray.push(episodeDetail);
    return oneEpisodeArray;
  };

  const InfoViewWrapper = () => {
    return (
      <View style={styles.infoViewContainer}>
        <InfoView title={'Status'} description={character.status} />
        <InfoView title={'Species'} description={character.species} />
        <InfoView title={'Gender'} description={character.gender} />
        <InfoView
          title={'Last known location'}
          description={character.location.name}
        />
        <Text style={styles.title}>Episodes</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image source={{uri: character.image}} style={styles.characterImage} />
        <View style={styles.characterNameView}>
          <Text style={styles.characterName} numberOfLines={2}>
            {character.name}
          </Text>
        </View>
      </View>
      {episodesList ? (
        <FlatList
          data={
            episodesList.length > 0
              ? episodesList
              : handleOnlyOneEpisode(episodesList)
          }
          keyExtractor={(item: any) => item.id}
          renderItem={({item}) => {
            return <EpisodeCard episode={item} />;
          }}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={InfoViewWrapper()}
        />
      ) : null}
    </View>
  );
};

export default CharacterDetailsScreen;
