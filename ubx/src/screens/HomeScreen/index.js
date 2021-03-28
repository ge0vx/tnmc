import React from 'react';
import {View} from 'react-native';
import HomeMap from '../../components/HomeMap';
import AlertMessage from '../../components/AlertMessage';
import HomeSearch from '../../components/HomeSearch'

const HomeScreen = () => {
  return (
    <View>
      <HomeMap />
      <AlertMessage />
      {/* button component */}
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
