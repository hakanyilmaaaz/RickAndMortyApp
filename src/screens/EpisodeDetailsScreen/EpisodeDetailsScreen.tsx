import React, {FC, useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';
import {CharacterCard, InfoView} from '@Components';
import {styles} from './style';

const API = 'https://rickandmortyapi.com/api/';

const EpisodeDetailsScreen: FC = props => {
  const [episodeDetails, setEpisodeDetails] = useState();
  const [characterIdList, setCharacterIdList] = useState([]);
  const [characterList, setCharacterList] = useState(null);

  useEffect(() => {
    getEpisodeDetails();
  }, []);

  useEffect(() => {
    getCharacterList();
  }, [characterIdList]);

  const getEpisodeDetails = async () => {
    try {
      let tempIds = [];
      const response = await axios.get(
        `${API}episode/${props.route.params.episodeId}`,
      );
      setEpisodeDetails(response.data);
      if (response.data !== null) {
        response.data.characters.map(item => {
          tempIds.push(
            item.replace('https://rickandmortyapi.com/api/character/', ''),
          );
        });
      }
      setCharacterIdList(tempIds);
    } catch {
      console.log(err);
    }
  };

  const getCharacterList = async () => {
    try {
      const response = await axios.get(`${API}character/${characterIdList}`);
      setCharacterList(response.data);
    } catch {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <InfoView
        title={'Episode'}
        description={episodeDetails?.episode && episodeDetails?.episode}
      />
      <InfoView
        title={'Name'}
        description={episodeDetails?.name && episodeDetails?.name}
      />
      <InfoView
        title={'Release Date'}
        description={episodeDetails?.air_date && episodeDetails?.air_date}
      />
      <Text style={styles.title}>Characters</Text>
      {characterList ? (
        <FlatList
          data={characterList.length > 0 && characterList}
          keyExtractor={(item: any) => item.id}
          renderItem={({item}) => {
            return <CharacterCard character={item} />;
          }}
          contentContainerStyle={styles.contentContainer}
          numColumns={3}
          showsVerticalScrollIndicator={false}
        />
      ) : null}
    </View>
  );
};

export default EpisodeDetailsScreen;
