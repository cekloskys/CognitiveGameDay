import React, {useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  SafeAreaView,
} from 'react-native';
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
    return () => {
      Dimensions.removeEventListener('change', isLandscape());
    };
  }, []);

  return (
    <OrientationView
      style={styles.container}
      landscapeStyles={landscapeStyles.container}>
      <ImageBackground
        source={require('../../../assets/images/MindGameLogo.jpg')}
        style={styles.image}
      />
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
