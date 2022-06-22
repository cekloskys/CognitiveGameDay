import React from 'react';
import {
  Text,
  Image,
  Pressable,
  Linking,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './sytles';

const Solutions = props => {
  const post = props.post;
  const onPress = () =>
    Linking.canOpenURL(post.solution).then(() => {
      Linking.openURL(post.solution);
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
        <View style={{flex: 1}}>
          <Text style={styles.description}>{post.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Solutions;
