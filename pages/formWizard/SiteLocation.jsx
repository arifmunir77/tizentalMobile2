import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Text,
  ScrollView,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geocoding, {geocodeByAddress} from 'react-native-geocoding';
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

  console.log('siteLocation', stepValues);

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

  console.log('eer', errors);

  const center = {
    lat: 29.47873429689,
    lng: -95.14606596,
  };
  const [region, setRegion] = React.useState({
    latitude: center.lat,
    longitude: center.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [selectedLocation, setSelectedLocation] = React.useState(null);

  Geocoding.init('AIzaSyD2r6Sj32chxJxKl0Cpi0hyFPdXEICKb2s');

  const mapRef = useRef();
  const locationRef = useRef();

  const submit = data => {
    console.log('daaa', data);
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

  console.log('setAddressText', locationRef);

  useEffect(() => {
    if (stepValues.compAddress) {
      let add = stepValues?.compAddress;

      add && locationRef?.current?.setAddressText(add);

      let lat = stepValues?.lat ;
      let lng = stepValues?.lng ;

      console.log('latt', lat, lng);

      mapRef.current.animateToRegion(
        {
          latitude:   lat,
          longitude:   lng,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        },
        2000,
      );

      // if (lat && lng) {
      //   setSelectedLocation({lat, lng});
      // }
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

      <View style={{zIndex: 1, flex: 1}}>
        <GooglePlacesAutocomplete
          placeholder="Search Place"
          debounce={400}
          query={{
            key: 'AIzaSyD2r6Sj32chxJxKl0Cpi0hyFPdXEICKb2s',
            language: 'en',
          }}
          fetchDetails={true}
          ref={locationRef}
          // listViewDisplayed={true}

          onPress={(item, details = null) => {
            moveToLocation(
              details?.geometry?.location?.lat,
              details?.geometry?.location?.lng,
            );
            console.log('item', item?.structured_formatting);
            setValue('compAddressFull', item);
            setValue('lat', details?.geometry?.location?.lat);
            setValue('lng', details?.geometry?.location?.lng);
            setValue(
              'compAddress',
              item?.structured_formatting?.main_text +
                ' ' +
                item?.structured_formatting?.secondary_text,
            );
          }}
          onFail={error => console.error(error)}
          styles={{height: 300}}
        />
      </View>

      <MapView
        style={styles.map}
        zoomEnabled={true}
        region={region}
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        zoomControlEnabled={true}
        showsUserLocation={true}
        followsUserLocation={true}
        moveOnMarkerPress={true}
        showsMyLocationButton={true}>
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
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 3,
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
    height: 360,
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
