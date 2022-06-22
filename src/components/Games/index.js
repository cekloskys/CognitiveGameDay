import React from 'react';
import {
  Text,
  Image,
  Pressable,
  Linking,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

const Games = props => {
  const post = props.post;
  const onPress = () =>
    Linking.canOpenURL(post.game).then(() => {
      Linking.openURL(post.game);
    });
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        {/* Image */}
        <Image
          source={require('../../../assets/images/MindGamesLogo.png')}
          style={styles.image}
        />
        {/* Description Text */}
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <View style={{flex: 1}}>
          <Text style={styles.description}>{post.title}</Text>
          <Text style={styles.description1}>{post.note}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Games;
