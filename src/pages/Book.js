import React from 'react';
import { SafeAreaView, AsyncStorage, View, Text } from 'react-native';

export default function Book({ navigation }) {
  const id = navigation.getParam('id');

  return <Text>{id}</Text>
}