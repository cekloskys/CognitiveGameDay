import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  ScrollView,
} from 'react-native';
import styles from '../CreateGame/styles';
import {useNavigation} from '@react-navigation/native';
import {useMutation, gql, ApolloError} from '@apollo/client';

const CREATE_GAME = gql`
  mutation CreateGame(
    $note: String
    $game: String
    $solution: String
    $title: String
  ) {
    createGame(note: $note, game: $game, solution: $solution, title: $title)
  }
`;

const CreateGameScreen = () => {
  const [note, setNote] = useState('');
  const [game, setGame] = useState('');
  const [solution, setSolution] = useState('');
  const [title, setTitle] = useState('');

  const navigation = useNavigation();

  const [createGame, {data, error, loading}] = useMutation(CREATE_GAME);

  useEffect(() => {
    if (error) {
      // console.log(error);
      Alert.alert('Error!', error.message);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      navigation.navigate('Admin');
    }
  }, [data]);

  const onCreateGame = async () => {
    if (!game) {
      Alert.alert('Invalid Input', 'Please fill in Game!');
      return;
    }
    if (!game.startsWith('https://')) {
      Alert.alert('Invalid Input', 'Please include "https://" in Game!');
      return;
    }
    if (!solution) {
      Alert.alert('Invalid Input', 'Please fill in Solution!');
      return;
    }
    if (!solution.startsWith('https://')) {
      Alert.alert('Invalid Input', 'Please include "https://" in Solution!');
      return;
    }
    if (!title) {
      Alert.alert('Invalid Input', 'Please fill in Title!');
      return;
    }

    await createGame({
      variables: {note: note, game: game, solution: solution, title: title},
    }).catch(error => console.log(error));

    Alert.alert('Completed', 'Game Added!');
    navigation.navigate('Admin');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.newCourseContainer}>

        <TextInput
          value={game}
          autoCapitalize="none"
          onChangeText={value => setGame(value)}
          style={styles.nameInput}
          clearButtonMode={'while-editing'}
          placeholder={'Enter Game Link     Ex.https://www.google.com'}
          placeholderTextColor="grey"
        />
        <TextInput
          value={solution}
          autoCapitalize="none"
          onChangeText={value => setSolution(value)}
          style={styles.nameInput}
          clearButtonMode={'while-editing'}
          placeholder={'Enter Solution Link  Ex.https://www.google.com'}
          placeholderTextColor="grey"
        />
        <TextInput
          value={title}
          onChangeText={value => setTitle(value)}
          style={styles.semesterInput}
          clearButtonMode={'while-editing'}
          placeholder={'Enter Game Title'}
          placeholderTextColor="grey"
        />
        <TextInput
          value={note}
          onChangeText={value => setNote(value)}
          style={styles.codeInput}
          clearButtonMode={'while-editing'}
          placeholder={'Enter Note'}
          placeholderTextColor="grey"
          multiline={true}
          numberOfLines={10}
        />
        <Pressable style={styles.searchButton} onPress={onCreateGame}>
          <Text style={styles.searchButtonText}>Add</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default CreateGameScreen;
