import React, {useEffect} from 'react';
import {
  Text,
  Image,
  Pressable,
  Linking,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import styles from './styles';
import {useMutation, gql} from '@apollo/client';
import {onError} from 'apollo-link-error';
import {useNavigation} from '@react-navigation/native';

const DELETE_GAMES = gql`
  mutation DeleteGame($deleteGameId: ID) {
    deleteGame(id: $deleteGameId)
  }
`;

const DeleteGames = props => {
  const post = props.post;

  const navigation = useNavigation();

  const [deleteGame, {data, error, loading}] = useMutation(DELETE_GAMES);

  useEffect(() => {
    if (error) {
      console.log(error);
      Alert.alert('Error', error.message);
    }
  }, [error]);

  if (data) {
    Alert.alert('Completed', 'Sucsesfully deleted ' + post.title);
  }
  const deleteGameId = post._id.toString();

  const onPress = async () => {
    Alert.alert(
      'Please Comfirm',
      'Are you sure you would like to delete ' + post.title + '?',
      [
        {
          text: 'Yes',
          onPress: async () => {
            //console.log("User Deleted Game Deleteing Game Then Returning to Admin");
            await deleteGame({variables: {deleteGameId: deleteGameId}})
              .then(navigation.navigate('Admin'))
              .catch(error => console.log(error));
          },
        },
        {
          text: 'No',
          onPress: () => {
            //console.log("User Canceled Returning to Admin");
            navigation.navigate('Admin');
          },
        },
      ],
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        {/* Image */}
        <Image
          source={require('../../../assets/images/MindGamesLogo.png')}
          style={styles.image}
        />
        {post.note !== '' ? (
          <View style={{flex: 1}}>
            <Text style={styles.description}>{post.title}</Text>
            <Text style={styles.description1}>{post.note}</Text>
          </View>
        ) : (
          <Text style={styles.description}>{post.title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default DeleteGames;
