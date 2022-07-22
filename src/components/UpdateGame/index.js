import React from 'react';
import {Text, Image, TouchableOpacity, View, Alert} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const UpdateGame = props => {
  const post = props.post;
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Update', {post: post});
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

export default UpdateGame;
