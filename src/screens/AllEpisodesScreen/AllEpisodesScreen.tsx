import React, {FC, useState, useEffect} from 'react';
import axios from 'axios';
import {View, FlatList, ActivityIndicator, Image} from 'react-native';
import {COMING_SOON} from '@Assets';
import {EpisodeCard} from '@Components';
import {styles} from './style';

const API = 'https://rickandmortyapi.com/api/';

const AllEpisodesScreen: FC = props => {
  const [episodesList, setEpisodesList] = useState([]);
  const [totalPages, setTotalPages] = useState<number>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFetchNewData, setIsFetchNewData] = useState<boolean>(false);

  useEffect(() => {
    getEpisodes();
  }, [currentPage]);

  const getEpisodes = async () => {
    try {
      const response = await axios.get(`${API}episode/?page=${currentPage}`);
      console.log(response);
      setTotalPages(response.data.info.pages);
      const newEpisodes = response.data.results;
      setEpisodesList([...episodesList, ...newEpisodes]);
      setIsFetchNewData(false);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchNewData = () => {
    if (currentPage === totalPages) {
      setIsFetchNewData(false);
    } else {
      setIsFetchNewData(true);
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <View style={styles.container}>
      {episodesList ? (
        <FlatList
          data={episodesList}
          keyExtractor={(item: any) => item.name}
          renderItem={({item}) => {
            return <EpisodeCard episode={item} />;
          }}
          onEndReached={() => fetchNewData()}
          onEndReachedThreshold={0}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() =>
            isFetchNewData ? (
              <ActivityIndicator />
            ) : (
              <Image
                source={COMING_SOON}
                style={styles.comingSoonImage}
                resizeMode={'contain'}
              />
            )
          }
        />
      ) : null}
    </View>
  );
};

export default AllEpisodesScreen;
