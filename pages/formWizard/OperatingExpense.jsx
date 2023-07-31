import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import StepsComponent from '../../components/StepsComponent';
import {TextInput} from 'react-native';

import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useAppState} from '../../hooks/useAppState';
import Loader from './Loader';
import axios from 'axios';
import {BASE_URL} from "@env"
const OperatingExpense = ({currentStep, setCurrentStep}) => {
  const [stepValues, setStepValues] = useAppState();

  const handlePrevStep = unit => {
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
  const [isLoading, setIsLoading] = useState(false);

  const submit = data => {
    // if is isLeadsValue is true then add  leadsDetailsArr in req
    let req = {...stepValues, ...data};
    setStepValues(req);

    //  setCurrentStep(currentStep+1)
    let serviceUrl = `/getCommercialReportInput/`;

    setIsLoading(true);

    axios
      .post(`${BASE_URL}getResidentialReportInput/`, req, {
        headers: {'Content-Type': 'multipart/form-data'},
      })
      .then(function (response) {
        setIsLoading(false);
        // handle success
        console.log('res', response, response?.data);

        let responseObj = response.data;
        setStepValues({
          ...stepValues,
          ...{
            reportPath: responseObj.reportPath,
            valuation: responseObj.valuation,
            forecast: responseObj.forecast,
          },
        });
        setCurrentStep(currentStep + 1);
      })
      .catch(function (error) {
        // handle error
        console.log('errr', error);
        setIsLoading(false);

        alert(
          "Error occured while generating report check values and try again'",
        );
      });
  };
  let rentalType = stepValues?.rentalType;
  return (
    <View style={styles.contianer}>
      {isLoading && <Loader />}
      <ScrollView>
        <View style={styles.contianer}>
          <Text style={styles.title}>Operating Expense</Text>

          <View style={styles.legendContainer}>
            <Image
              source={require('../../assets/images/real_state.png')}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Real estate tax</Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="$ per annum"
              keyboardType="numeric"
              name={'real_estate_tax'}
              value={watch('real_estate_tax')}
              onChangeText={value => {
                setValue('real_estate_tax', value);
              }}
            />
          </View>

          {/* Parking */}

          <View style={styles.legendContainer}>
            <Image
              source={require('../../assets/images/home.png')}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Property Insurance</Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="$ per annum"
              keyboardType="numeric"
              name={'property_insurance'}
              value={watch('property_insurance')}
              onChangeText={value => {
                setValue('property_insurance', value);
              }}
            />
          </View>
          {/* Parking */}

          {/* Storage */}

          <View style={styles.legendContainer}>
            <Image
              source={require('../../assets/images/heat-wave.png')}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Heat Bill</Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              name={'heat_bill'}
              value={watch('heat_bill')}
              onChangeText={value => {
                setValue('heat_bill', value);
              }}
            />
          </View>
          {/* Storage */}

          {/* Antennas  */}

          <View style={styles.legendContainer}>
            <Image
              source={require('../../assets/images/electrical-bill.png')}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Electic Bill </Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              name={'electric_bill'}
              value={watch('electric_bill')}
              onChangeText={value => {
                setValue('electric_bill', value);
              }}
            />
          </View>
          {/* Antenas  */}

          {/* 
Billboards  */}

          <View style={styles.legendContainer}>
            <Image
              source={require('../../assets/images/water_pumb.png')}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Water and sewer bill </Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="$ per annum"
              name={'water_and_sewer_bill'}
              value={watch('water_and_sewer_bill')}
              onChangeText={value => {
                setValue('water_and_sewer_bill', value);
              }}
            />
          </View>
          {/* Antenas  */}

          {/* 
Other  */}

          <View style={styles.legendContainer}>
            <Image
              source={require('../../assets/images/maintenance_repair.png')}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Maintenace and Repairs </Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="$ per annum"
              name={'maintenance_and_repairs'}
              value={watch('maintenance_and_repairs')}
              onChangeText={value => {
                setValue('maintenance_and_repairs', value);
              }}
            />
          </View>
          {/* Other  */}

          {/* 
Managmenent cost  */}

        
          {/* Managmenent cost  */}

          {/*  User  */}

          {rentalType == 'Yes' && (
            <View>
                <View style={styles.legendContainer}>
            <Image
              source={require('../../assets/images/reaload.png')}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Management costs</Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              name={'management_cost'}
              value={watch('management_cost')}
              onChangeText={value => {
                setValue('management_cost', value);
              }}
            />
          </View>
              <View style={styles.legendContainer}>
                <Image
                  source={require('../../assets/images/user.png')}
                  style={styles.legendImage}
                />
                <Text style={styles.label2}>Administrative costs</Text>
              </View>

              <View>
                <TextInput
                  style={styles.input}
                  name={'administrative_cost'}
                  value={watch('administrative_cost')}
                  onChangeText={value => {
                    setValue('administrative_cost', value);
                  }}
                />
              </View>
            </View>
          )}

          {/* User */}
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

export default OperatingExpense;
