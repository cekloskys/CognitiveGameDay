import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
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

const AdminScreen = props => {
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
            Welcome {localStorage.getItem('Name')}
            <Text style={styles.title4}>
              {'\n'}Would you like to Add a Game or Delete a Game
            </Text>
          </Text>
        ) : (
          <Text style={landscapeStyles.title}>
            Welcome {localStorage.getItem('Name')}
            <Text style={styles.title4}>
              {'\n'}Would you like to Add a Game or Delete a Game
            </Text>
          </Text>
        )}
      </View>

      {/* Button */}
      <View style={styles.box}>
        <Image
        source={require('../../../assets/images/MindGamesLogo.png')}
        
      />
      </View>
      
      <View style={styles.bottomContainer}>
        <Pressable
          style={styles.addGameButton}
          onPress={() => navigation.navigate('Create Game')}>
          <Text style={styles.searchButtonText}> Add New Game </Text>
        </Pressable>
        <Pressable
          style={styles.deleteGameButton}
          onPress={() => navigation.navigate('Delete Game')}>
          <Text style={styles.searchButtonText}> Delete Game </Text>
        </Pressable>
      </View>
    </OrientationView>
  );
};

export default AdminScreen;
