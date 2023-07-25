import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';

import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import RadioButton from '../../components/RadioButton';

import {useFormik} from 'formik';
import {TouchableOpacity} from 'react-native';
import {useAppState} from '../../hooks/useAppState';
import {useForm} from 'react-hook-form';
import {mergeObjs} from '../../utils/ObjectUtils';

import {SelectList} from 'react-native-dropdown-select-list';

const validationSchema = Yup.object().shape({
  gasBrandConsideration: Yup.string().required('Required'),
  numMPD: Yup.number().required('Required'),
  numAutoDieselHose: Yup.number().required('Required'),
  numCarWash: Yup.number().required('Required'),
});

const DevelopmentStrategy = ({currentStep, setCurrentStep}) => {
  const [stepValues, setStepValues] = useAppState();

  console.log('develValues', stepValues);

  const data = [
    {key: '1', value: '3000 - 5000 Sq Ft Site'},
    {key: '2', value: '5000 - 7000 Sq Ft Site'},
    {key: '2', value: '7000 - 9000 Sq Ft Site'},
  ];

  const {register, setError, handleSubmit, formState, setValue, reset, watch} =
    useForm({
      defaultValues: mergeObjs(stepValues, {
        f_24H_ops: 'yes',
        f_beer_cave: 'yes',
        numCarWash: 0,
        retailTenantType: 'None',
        retailTenantSize: 0,
        qsrBrand: 'None',
        qsrSize: 0,
        storeType: 'None',
        storeSize: 0,
        f_freezer_door: 0,
        f_cooler_door: 0,
      }),
      mode: 'onSubmit',
      resolver: yupResolver(validationSchema),
    });
  const {errors} = formState;

  console.log('errr', errors);

  const submit = data => {
    console.log('formData', data);

    setStepValues({...stepValues, ...data});
    setCurrentStep(currentStep + 1);
  };

  const [selected, setSelected] = React.useState('');

  const selectedViewProjectTemplate = selected => {
    console.log('sedd', selected);
    selected = selected[0];
    if (selected == undefined) return;
    // setValue('gasBrandConsideration', selected.gasBrandConsideration);
    // setValue('numMPD', selected.numMPD);
    // setValue('numAutoDieselHose', selected.numAutoDieselHose);
    // setValue('num_car_wash', selected.num_car_wash);
    // setValue('qsrBrand', selected.qsrBrand);
    // setValue('qsrSize', selected.qsrSize);
    // setValue('retailTenantType', selected.retailTenantType);
    // setValue('retailTenantSize', selected.retailTenantSize);
    // setValue('store_type', selected.store_type);
    // setValue('storeSize', selected.storeSize);
    // setValue('f_freezer_door', selected.f_freezer_door);
    // setValue('f_cooler_door', selected.f_cooler_door);
    // setValue('f_beer_cave', selected.f_beer_cave);
    // setValue('f_24H_ops', selected.f_24H_ops);
  };
  register('gasBrandConsideration');
  register('numMPD');
  register('numAutoDieselHose');

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Development Strategy</Text>
          <View>
            <Text>Please select proposed development strategy</Text>

            <SelectList
              setSelected={val => selectedViewProjectTemplate(val)}
              data={data}
              save="value"
            />

            <Text>Please make your selection</Text>
            <TextInput
              style={styles.input}
              placeholder="Gas Brand"
              name={'gasBrandConsideration'}
              onChangeText={value => {
                setValue('gasBrandConsideration', value);
              }}
              value={watch('gasBrandConsideration')}
              {...register('gasBrandConsideration')}
            />
            {errors?.gasBrandConsideration && (
              <Text style={styles.error}>
                {errors?.gasBrandConsideration?.message}
              </Text>
            )}

            <TextInput
              style={styles.input}
              {...register('numMPD')}
              placeholder="# of MPDs"
              name={'numMPD'}
              onChangeText={value => {
                setValue('numMPD', value);
              }}
              value={watch('numMPD')}
            />
            {errors?.numMPD && (
              <Text style={styles.error}>{errors?.numMPD?.message}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="# of Diesel Hoses"
              name={'numAutoDieselHose'}
              onChangeText={value => {
                setValue('numAutoDieselHose', value);
              }}
              value={watch('numAutoDieselHose')}
            />
            {errors?.numAutoDieselHose && (
              <Text style={styles.error}>
                {errors?.numAutoDieselHose?.message}
              </Text>
            )}

            <TextInput
              style={styles.input}
              name={'numCarWash'}
              onChangeText={value => {
                setValue('numCarWash', value);
              }}
              value={watch('numCarWash')}
              keyboardType="numeric"
              placeholder="# of Car Wash"
            />
            {errors?.numCarWash && (
              <Text style={styles.error}>{errors.numCarWash?.message}</Text>
            )}

            <Text>Attached QSR (Quick Service Restaurant)</Text>
            <TextInput
              style={styles.input}
              placeholder="Fast Food Brand"
              name={'qsrBrand'}
              onChangeText={value => {
                setValue('qsrBrand', value);
              }}
              value={watch('qsrBrand')}
            />

            <TextInput
              style={styles.input}
              placeholder="Size in sq. ft"
              keyboardType="numeric"
              name={'qsrSize'}
              onChangeText={value => {
                setValue('qsrSize', value);
              }}
              value={watch('qsrSize')}
            />

            <Text>Attached Retail Tenant</Text>
            <TextInput
              style={styles.input}
              name={'retailTenantType'}
              onChangeText={value => {
                setValue('retailTenantType', value);
              }}
              value={watch('retailTenantType')}
              placeholder="Type"
            />

            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Size in sq. ft"
              name={'retailTenantSize'}
              onChangeText={value => {
                setValue('retailTenantSize', value);
              }}
              value={watch('retailTenantSize')}
            />

            <Text>Store Details</Text>

            <TextInput
              style={styles.input}
              placeholder="Store type"
              name={'storeType'}
              onChangeText={value => {
                setValue('storeType', value);
              }}
              value={watch('storeType')}
            />

            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder={'Store Size'}
              name={'storeSize'}
              onChangeText={value => {
                setValue('storeSize', value);
              }}
              value={watch('storeSize')}
            />

            <TextInput
              style={styles.input}
              placeholder="Num. of freezer doors"
              keyboardType="numeric"
              name={'f_freezer_door'}
              onChangeText={value => {
                setValue('f_freezer_door', value);
              }}
              value={watch('f_freezer_door')}
            />

            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Num. of Cooler doors"
              name={'f_cooler_door'}
              onChangeText={value => {
                setValue('f_cooler_door', value);
              }}
              value={watch('f_cooler_door')}
            />

            <Text>Will you have a beer cave ?</Text>
            <View style={styles.radioContainer}>
              <RadioButton
                label="Yes"
                value="yes"
                checked={watch('f_beer_cave') == 'yes'}
                name={'devType'}
                onChange={val => {
                  setValue('f_beer_cave', val);
                }}
              />
              <RadioButton
                label="No"
                value="no"
                checked={watch('f_beer_cave') == 'no'}
                name={'f_beer_cave'}
                onChange={val => {
                  setValue('f_beer_cave', val);
                }}
              />
            </View>

            <Text>Will this site be 24 hours operation ?</Text>
            <View style={styles.radioContainer}>
              <RadioButton
                label="Yes"
                value="yes"
                checked={watch('f_24H_ops') == 'yes'}
                name={'f_24H_ops'}
                onChange={val => {
                  setValue('f_24H_ops', val);
                }}
              />
              <RadioButton
                label="No"
                checked={watch('f_24H_ops') == 'no'}
                name={'f_24H_ops'}
                onChange={val => {
                  setValue('f_24H_ops', val);
                }}
              />
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
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
  radioContainer: {
    marginTop: 10,
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
});

export default DevelopmentStrategy;
