import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';
import Slider from '@react-native-community/slider';
import * as yup from 'yup';

import RadioButton from '../../components/RadioButton';
import {TouchableOpacity} from 'react-native';
import {useAppState} from '../../hooks/useAppState';
import {useForm} from 'react-hook-form';
import {mergeObjs} from '../../utils/ObjectUtils';
import {yupResolver} from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  totalAreaSqFt: yup
    .number()
    .moreThan(0, 'Site Area must be greater than 0')
    .required('Site Area is required'),
  totalCurbCuts: yup
    .number()
    .moreThan(0, 'Total Curb Cuts must be greater than 0')
    .required('Total Curb Cuts is required'),
});

const SiteDetails = ({currentStep, setCurrentStep}) => {
  const [stepValues, setStepValues] = useAppState();

  const {register, setError, handleSubmit, formState, watch, reset, setValue} =
    useForm({
      defaultValues: mergeObjs(stepValues, {
        isIntersection: 'yes',
        isSitePlanProv: 'yes',
        isFunRetailUnit: 'no',
        foodSalesPerMonth: 0,
        carWashSalesPerMonth: 0,
        cStoreSalePerMonth: 0,
        priFrontFootage: 10,
        secFrontFootage: 10,
      }),
      mode: 'onSubmit',
      resolver: yupResolver(schema),
    });
  const {errors} = formState;

  const submit = data => {
    setStepValues({...stepValues, ...data});
    setCurrentStep(currentStep + 1);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Site Details</Text>

          <View style={styles.fieldContainer}>
            <TextInput
              style={styles.input}
              placeholder="Site Area in sq. ft"
              value={watch('totalAreaSqFt')}
              name="totalAreaSqFt"
              onChangeText={value => {
                setValue('totalAreaSqFt', value);
              }}
            />

            {errors?.totalAreaSqFt && (
              <Text style={styles.errorText}>
                {' '}
                {errors?.totalAreaSqFt?.message}
              </Text>
            )}
          </View>

          <View style={styles.fieldContainer}>
            <TextInput
              style={styles.input}
              name={'totalCurbCuts'}
              value={watch('totalCurbCuts')}
              onChangeText={value => {
                setValue('totalCurbCuts', value);
              }}
              placeholder="totalCurbCuts"
            />
            {errors?.totalAreaSqFt && (
              <Text style={styles.errorText}>
                {' '}
                {errors?.totalCurbCuts?.message}
              </Text>
            )}
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Average Curb Cut Size ?</Text>
            <Slider
              style={{height: 40}}
              minimumValue={5}
              maximumValue={40}
              minimumTrackTintColor="#000000"
              maximumTrackTintColor="#000000"
              onValueChange={val => {
                setValue('avgCurbCutSize', val);
              }}
              value={watch('avgCurbCutSize')}
            />
            <Text>{' Average Curb Cut Size ' + watch('avgCurbCutSize')}</Text>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Road Frontage ( Primary )</Text>
            <Slider
              style={{height: 40}}
              minimumValue={30}
              maximumValue={80}
              minimumTrackTintColor="#000000"
              maximumTrackTintColor="#000000"
              onValueChange={val => {
                setValue('priFrontFootage', val);
              }}
              value={watch('priFrontFootage')}
            />
            <Text>
              {'Road Frontage ( Primary ) ' + watch('priFrontFootage')}
            </Text>
          </View>
          <View style={styles.fieldContainer}>
            <View>
              <Text style={styles.label}>Road Frontage ( Secondary )</Text>
              <Slider
                style={{height: 40}}
                minimumValue={30}
                maximumValue={80}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                onValueChange={val => {
                  setValue('secFrontFootage', val);
                }}
                value={watch('secFrontFootage')}
              />
              <Text>
                {'Road Frontage ( Secondary ) ' + watch('secFrontFootage')}
              </Text>
            </View>

            <View>
              <Text style={styles.label}>
                Is your location a functioning retail unit ?
              </Text>
              <View style={styles.radioContainer}>
                <RadioButton
                  label="Yes"
                  value="yes"
                  checked={watch('isFunRetailUnit') == 'yes'}
                  name={'isFunRetailUnit'}
                  onChange={value => {
                    // console.log("value", value);
                    setValue('isFunRetailUnit', value);
                  }}
                />
                <RadioButton
                  label="No"
                  value="no"
                  checked={watch('isFunRetailUnit') == 'no'}
                  name={'isFunRetailUnit'}
                  onChange={value => {
                    // console.log("value", value);
                    setValue('isFunRetailUnit', value);
                  }}
                />
              </View>
            </View>
            <View style={styles.fieldContainer}>
              <TextInput
                style={styles.input}
                name={'cStoreSalePerMonth'}
                onChangeText={value => {
                  setValue('cStoreSalePerMonth', value);
                }}
                value={watch('cStoreSalePerMonth')}
                placeholder="C-Store Per Month"
              />
            </View>
            <View style={styles.fieldContainer}>
              <TextInput
                style={styles.input}
                name={'foodSalesPerMonth'}
                onChangeText={value => {
                  setValue('foodSalesPerMonth', value);
                }}
                value={watch('foodSalesPerMonth')}
                placeholder="Food Sales (per month)"
              />
            </View>

            <View style={styles.fieldContainer}>
              <TextInput
                style={styles.input}
                name={'carWashSalesPerMonth'}
                onChangeText={value => {
                  setValue('carWashSalesPerMonth', value);
                }}
                value={watch('carWashSalesPerMonth')}
                placeholder="Car Wash (per month)"
              />
            </View>
            <View>
              <Text style={styles.label}>
                Is your location a functioning retail unit ?
              </Text>
              <View style={styles.radioContainer}>
                <RadioButton
                  label="Yes"
                  value="yes"
                  checked={watch('isIntersection') == 'yes'}
                  name={'isIntersection'}
                  onChange={value => {
                    setValue('isIntersection', value);
                  }}
                />
                <RadioButton
                  label="No"
                  value="no"
                  checked={watch('isIntersection') == 'no'}
                  name={'isIntersection'}
                  onChange={value => {
                    setValue('isIntersection', value);
                  }}
                />
              </View>
            </View>

            <View>
              <Text style={styles.label}>Is Site Plan Provided ?</Text>
              <View style={styles.radioContainer}>
                <RadioButton
                  label="Yes"
                  value="yes"
                  checked={watch('isSitePlanProv') == 'yes'}
                  name={'isSitePlanProv'}
                  onChange={value => {
                    setValue('isSitePlanProv', value);
                  }}
                />
                <RadioButton
                  label="No"
                  value="no"
                  checked={watch('isSitePlanProv') == 'no'}
                  name={'isSitePlanProv'}
                  onChange={value => {
                    setValue('isSitePlanProv', value);
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

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
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  fieldContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  baseStyle: {
    thumb: {
      height: 30, // Adjust the height of the thumb
      width: 30, // Adjust the width of the thumb
      borderRadius: 15, // Make the thumb circular
    },
    filledTrack: {
      borderRadius: 4, // Adjust the border radius of the filled track
    },
    track: {
      borderRadius: 4, // Adjust the border radius of the track
    },
  },
  radioContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
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
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
  },
});

export default SiteDetails;
