import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import FocusedStatusBar from '../components/FocusedStatusBar';

import {useNavigation} from '@react-navigation/native';
import {useAppState} from '../hooks/useAppState';

const EvaluationScreen = () => {
  const navigation = useNavigation();

  const [stepValues, setStepValues] = useAppState();

  const handleResidentPress = value => {
    console.log('Resident button pressed');
    navigation.navigate(value);
  };

  return (
    <ImageBackground
      source={require('../assets/images/form-bg.jpg')} 
      style={styles.backgroundImage}
      resizeMode="cover">
      <View style={styles.container}>
        <FocusedStatusBar />

        <Text style={styles.heading}>Select Type of Property</Text>

        <TouchableOpacity
          style={styles.commercialButton}
          onPress={() => {
            handleResidentPress('Form-Wizard');
            setStepValues({facType: 'commercial'});
          }}>
          <Image
            source={require('../assets/images/commercial.png')}
            style={styles.image}
          />

          <Text style={styles.buttonText}>Commercial</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.residentButton}
          onPress={() => {
            handleResidentPress('Residential-Wizard');
            setStepValues({facType: 'residential'});
          }}>
          <Image
            source={require('../assets/images/apartment.png')}
            style={styles.image}
          />
          <Text style={styles.buttonText}>Resident</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a transparent overlay to the background
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
  },
  residentButton: {
    width: Dimensions.get('window').width * 0.8,
    height: '30%',
    backgroundColor: 'rgba(4,67,188,.47)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#327eef',
  },
  image: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  commercialButton: {
    width: Dimensions.get('window').width * 0.8,
    height: '30%',
    backgroundColor: 'rgba(4,67,188,.47)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#327eef',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default EvaluationScreen;
