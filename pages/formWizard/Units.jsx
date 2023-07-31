import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import RadioButton from '../../components/RadioButton';

import StepsComponent from '../../components/StepsComponent';
import {mergeObjs} from '../../utils/ObjectUtils';

import {useAppState} from '../../hooks/useAppState';
import {useForm} from 'react-hook-form';

const Units = ({currentStep, setCurrentStep}) => {
  const [stepValues, setStepValues] = useAppState();

  const valueIsZeroOrEmpty = value => {
    return value === '' || value === 0;
  };

  const {
    register,
    setError,
    handleSubmit,
    formState,
    setValue,
    watch,
    getValues,
  } = useForm({
    defaultValues: mergeObjs(stepValues, {
      unitType: 'Single',
      num_studios: 0,
      studio_avg_rent: 0,
      studio_total_sqft: 0,
      num_one_bedroom: 0,
      one_bedroom_avg_rent: 0,
      one_bedroom_total_sqft: 0,
      num_two_bedroom: 0,
      two_bedroom_avg_rent: 0,
      two_bedroom_total_sqft: 0,
      num_three_bedroom: 0,
      three_bedroom_avg_rent: 0,
      three_bedroom_total_sqft: 0,
      totalAreaSqFt: 0,
    }),
    mode: 'onSubmit',
  });
  const {errors} = formState;

  const valueIsGtThanZero = value => {
    return value !== '' && value > 0;
  };

  const validateStudio = data => {
    let message = 'Either fill all values or leave all values empty/zero';

    let studio_avg_rent = getValues('studio_avg_rent');
    let studio_total_sqft = getValues('studio_total_sqft');

    if (
      valueIsZeroOrEmpty(data) &&
      valueIsZeroOrEmpty(studio_avg_rent) &&
      valueIsZeroOrEmpty(studio_total_sqft)
    ) {
      return true;
    } else {
      if (
        !valueIsGtThanZero(data) ||
        !valueIsGtThanZero(studio_avg_rent) ||
        !valueIsGtThanZero(studio_total_sqft)
      )
        return message;
      else return true;
    }
  };

  const validateOneBedroom = data => {
    let message = 'Either fill all values or leave all values empty/zero';

    let one_bedroom_avg_rent = getValues('one_bedroom_avg_rent');
    let one_bedroom_total_sqft = getValues('one_bedroom_total_sqft');

    if (
      valueIsZeroOrEmpty(data) &&
      valueIsZeroOrEmpty(one_bedroom_avg_rent) &&
      valueIsZeroOrEmpty(one_bedroom_total_sqft)
    ) {
      return true;
    } else {
      if (
        !valueIsGtThanZero(data) ||
        !valueIsGtThanZero(one_bedroom_avg_rent) ||
        !valueIsGtThanZero(one_bedroom_total_sqft)
      )
        return message;
      else return true;
    }
  };

  const validateTwoBedroom = data => {
    let message = 'Either fill all values or leave all values empty/zero';

    let two_bedroom_avg_rent = getValues('two_bedroom_avg_rent');
    let two_bedroom_total_sqft = getValues('two_bedroom_total_sqft');

    if (
      valueIsZeroOrEmpty(data) &&
      valueIsZeroOrEmpty(two_bedroom_avg_rent) &&
      valueIsZeroOrEmpty(two_bedroom_total_sqft)
    ) {
      return true;
    } else {
      if (
        !valueIsGtThanZero(data) ||
        !valueIsGtThanZero(two_bedroom_avg_rent) ||
        !valueIsGtThanZero(two_bedroom_total_sqft)
      )
        return message;
      else return true;
    }
  };

  const validateThreeBedroom = data => {
    let message = 'Either fill all values or leave all values empty';

    let three_bedroom_avg_rent = getValues('three_bedroom_avg_rent');
    let three_bedroom_total_sqft = getValues('three_bedroom_total_sqft');

    if (
      valueIsZeroOrEmpty(data) &&
      valueIsZeroOrEmpty(three_bedroom_avg_rent) &&
      valueIsZeroOrEmpty(three_bedroom_total_sqft)
    ) {
      return true;
    } else {
      if (
        !valueIsGtThanZero(data) ||
        !valueIsGtThanZero(three_bedroom_avg_rent) ||
        !valueIsGtThanZero(three_bedroom_total_sqft)
      )
        return message;
      else return true;
    }
  };

  const handlePrevStep = unit => {
    setCurrentStep(currentStep - 1);
  };

  const submit = data => {
    console.log('daaa', data);
    setStepValues({...stepValues, ...data});
    setCurrentStep(currentStep + 1);
  };

  const handleNextStep = unit => {
    handleSubmit(submit)();
  };

  let rentalType = watch('rentalType');

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Type of unit:</Text>
        <View>
          <RadioButton
            label="Single-family unit"
            checked={watch('unitType') == 'Single'}
            name={'unitType'}
            value="Single"
            onChange={val => {
              setValue('unitType', val);
            }}
          />
          <RadioButton
            label="Multi-family unit"
            checked={watch('unitType') == 'Multiple'}
            name={'unitType'}
            value="Multiple"
            onChange={val => {
              setValue('unitType', val);
            }}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Total Area SqFT."
            keyboardType="numeric"
            name={'totalAreaSqFt'}
            value={watch('totalAreaSqFt')}
            onChangeText={value => {
              setValue('totalAreaSqFt', value);
            }}
          />
          {errors?.totalAreaSqFt && (
            <Text style={styles.errorText}>
              {errors?.totalAreaSqFt?.message}
            </Text>
          )}
        </View>
        <View>
          <Text style={{marginBottom: 10, marginTop: 10}}>
            Is this property primarily used as a rental property or to receive
            rental income?
          </Text>
          <RadioButton
            label="Yes"
            checked={watch('rentalType') == 'Yes'}
            name={'rentalType'}
            value="Yes"
            onChange={val => {
              setValue('rentalType', val);
            }}
          />
          <RadioButton
            label="No"
            checked={watch('rentalType') == 'No'}
            name={'rentalType'}
            value="No"
            onChange={val => {
              setValue('rentalType', val);
            }}
          />
        </View>
        {rentalType == 'Yes' && (
          <View>
            <View style={styles.mainStudioContainer}>
              <View style={styles.legendContainer}>
                <Image
                  source={require('../../assets/images/bed.png')}
                  style={styles.legendImage}
                />
                <Text style={styles.label2}>Studios</Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  {...register('num_studios', {
                    valueAsNumber: true,
                    validate: validateStudio,
                  })}
                  placeholder="No."
                  keyboardType="numeric"
                  name={'num_studios'}
                  value={watch('num_studios')}
                  onChangeText={value => {
                    setValue('num_studios', value);
                  }}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Per month"
                  keyboardType="numeric"
                  name={'studio_avg_rent'}
                  value={watch('studio_avg_rent')}
                  onChangeText={value => {
                    setValue('studio_avg_rent', value);
                  }}
                />
              </View>

              <View>
                <TextInput
                  style={styles.input2}
                  placeholder="Total square foot"
                  keyboardType="numeric"
                  name={'studio_total_sqft'}
                  value={watch('studio_total_sqft')}
                  onChangeText={value => {
                    setValue('studio_total_sqft', value);
                  }}
                />
              </View>
              {errors?.num_studios && (
                <Text style={styles.errorText}>
                  {' '}
                  {errors?.num_studios?.message}
                </Text>
              )}
            </View>

            <View style={styles.mainStudioContainer}>
              <View style={styles.legendContainer}>
                <Image
                  source={require('../../assets/images/bed.png')}
                  style={styles.legendImage}
                />
                <Text style={styles.label2}>1-bedrooms</Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="No."
                  keyboardType="numeric"
                  name={'num_one_bedroom'}
                  {...register('num_one_bedroom', {
                    validate: validateOneBedroom,
                    valueAsNumber: true,
                  })}
                  value={watch('num_one_bedroom')}
                  onChangeText={value => {
                    setValue('num_one_bedroom', value);
                  }}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Per month"
                  keyboardType="numeric"
                  name={'one_bedroom_avg_rent'}
                  value={watch('one_bedroom_avg_rent')}
                  onChangeText={value => {
                    setValue('one_bedroom_avg_rent', value);
                  }}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input2}
                  placeholder="Total square foot"
                  keyboardType="numeric"
                  name={'one_bedroom_total_sqft'}
                  value={watch('one_bedroom_total_sqft')}
                  onChangeText={value => {
                    setValue('one_bedroom_total_sqft', value);
                  }}
                />
              </View>
              {errors?.num_one_bedroom && (
                <Text style={styles.errorText}>
                  {' '}
                  {errors?.num_one_bedroom?.message}
                </Text>
              )}
            </View>

            <View style={styles.mainStudioContainer}>
              <View style={styles.legendContainer}>
                <Image
                  source={require('../../assets/images/studio.png')}
                  style={styles.legendImage}
                />
                <Text style={styles.label2}>2-bedrooms</Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  name={'num_two_bedroom'}
                  {...register('num_two_bedroom', {
                    validate: validateTwoBedroom,
                    valueAsNumber: true,
                  })}
                  value={watch('num_two_bedroom')}
                  placeholder="No."
                  onChangeText={value => {
                    setValue('num_two_bedroom', value);
                  }}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Per month"
                  keyboardType="numeric"
                  name={'two_bedroom_avg_rent'}
                  value={watch('two_bedroom_avg_rent')}
                  onChangeText={value => {
                    setValue('two_bedroom_avg_rent', value);
                  }}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input2}
                  placeholder="Total square foot"
                  keyboardType="numeric"
                  name={'two_bedroom_total_sqft'}
                  value={watch('two_bedroom_total_sqft')}
                  onChangeText={value => {
                    setValue('two_bedroom_total_sqft', value);
                  }}
                />
                {errors?.num_two_bedroom && (
                  <Text style={styles.errorText}>
                    {' '}
                    {errors?.num_two_bedroom?.message}
                  </Text>
                )}
              </View>
            </View>

            <View style={styles.mainStudioContainer}>
              <View style={styles.legendContainer}>
                <Image
                  source={require('../../assets/images/bed.png')}
                  style={styles.legendImage}
                />
                <Text style={styles.label2}>3-bedrooms</Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="N"
                  keyboardType="numeric"
                  name={'num_three_bedroom'}
                  {...register('num_three_bedroom', {
                    validate: validateThreeBedroom,
                    valueAsNumber: true,
                  })}
                  value={watch('num_three_bedroom')}
                  onChangeText={value => {
                    setValue('num_three_bedroom', value);
                  }}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Per month"
                  keyboardType="numeric"
                  name={'three_bedroom_avg_rent'}
                  value={watch('three_bedroom_avg_rent')}
                  onChangeText={value => {
                    setValue('three_bedroom_avg_rent', value);
                  }}
                />
              </View>

              <View>
                <TextInput
                  style={styles.input2}
                  placeholder="Total square foot"
                  keyboardType="numeric"
                  name={'three_bedroom_total_sqft'}
                  value={watch('three_bedroom_total_sqft')}
                  onChangeText={value => {
                    setValue('three_bedroom_total_sqft', value);
                  }}
                />
                {errors?.num_three_bedroom && (
                  <Text style={styles.errorText}>
                    {' '}
                    {errors?.num_three_bedroom?.message}
                  </Text>
                )}
              </View>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Enter the number of units of each type and the Market Rent that
                one of these units would get per month. (Market Rent is the rent
                the landlord could get if the units were rented today to new
                tenants.)
              </Text>

              <Text style={styles.text}>
                Enter the average rent for each type. (For instance, if there
                are two one-bedrooms and they could get $1,000 and $1,400
                because one is better than the other, enter the average, $1,200,
                as the one-bedroom Market Rent.)
              </Text>
            </View>
          </View>
        )}
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
  container: {
    flex: 1,
    padding: 15,
  },
  label: {
    fontSize: 16,
    // fontWeight: "bold",
    marginBottom: 5,
  },
  label2: {
    fontSize: 24,
    // fontWeight: "bold",
    // marginBottom: 20,
    marginTop: 17,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    width: '50%',
  },
  input2: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    width: '101%',
  },
  mainStudioContainer: {
    padding: 2,
  },
  textContainer: {
    marginTop: 15,
  },
  text: {
    marginBottom: 10,
    fontSize: 14,
    // fontWeight: 600,
  },
  inputContainer: {
    // display: "flex",
    flexDirection: 'row',
    gap: 3,
  },
  radioGroup: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  radioButtonText: {
    fontSize: 16,
  },
  radioButtonSelected: {
    backgroundColor: '#ccc',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  legendContainer: {
    alignItems: 'center',
    display: 'flex',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  legendImage: {
    marginTop: 20,
  },
});

export default Units;
