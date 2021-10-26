import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AllEpisodesScreen,
  EpisodeDetailsScreen,
  CharacterDetailsScreen,
} from '@Screens';

const Stack = createNativeStackNavigator();

const AppNav: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AllEpisodes"
          component={AllEpisodesScreen}
          options={{title: 'All Episodes'}}
        />
        <Stack.Screen
          name="EpisodeDetails"
          component={EpisodeDetailsScreen}
          options={{title: 'Episode'}}
        />
        <Stack.Screen
          name="CharacterDetails"
          component={CharacterDetailsScreen}
          options={{title: 'Character'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
