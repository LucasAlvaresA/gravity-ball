import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

const App = () => {
  const handlePushButton = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.area}></View>
      <View style={styles.control}>
        <View>
          <Text style={styles.controlText}>UpForce:</Text>
          <Text style={styles.controlText}>Velocity:</Text>
          <Text style={styles.controlText}>PosY:</Text>
        </View>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={handlePushButton}>
          <Text style={styles.controlText}>Push</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
