import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geocoding from 'react-native-geocoding';
import {TouchableOpacity} from 'react-native';
import {useAppState} from '../../hooks/useAppState';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import {yupResolver} from '@hookform/resolvers/yup';

import * as yup from 'yup';

const schema = yup.object().shape({
  reportTitle: yup.string().required('Report Title is required'),
  compAddress: yup.string().required('Company Address is required'),
});

import {useForm} from 'react-hook-form';
import {mergeObjs} from '../../utils/ObjectUtils';

import StepsComponent from '../../components/StepsComponent';

const SiteLocation = ({currentStep, setCurrentStep}) => {
  const [stepValues, setStepValues] = useAppState();

  const {
    register,
    setError,
    handleSubmit,
    formState,
    watch,
    reset,
    setValue,
    getValues,
  } = useForm({
    defaultValues: stepValues,
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });
  const {errors} = formState;

  const center = {
    lat: 29.47873429689,
    lon: -95.14606596,
  };
  const [region, setRegion] = React.useState({
    latitude: center.lat,
    longitude: center.lon,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [selectedLocation, setSelectedLocation] = React.useState(null);

  Geocoding.init('AIzaSyD2r6Sj32chxJxKl0Cpi0hyFPdXEICKb2s');

  const mapRef = useRef();
  const locationRef = useRef();

  const submit = data => {
    setStepValues({...stepValues, ...data});
    setCurrentStep(currentStep + 1);
  };

  const moveToLocation = async (latitude, longitude) => {
    try {
      mapRef.current.animateToRegion(
        {
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        },
        2000,
      );

      setSelectedLocation({latitude, longitude});
    } catch (error) {
      console.log('errr', error);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleNextStep = () => {
    handleSubmit(submit)();
  };

  const convertToCompanyAddress = async (latitude, longitude) => {
    try {
      const response = await Geocoding.from(latitude, longitude);
      const {results} = response;
      const address = results[1].formatted_address;
      setValue('compAddress', address);
      setValue('lat', latitude);
      setValue('lon', longitude);

      locationRef?.current?.setAddressText(address);
    } catch (error) {
      console.error('Error converting coordinates to address:', error);
    }
  };

  useEffect(() => {
    if (stepValues) {
      let address = stepValues?.compAddress;

      address && locationRef?.current?.setAddressText(address);

      let lat = stepValues?.lat;
      let lon = stepValues?.lon;

      if (lat && lon) {
        mapRef.current.animateToRegion(
          {
            latitude: lat,
            longitude: lon,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          },
          2000,
        );
        setSelectedLocation({latitude: lat, longitude: lon});
        setRegion({
          latitude: lat,
          longitude: lon,
          latitudeDelta: 0.000315,
          longitudeDelta: 0.0005121,
        });
      }
    }
  }, [stepValues]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Report Title"
          name={'reportTitle'}
          value={watch('reportTitle')}
          onChangeText={value => {
            setValue('reportTitle', value);
          }}
        />
        {errors?.reportTitle && (
          <Text style={styles.errorText}> {errors?.reportTitle?.message}</Text>
        )}
      </View>

      <View style={{zIndex:5, flex: 1, height: '100%'}}>
        
          <GooglePlacesAutocomplete
            placeholder="Search Place"
            debounce={400}
            query={{
              key: 'AIzaSyD2r6Sj32chxJxKl0Cpi0hyFPdXEICKb2s',
              language: 'en',
            }}
            fetchDetails={true}
            ref={locationRef}
            listViewDisplayed={true}
            onPress={(item, details = null) => {
              moveToLocation(
                details?.geometry?.location?.lat,
                details?.geometry?.location?.lng,
              );

              setValue('lat', details?.geometry?.location?.lat);
              setValue('lon', details?.geometry?.location?.lng);
              setValue(
                'compAddress',
                item?.structured_formatting?.main_text +
                  ' ' +
                  item?.structured_formatting?.secondary_text,
              );
            }}
            onFail={error => console.error(error)}
            styles={{height: 400}}
          />
        
      </View>

      <MapView
        style={styles.map}
        // zoomEnabled={true}
        region={region}
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        zoomControlEnabled={true}
        showsUserLocation={false}
        followsUserLocation={false}
        moveOnMarkerPress={true}
        showsMyLocationButton={false}
        onPress={event => {
          console.log('pressed');
          const {latitude, longitude} = event.nativeEvent.coordinate;
          setSelectedLocation({latitude, longitude});

          convertToCompanyAddress(latitude, longitude);
        }}>
        {selectedLocation && <Marker coordinate={selectedLocation} />}
      </MapView>

      <View style={{flex: 1, justifyContent: 'flex-end', marginTop: 10}}>
        <StepsComponent
          currentStep={currentStep}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  input: {
    // height: 40,

    // borderColor: '#000',
    marginBottom: 6,
    borderRadius: 5,
    paddingHorizontal: 5,
    backgroundColor: 'white',
  },
  inputContainer: {
    zIndex: 1,
  },

  map: {
    flex: 1,
    // marginBottom: 50,
    ...StyleSheet.absoluteFill,
    height: 300,
    marginTop: 150,

    // zIndex: 0,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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
  errorText: {
    color: 'red',
  },
  SelectDropdownContainer: {
    marginBottom: 10,
  },
});

export default SiteLocation;
