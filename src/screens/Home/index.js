import React, {useEffect} from 'react';
import {View, Text, Image, Pressable, SafeAreaView} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import OrientationView from 'rn-orientation-view';
import landscapeStyles from './landscapeStyles';
import {Dimensions} from 'react-native';
import {useState} from 'react';

const HomeScreen = props => {
  const navigation = useNavigation();

  /**
   * Returns true if the is in landscape mode
   */
  const isLandscape = () => {
    const dim = Dimensions.get('screen');
    return dim.width >= dim.height;
  };

  const [orientation, setOrientation] = useState(
    isLandscape() ? 'landscape' : 'portrait',
  );

  useEffect(() => {
    isLandscape();
    Dimensions.addEventListener('change', () => {
      setOrientation(isLandscape() ? 'landscape' : 'portrait');
    });
  }, []);

  return (
    <OrientationView
      style={styles.container}
      landscapeStyles={landscapeStyles.container}>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <SafeAreaView style={{flex: 0.0}} />
      <View style={styles.header}>
        {isLandscape() === false ? (
          <Text style={styles.title}>
            Cognitive Game Day
            <Text style={styles.title4}>
              {'\n'}Society for the Teaching of Psychology
            </Text>
          </Text>
        ) : (
          <Text style={landscapeStyles.title}>
            Cognitive Game Day
            <Text style={styles.title4}>
              {'\n'}Society for the Teaching of Psychology
            </Text>
          </Text>
        )}
      </View>
      {/* Button */}
      {isLandscape() === false ? (
        <View style={styles.box}>
          <Pressable onPress={() => navigation.navigate('Sign In')}>
            <Image
              source={require('../../../assets/images/MindGameLogo-HomeScreen.png')}
            />
          </Pressable>
        </View>
      ) : (
        <View style={landscapeStyles.box}>
          <Pressable onPress={() => navigation.navigate('Sign In')}>
            <Image
              style={{
                width: Dimensions.get('screen').width * 0.15,
                height: Dimensions.get('screen').width * 0.15,
              }}
              source={require('../../../assets/images/MindGameLogo-HomeScreen.png')}
            />
          </Pressable>
        </View>
      )}
      <View style={styles.bottomContainer}>
        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate('Play')}>
          <Text style={styles.searchButtonText}> Play </Text>
        </Pressable>
      </View>
    </OrientationView>
  );
};

export default HomeScreen;
