import React, {useEffect, useState} from 'react';
import {Alert, FlatList, View} from 'react-native';
import Games from '../../components/Games';
import {useQuery, gql} from '@apollo/client';

const GET_GAMES = gql`
  query Games {
    games {
      id
      note
      image
      game
      solution
      title
    }
  }
`;
const GamesScreen = props => {
  const {data, error, loading} = useQuery(GET_GAMES);
  const [results, setResults] = useState([]);
  useEffect(() => {
    if (error) {
      Alert.alert('Error Fetching Games!', error.message);
    }
  }, [error]);

  useEffect(() => {
    //console.log(data);

    if (data) {
      setResults(data.games);
    }
  }, [data]);
  return (
    <View>
      <FlatList data={results} renderItem={({item}) => <Games post={item} />} />
    </View>
  );
};

export default GamesScreen;
