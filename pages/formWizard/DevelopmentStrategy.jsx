import React, {useEffect, useState} from 'react';
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
import {BASE_URL} from '@env';

import {SelectList} from 'react-native-dropdown-select-list';
import axios from 'axios';

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

  const [projectTemplate, setProjectTemplate] = useState(null);
  console.log('projectTemplate', projectTemplate);

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

    const selectedData = projectTemplate?.find(
      item => item.template_name == selected,
    );
    console.log('selectedData', selectedData);

    if (selectedData == undefined) return;
    setValue('gasBrandConsideration', selectedData.gasBrandConsideration);
    setValue('numMPD', selectedData.numMPD);
    setValue('numAutoDieselHose', selectedData.numAutoDieselHose);
    console.log(
      "selectedData?.num_car_wash == ''",
      selectedData?.num_car_wash == '',
    );
    if (
      selectedData?.num_car_wash == '' ||
      selectedData?.num_car_wash == undefined
    ) {
      setValue('numCarWash', 0);
    } else {
      setValue('numCarWash', selectedData.num_car_wash);
    }

    setValue('qsrBrand', selectedData.qsrBrand);
    setValue('qsrSize', selectedData.qsrSize);
    setValue('retailTenantType', selectedData.retailTenantType);
    setValue('retailTenantSize', selectedData.retailTenantSize);
    setValue('store_type', selectedData.store_type);
    setValue('storeSize', selectedData.storeSize);
    setValue('f_freezer_door', selectedData.f_freezer_door);
    setValue('f_cooler_door', selectedData.f_cooler_door);
    setValue('f_beer_cave', selectedData.f_beer_cave);
    setValue('f_24H_ops', selectedData.f_24H_ops);
  };

  useEffect(() => {
    const getSelectedViewProject = async () => {
      let response = await axios.get(`${BASE_URL}viewProjectTemplate/`);
      setProjectTemplate(response.data);
    };
    getSelectedViewProject();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Development Strategy</Text>
          <View>
            <Text style={{marginBottom: 10}}>
              Please select proposed development strategy
            </Text>

            <SelectList
              setSelected={val => selectedViewProjectTemplate(val)}
              data={projectTemplate?.map(item => ({
                value: item.template_name,
                label: item.template_name,
              }))}
              save="value"
              boxStyles={{
                borderRadius: 0,
                borderColor: '#ccc',
              }}
            />

            <Text style={{marginTop: 10, marginBottom: 10}}>
              Please make your selection
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Gas Brand"
              name={'gasBrandConsideration'}
              onChangeText={value => {
                setValue('gasBrandConsideration', value);
              }}
              keyboardType="numeric"
              value={watch('gasBrandConsideration')?.toString()}
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
              keyboardType="numeric"
              value={watch('numMPD')?.toString()}
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
              keyboardType="numeric"
              value={watch('numAutoDieselHose')?.toString()}
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
              value={watch('numCarWash')?.toString()}
              keyboardType="numeric"
              placeholder="# of Car Wash"
            />
            {errors?.numCarWash && (
              <Text style={styles.error}>{errors.numCarWash?.message}</Text>
            )}

            <Text style={{marginTop: 10, marginBottom: 10}}>
              Attached QSR (Quick Service Restaurant)
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Fast Food Brand"
              name={'qsrBrand'}
              onChangeText={value => {
                setValue('qsrBrand', value);
              }}
              value={watch('qsrBrand')?.toString()}
            />

            <TextInput
              style={styles.input}
              placeholder="Size in sq. ft"
              keyboardType="numeric"
              name={'qsrSize'}
              onChangeText={value => {
                setValue('qsrSize', value);
              }}
              value={watch('qsrSize')?.toString()}
            />

            <Text style={{marginTop: 10, marginBottom: 10}}>
              Attached Retail Tenant
            </Text>
            <TextInput
              style={styles.input}
              name={'retailTenantType'}
              onChangeText={value => {
                setValue('retailTenantType', value);
              }}
              value={watch('retailTenantType')?.toString()}
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
              value={watch('retailTenantSize')?.toString()}
            />

            <Text style={{marginTop: 10, marginBottom: 10}}>Store Details</Text>

            <TextInput
              style={styles.input}
              placeholder="Store type"
              name={'storeType'}
              onChangeText={value => {
                setValue('storeType', value);
              }}
              value={watch('storeType')?.toString()}
            />

            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder={'Store Size'}
              name={'storeSize'}
              onChangeText={value => {
                setValue('storeSize', value);
              }}
              value={watch('storeSize')?.toString()}
            />

            <TextInput
              style={styles.input}
              placeholder="Num. of freezer doors"
              keyboardType="numeric"
              name={'f_freezer_door'}
              onChangeText={value => {
                setValue('f_freezer_door', value);
              }}
              value={watch('f_freezer_door')?.toString()}
            />

            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Num. of Cooler doors"
              name={'f_cooler_door'}
              onChangeText={value => {
                setValue('f_cooler_door', value);
              }}
              value={watch('f_cooler_door')?.toString()}
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
  selectStates: {
    borderRadius: 10,
  },
});

export default DevelopmentStrategy;
