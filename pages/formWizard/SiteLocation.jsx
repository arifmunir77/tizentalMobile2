import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Text,
  ScrollView,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geocoding from 'react-native-geocoding';
import {TouchableOpacity} from 'react-native';
import {useAppState} from '../../hooks/useAppState';

import {yupResolver} from '@hookform/resolvers/yup';

import * as yup from 'yup';

const schema = yup.object().shape({
  reportTitle: yup.string().required('Report Title is required'),
  state: yup.string().required('State is required'),
  city: yup.string().required('City is required'),
  zipCode: yup.string().required('Zip Code is required'),
  compAddress: yup.string().required('Company Address is required'),
});

import {useForm} from 'react-hook-form';
import {mergeObjs} from '../../utils/ObjectUtils';

import {SelectList} from 'react-native-dropdown-select-list';
import {StatesData, cityData} from '../../data/cityData';

const SiteLocation = ({currentStep, setCurrentStep}) => {
  const [stepValues, setStepValues] = useAppState();

  console.log('locaSte', stepValues);

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
    latitudeDelta: 0.0922, // Adjust the zoom level as needed
    longitudeDelta: 0.0421, // Adjust the zoom level as needed
  });

  const [selectedLocation, setSelectedLocation] = React.useState(null);

  Geocoding.init('AIzaSyAHD9fCB1tlmFBQufvl_uTkd-WIICNXtwk');

  const [companyAddress, setCompanyAddress] = React.useState('');

  const convertToCompanyAddress = async (latitude, longitude) => {
    try {
      const response = await Geocoding.from(latitude, longitude);
      const {results} = response;
      const address = results[1].formatted_address;
      setValue('compAddress', address);
      setCompanyAddress(address);
    } catch (error) {
      console.error('Error converting coordinates to address:', error);
    }
  };

  React.useEffect(() => {
    if (selectedLocation) {
      convertToCompanyAddress(
        selectedLocation.latitude,
        selectedLocation.longitude,
      );
    }
  }, [selectedLocation]);

  const zoomIn = () => {
    const zoomLevel = 0.005; // Adjust the zoom level as needed

    const newRegion = {
      ...region,
      latitudeDelta: region.latitudeDelta / 0.2,
      longitudeDelta: region.longitudeDelta / 0.2,
    };
    setRegion(newRegion);
  };

  const submit = data => {
    setStepValues({...stepValues, ...data});
    setCurrentStep(currentStep + 1);
  };

  const [cityDefauldData, setcityDefaultData] = useState(null);
  const [stateDefauldData, setstateDefaultData] = useState(null);

  useEffect(() => {
    let selectedCityData = stepValues?.city;
    let selectedStateData = stepValues?.state;

    if (selectedCityData) {
      let data = cityData.find(item => item.value == selectedCityData);

      setcityDefaultData(data);
    }
    if (selectedStateData) {
      let data = StatesData.find(item => item.value == selectedStateData);

      setstateDefaultData(data);
    }
  }, [stepValues]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Report Title"
          name={'reportTitle'}
          onChangeText={value => {
            setValue('reportTitle', value);
          }}
        />

        {errors?.reportTitle && (
          <Text style={styles.errorText}> {errors?.reportTitle?.message}</Text>
        )}
        <View style={styles.SelectDropdownContainer}>
          <SelectList
            setSelected={val => setValue('state', val)}
            defaultOption={stateDefauldData}
            data={StatesData}
            placeholder="Select State"
            // defaultOption={{key: '1', name:"Jammu & Kashmir", value: 'Jammu & Kashmir'}} //default selected option
          />

          {errors?.state && (
            <Text style={styles.errorText}> {errors?.state?.message}</Text>
          )}
        </View>

        <View style={styles.SelectDropdownContainer}>
          <SelectList
            setSelected={val => {
              setValue('city', val);
            }}
            data={cityData}
            save="value"
            placeholder="Select City"
            defaultOption={cityDefauldData}
          />

          {errors?.city && (
            <Text style={styles.errorText}> {errors?.city?.message}</Text>
          )}
        </View>

        <TextInput
          style={styles.input}
          placeholder="Zip Code"
          name={'zipCode'}
          onChangeText={value => {
            setValue('zipCode', value);
          }}
          value={watch('zipCode')}
        />

        {errors?.zipCode && (
          <Text style={styles.errorText}> {errors?.zipCode?.message}</Text>
        )}

        <TextInput
          style={styles.input}
          placeholder="Company Address"
          value={watch('compAddress')}
          name={'compAddress'}
          onChangeText={value => {
            setValue('compAddress', value);
          }}
        />

        {errors?.compAddress && (
          <Text style={styles.errorText}> {errors?.compAddress?.message}</Text>
        )}
        <Button title="Get Location" onPress={zoomIn} />
        {/* Display MapView with Marker */}

        <MapView
          style={styles.map}
          region={region}
          provider={PROVIDER_GOOGLE}
          onRegionChangeComplete={region => setRegion(region)}
          onPress={event => {
            const {latitude, longitude} = event.nativeEvent.coordinate;
            setSelectedLocation({latitude, longitude});
          }}>
          {selectedLocation && <Marker coordinate={selectedLocation} />}
        </MapView>

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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    paddingHorizontal: 8,
  },

  map: {
    flex: 1,
    marginTop: 16,
    height: 200,
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
    marginBottom: 20,
  },
  SelectDropdownContainer: {
    marginBottom: 10,
  },
});

export default SiteLocation;
