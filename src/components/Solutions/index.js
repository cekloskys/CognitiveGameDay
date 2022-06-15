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
    Linking.canOpenURL(post.uri).then(() => {
      Linking.openURL(post.uri);
    });
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        {/* Image */}
        <Image source={post.image} style={styles.image} />
        {/* Description Text */}
        <View style={{flex:1}}>
          <Text style={styles.description}>{post.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Solutions;
