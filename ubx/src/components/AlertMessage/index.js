import React from 'react';
import {View, Text} from 'react-native';
import style from './styles';

const AlertMessage = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Travel only if nessary</Text>
      <Text style={style.text}>
        You can view on-location stuff, based on your phone's GPS and what the
        OVRLand owner put there. You can also view remote-location stuff using
        the app.
      </Text>
      <Text style={style.learnMore}>Learn More</Text>
    </View>
  );
};

export default AlertMessage;
