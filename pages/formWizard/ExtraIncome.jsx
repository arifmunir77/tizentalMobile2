import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import StepsComponent from '../../components/StepsComponent';
import {TextInput} from 'react-native';

import {useState} from 'react';

import CheckBox from '@react-native-community/checkbox';
import {useAppState} from '../../hooks/useAppState';
import {useForm} from 'react-hook-form';

const ExtraIncome = ({currentStep, setCurrentStep}) => {
  const [stepValues, setStepValues] = useAppState();
  console.log('stee', stepValues);

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const {register, setError, handleSubmit, formState, watch, reset, setValue} =
    useForm({
      defaultValues: stepValues,
      mode: 'onSubmit',
    });
  const {errors} = formState;

  const handleNextStep = () => {
    handleSubmit(submit)();
  };

  const submit = data => {
    setStepValues({...stepValues, ...data});
    setCurrentStep(currentStep + 1);
  };

  let rentalType = stepValues?.rentalType;

  return (
    <View style={styles.contianer}>
      <ScrollView>
        <View style={styles.contianer}>
          <Text style={styles.title}>Extra Income</Text>

          <View style={styles.legendContainer}>
            <Image
              source={require('../../assets/images/Laundry.png')}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Laundry</Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="$ per month"
              keyboardType="numeric"
              name={'laundry_income'}
              value={watch('laundry_income')}
              onChangeText={value => {
                setValue('laundry_income', value);
              }}
              editable={rentalType == 'No' ? false : true}
            />
          </View>

          {/* Parking */}

          <View style={styles.legendContainer}>
            <Image
              source={require('../../assets/images/parking.png')}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Parking</Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="$ per month"
              keyboardType="numeric"
              name={'parking_income'}
              value={watch('parking_income')}
              onChangeText={value => {
                setValue('parking_income', value);
              }}
              editable={rentalType == 'No' ? false : true}
            />
          </View>
          {/* Parking */}

          {/* Storage */}

          <View style={styles.legendContainer}>
            <Image
              source={require('../../assets/images/storage.png')}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Storage</Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="$ per month"
              keyboardType="numeric"
              name={'storage_income'}
              value={watch('storage_income')}
              onChangeText={value => {
                setValue('storage_income', value);
              }}
              editable={rentalType == 'No' ? false : true}
            />
          </View>
          {/* Storage */}

          {/* Antennas  */}

          <View style={styles.legendContainer}>
            <Image
              source={require('../../assets/images/antenas.png')}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Antennas </Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="$ per month"
              keyboardType="numeric"
              name={'antennas_income'}
              value={watch('antennas_income')}
              onChangeText={value => {
                setValue('antennas_income', value);
              }}
              editable={rentalType == 'No' ? false : true}
            />
          </View>
          {/* Antenas  */}

          {/* 
Billboards  */}

          <View style={styles.legendContainer}>
            <Image
              source={require('../../assets/images/billboard.png')}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Billboards </Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="$ per month"
              keyboardType="numeric"
              name={'billboards_income'}
              value={watch('billboards_income')}
              onChangeText={value => {
                setValue('billboards_income', value);
              }}
              editable={rentalType == 'No' ? false : true}
            />
          </View>
          {/* Antenas  */}

          {/* 
Other  */}

          <View style={styles.legendContainer}>
            <Image
              source={require('../../assets/images/other.png')}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Other </Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="$ per month"
              keyboardType="numeric"
              name={'other_income'}
              value={watch('other_income')}
              onChangeText={value => {
                setValue('other_income', value);
              }}
              editable={rentalType == 'No' ? false : true}
            />
          </View>
          {/* Other  */}

          <View style={styles.checkboxContainer}>
            <CheckBox
              style={styles.checkbox}
              onValueChange={checked => {
                if (checked) {
                  setValue('elec_bill_by_tenants', 'true');
                } else {
                  setValue('elec_bill_by_tenants', 'false');
                }
              }}
              value={watch('elec_bill_by_tenants') == 'true'}
              disabled={rentalType == 'No' ? true : false}

            />
            <Text style={styles.checkboxLabel}>
              Tenants pay their own electric bills
            </Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              style={styles.checkbox}
              onValueChange={checked => {
                if (checked) {
                  setValue('heat_bill_by_tenants', 'true');
                } else {
                  setValue('heat_bill_by_tenants', 'false');
                }
              }}
              value={watch('heat_bill_by_tenants') == 'true'}
              disabled={rentalType == 'No' ? true : false}
            />
            <Text style={styles.checkboxLabel}>
              Tenants pay their own heat bills
            </Text>
          </View>
        </View>
      </ScrollView>

      <StepsComponent
        currentStep={currentStep}
        handlePrevStep={handlePrevStep}
        handleNextStep={handleNextStep}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 16,
    // fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    width: '101%',
  },
  legendContainer: {
    alignItems: 'center',
    display: 'flex',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 25,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default ExtraIncome;
