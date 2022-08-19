import React, {useEffect, useState} from 'react';
import {Alert, FlatList, View} from 'react-native';
import Solutions from '../../components/Solutions';
import {useQuery, gql} from '@apollo/client';

const GET_GAMES = gql`
  query Games {
    games {
      _id
      note
      game
      solution
      title
    }
  }
`;

const SolutionsScreen = props => {
  const {data, error, loading} = useQuery(GET_GAMES, {
    fetchPolicy: 'network-only',
  });
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
      <FlatList
        data={results}
        renderItem={({item}) => <Solutions post={item} />}
      />
    </View>
  );
};

export default SolutionsScreen;
