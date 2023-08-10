import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, PermissionsAndroid, Permission } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useAppState } from '../../hooks/useAppState';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useForm } from 'react-hook-form';
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';


const SiteImages = ({ currentStep, setCurrentStep }) => {
  const [stepValues, setStepValues] = useAppState();

  console.log('steee', stepValues);

  const [siteImages, setSiteImages] = useState(null);
  const [interiorPlans, setInteriorPlans] = useState(null);
  const [exteriorPlans, setExteriorPlans] = useState(null);

  console.log('siteImages', siteImages);

  const {
    register,
    setError,
    handleSubmit,
    formState,
    getValues,
    reset,
    setValue,
  } = useForm({
    defaultValues: stepValues,
    mode: 'onSubmit',
  });
  const { errors } = formState;

  const submit = data => {
    setStepValues({ ...stepValues, ...data });
    setCurrentStep(currentStep + 1);
  };

  const handleFileUpload = async imgType => {
    try {

      if (Platform.OS == "android") {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'App Camera Permission',
            message: 'App needs access to your camera ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          const options = {
            title: 'Select Image',
            storageOptions: {
              skipBackup: true,
              path: 'gallery',
            },
          };
          const result = await launchImageLibrary(options);
          console.log('imgResult', result);

          setValue(imgType, result);
        } else {
          console.log('Camera permission denied');
        }
      }
      else {

        const granted = await request(PERMISSIONS.IOS.CAMERA)
        console.log("ddd", granted)
        if (granted == "granted") {
          const options = {
            title: 'Select Image',
            storageOptions: {
              skipBackup: true,
              path: 'gallery',
            },
          };
          const result = await launchImageLibrary(options);
          console.log('imgResult', result);
  
          setValue(imgType, result);

        }
        else {
          console.log('Camera permission denied');
        }

      }


    } catch (error) {
      console.log('Document picker error:', error);
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Site Images</Text>

        <Text style={styles.subtitle}>
          Please upload images/pictures of the site:
        </Text>
        <TouchableOpacity
          style={styles.btnWrapper}
          onPress={() => handleFileUpload('siteImages')}
        >


          <Text style={styles.buttonText}>

            Site Image
          </Text>
        </TouchableOpacity>
        {siteImages && <Text>Selected File: {siteImages.name}</Text>}

        <Text style={styles.title}>Site Plans</Text>
        <Text style={styles.subtitle}>
          Please upload interior (inside) site plans:
        </Text>
        <TouchableOpacity
          style={styles.btnWrapper}
          onPress={() => handleFileUpload('interiorSitePlans')}
        >


          <Text style={styles.buttonText}>

            Interior Plans
          </Text>
        </TouchableOpacity>



        {interiorPlans && <Text>Selected File: {interiorPlans.name}</Text>}

        <Text style={styles.subtitle}>
          Exterior (outside) site
        </Text>
        <TouchableOpacity
          style={styles.btnWrapper}
          onPress={() => handleFileUpload('exteriorSitePlans')}
        >


          <Text style={styles.buttonText}>

            exterior (outside) site plans:
          </Text>
        </TouchableOpacity>
        {exteriorPlans && <Text>Selected File: {exteriorPlans.name}</Text>}
        {/* 
      <Button title="Submit" onPress={() => handleSubmit()} /> */}
      </View>

      <View style={styles.buttonContainer}>
        {currentStep > 1 && (
          <TouchableOpacity
            style={styles.prevButton}
            onPress={() => {
              setCurrentStep(currentStep - 1);
            }}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
        )}

        {currentStep < 7 && (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleSubmit(submit)}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  btnWrapper: {
    width: "100%",
    height: 40,
    color: "white",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#0080ff',

  },
  btnText: {
    color: "white"



  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  prevButton: {
    width: 100,
    height: 40,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  nextButton: {
    width: 100,
    height: 40,
    backgroundColor: '#0080ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "center"
  },
});

export default SiteImages;
