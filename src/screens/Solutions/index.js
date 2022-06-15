import React from 'react';
import {FlatList, View} from 'react-native';
import solutions from '../../../assets/data/solution';
import Solutions from '../../components/Solutions';

const SolutionsScreen = props => {
  return (
    <View>
      <FlatList
        data={solutions}
        renderItem={({item}) => <Solutions post={item} />}
      />
    </View>
  );
};

export default SolutionsScreen;
