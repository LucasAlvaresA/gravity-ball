import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Ball} from './components/Ball';

let timer: any;

const App = () => {
  const [gravity] = useState(0.98);
  const [upForce, setUpForce] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const applyGravity = () => {
      //Decreasing UpForce
      let newUpForce = upForce - gravity;
      newUpForce = newUpForce < 0 ? 0 : newUpForce;
      setUpForce(newUpForce);

      //Modifying speed
      let newSpeed = speed + (gravity - newUpForce / 2);
      setSpeed(newSpeed);

      //Setting new position based on speed
      let newPosition = position - newSpeed;

      if (newPosition <= 0) {
        newPosition = 0;
        setSpeed(0);
      }

      setPosition(newPosition);
    };

    clearTimeout(timer);
    timer = setTimeout(applyGravity, 5);
  }, [gravity, upForce, speed, position]);

  const handlePushButton = () => {
    setUpForce(7);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.area}>
        <Ball posY={position} />
      </View>
      <View style={styles.control}>
        <View>
          <Text style={styles.controlText}>UpForce: {upForce.toFixed(2)}</Text>
          <Text style={styles.controlText}>Speed: {speed.toFixed(2)}</Text>
          <Text style={styles.controlText}>
            Position: {position.toFixed(2)}
          </Text>
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
