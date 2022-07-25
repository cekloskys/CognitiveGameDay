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

const UPDATE_GAME = gql`
  mutation UpdateGame(
    $updateGameId: ID
    $note: String
    $game: String
    $solution: String
    $title: String
  ) {
    updateGame(
      id: $updateGameId
      note: $note
      game: $game
      solution: $solution
      title: $title
    )
  }
`;

const UpdateScreen = props => {
  const navigation = useNavigation();

  const post = props.route.params.post;
  const [note, setNote] = useState(post.note);
  const [game, setGame] = useState(post.game);
  const [solution, setSolution] = useState(post.solution);
  const [title, setTitle] = useState(post.title);
  const updateGameId = post._id.toString();

  const [updateGame, {data, error, loading}] = useMutation(UPDATE_GAME);

  useEffect(() => {
    if (error) {
      Alert.alert('Error!', error.message);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      navigation.navigate('Admin');
    }
  }, [data]);

  const onUpdateGame = async () => {
    if (!game) {
      Alert.alert('Invalid Input', 'Please enter a Game!');
      return;
    }
    if (!game.startsWith('https://')) {
      Alert.alert('Invalid Input', 'Game must begin with "https://"!');
      return;
    }
    if (!solution) {
      Alert.alert('Invalid Input', 'Please enter a Solution!');
      return;
    }
    if (!solution.startsWith('https://')) {
      Alert.alert('Invalid Input', 'Solution must begin with "https://"!');
      return;
    }
    if (!title) {
      Alert.alert('Invalid Input', 'Please enter a Title!');
      return;
    }

    await updateGame({
      variables: {
        updateGameId: updateGameId,
        note: note,
        game: game,
        solution: solution,
        title: title,
      },
    }).catch(error => console.log(error));

    Alert.alert('Completed', 'Game Updated!');
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
          placeholder={'Enter Game Link Ex.https://www.google.com'}
          placeholderTextColor="grey"
          multiline={true}
          numberOfLines={10}
        />
        <TextInput
          value={solution}
          autoCapitalize="none"
          onChangeText={value => setSolution(value)}
          style={styles.nameInput}
          clearButtonMode={'while-editing'}
          placeholder={'Enter Solution Link Ex.https://www.google.com'}
          placeholderTextColor="grey"
          multiline={true}
          numberOfLines={10}
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
        <Pressable style={styles.searchButton} onPress={onUpdateGame}>
          <Text style={styles.searchButtonText}>Update</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default UpdateScreen;
