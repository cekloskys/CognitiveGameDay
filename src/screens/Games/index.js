import React from 'react';
import {FlatList, View} from 'react-native';
import Games from '../../components/Games';
import feed from '../../../assets/data/feed';

const GamesScreen = props => {
  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <Games post={item} />} />
    </View>
  );
};

export default GamesScreen;
