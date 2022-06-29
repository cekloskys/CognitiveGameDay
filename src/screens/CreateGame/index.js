import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import styles from '../CreateGame/styles';
import {useNavigation} from '@react-navigation/native';
import { useMutation, gql, ApolloError } from '@apollo/client';

const CREATE_GAME = gql`
    mutation CreateGame( $note: String, $game: String, $solution: String, $title: String) {
    createGame( note: $note, game: $game, solution: $solution, title: $title)
    }
`;

const CreateGameScreen = () => {

  const [note, setNote] = useState('');
  const [game, setGame] = useState('');
  const [solution, setSolution] = useState('');
  const [title, setTitle] = useState('');

  const navigation = useNavigation();

  const [createGame, { data, error, loading }] = useMutation(CREATE_GAME);

  useEffect(() => {
    if (error) {
        console.log(error);
        Alert.alert( 'Error!',error.message);
    }
  }, [error])

  if (data) {
    navigation.navigate('Admin')
  }

  const onCreateGame = async () => {
    if (!game) {
      alert('Please fill in Game');
      return;
    }
    if (!solution) {
      alert('Please fill in Solution');
      return;
    }
    if (!title) {
      alert('Please fill in Title');
      return;
    }

    await createGame({variables: { note:note, game:game, solution:solution, title:title}}).catch((error) => console.log(error))

    alert('Game Added!');
    navigation.navigate('Admin');
  };

  return (
    <View style={styles.container}>
      <View style={styles.newCourseContainer}>
        <TextInput
          autoCapitalize={'characters'}
          value={note}
          onChangeText={value => setNote(value)}
          style={styles.codeInput}
          clearButtonMode={'while-editing'}
          placeholder={'Enter Note'}
        />
        <TextInput
          value={game}
          onChangeText={value => setGame(value)}
          style={styles.nameInput}
          clearButtonMode={'while-editing'}
          placeholder={'Enter Game Link'}
        />
        <TextInput
          value={solution}
          onChangeText={value => setSolution(value)}
          style={styles.nameInput}
          clearButtonMode={'while-editing'}
          placeholder={'Enter Solution Link'}
        />
        <TextInput
          value={title}
          onChangeText={value => setTitle(value)}
          style={styles.semesterInput}
          clearButtonMode={'while-editing'}
          maxLength={11}
          placeholder={'Enter Game Title'}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Pressable style={styles.searchButton} onPress={onCreateGame}>
          <Text style={styles.searchButtonText}>Add</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreateGameScreen;