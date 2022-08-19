import React, {useEffect} from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import styles from './styles';
import {useMutation, gql} from '@apollo/client';
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

  useEffect(() => {
    if (data) {
      Alert.alert('Completed', 'Sucsesfully deleted ' + post.title);
    }
  }, [data]);

  const deleteGameId = post._id.toString();

  const onPress = async () => {
    Alert.alert(
      'Please Confirm',
      'Are you sure you would like to delete ' + post.title + '?',
      [
        {
          text: 'Yes',
          onPress: async () => {
            await deleteGame({variables: {deleteGameId: deleteGameId}})
              .then(navigation.navigate('Admin'))
              .catch(error => console.log(error));
          },
        },
        {
          text: 'No',
          onPress: () => {
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
          source={require('../../../assets/images/MindGameLogo-HomeScreen.png')}
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
