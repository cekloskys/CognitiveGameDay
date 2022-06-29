import React, {useEffect, useState} from 'react';
import {Alert, FlatList, View} from 'react-native';
import DeleteGame from '../../components/DeleteGame';
import {useQuery, gql} from '@apollo/client';

const GET_GAMES = gql`
  query Games {
    games {
    _id
      note
      image
      game
      solution
      title
    }
  }
`;
const DeleteGamesScreen = props => {
  const {data, error, loading} = useQuery(GET_GAMES, {fetchPolicy: 'network-only'});
  const [results, setResults] = useState([]);
  useEffect(() => {
    if (error) {
      Alert.alert('Error Fetching Games!', error.message);
    }
  }, [error]);

  useEffect(() => {

    if (data) {
      setResults(data.games);
    }
  }, [data]);
  return (
    <View>
      <FlatList data={results} renderItem={({item}) => <DeleteGame post={item} />} />
    </View>
  );
};

export default DeleteGamesScreen;
