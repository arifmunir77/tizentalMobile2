import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RadioButton from '../../components/RadioButton';
import {TouchableOpacity} from 'react-native';
import {useForm} from 'react-hook-form';
import {mergeObjs} from '../../utils/ObjectUtils';
import {useAppState} from '../../hooks/useAppState';

const ProjectType = ({currentStep, setCurrentStep}) => {
  const [stepValues, setStepValues] = useAppState();

  console.log('stepVa', stepValues);

  const {register, setError, handleSubmit, formState, watch, reset, setValue} =
    useForm({
      defaultValues: mergeObjs(stepValues, {
        projType: 'projection',
        devType: 'new',
      }),
      mode: 'onSubmit',
    });
  const {errors} = formState;

  const handleServiceChange = value => {
    setValue('projType', value);
  };

  const handleDevelopmentTypeChange = value => {
    setValue('devType', value);
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const submit = data => {
    console.log('formData', data);

    setStepValues({...stepValues, ...data});
    setCurrentStep(currentStep + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Project Type</Text>

      <View style={styles.section}>
        <Text>
          The wizard guides you step by step based on the selected "Commercial"
          project type, providing a summary of your selections and progress.
        </Text>

        <Text style={styles.sectionDescription}>
          The app summarizes your progress and selections as you navigate
          through the wizard for the "Commercial" project type
        </Text>

        <Text style={styles.sectionTitle}>Services</Text>

        <RadioButton
          label="Valuation"
          value="valuation"
          name="projType"
          checked={watch('projType') == 'valuation'}
          onChange={handleServiceChange}
        />
        <RadioButton
          label="Projection"
          value="projection"
          name="projType"
          checked={watch('projType') == 'projection'}
          onChange={handleServiceChange}
        />
        <RadioButton
          label="Projection and Valuation"
          value="projectval"
          name="projType"
          checked={watch('projType') == 'projectval'}
          onChange={handleServiceChange}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Development Type</Text>
        <RadioButton
          label="New Site Development"
          value="new"
          checked={watch('devType') == 'new'}
          name={'devType'}
          onChange={handleDevelopmentTypeChange}
        />
        <RadioButton
          label="Existing Site Development"
          value="existing"
          checked={watch('devType') == 'existing'}
          onChange={handleDevelopmentTypeChange}
          name={'devType'}
        />
      </View>

      <View style={styles.buttonContainer}>
        {currentStep > 1 && (
          <TouchableOpacity style={styles.prevButton} onPress={handlePrevStep}>
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionDescription: {
    marginBottom: 10,
    marginTop: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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
});

export default ProjectType;
