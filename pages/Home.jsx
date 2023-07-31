import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
 
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TermsModal from '../components/TermsModal';

const Home = () => {
  const navigation = useNavigation();

  // navigation.navigate('Evalutation');

  const [modalVisible, setModalVisible] = useState(false);

  const handleGetInsight = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSubmit = () => {
    navigation.navigate('Evalutation');
    setModalVisible(false);
  };

  return (
    <ImageBackground
      source={require('../assets/images/home-bg.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.overlay} />

      <View style={styles.container}>
        <Text style={styles.title}>
          Data Insights To Fuel Your Business Growth
        </Text>
        <Text style={styles.subtitle}>
          We empower better business decisions through cutting-edge data science
          driven by our innovative projection and valuation tools
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleGetInsight}>
          <Text style={styles.buttonText}>Get My Insight</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Price</Text>
        </TouchableOpacity>
      </View>
      <TermsModal
        visible={modalVisible}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Adjust the opacity (last value) as needed
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#00abff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    width: '80%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',

    textAlign: 'center',
  },
});

export default Home;
