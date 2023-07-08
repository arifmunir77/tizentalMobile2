import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import RadioButton from '../../components/RadioButton';
import {TouchableOpacity} from 'react-native';
import {useAppState} from '../../hooks/useAppState';
import {useForm} from 'react-hook-form';

const Leads = ({currentStep, setCurrentStep}) => {
  const [stepValues, setStepValues] = useAppState();
  const [isLoading, setIsLoading] = useState(false);

  const [leadsDetailsArr, setLeadsDetailsArr] = useState([]);

  

  const {
    register,
    setError,
    handleSubmit,
    formState,
    watch,
    reset,
    setValue,
   
  } = useForm({
    defaultValues: {...stepValues, ...{isSendReport: 'True'}},
    mode: 'onSubmit',
  });

  const handleCheckBoxChange = key => {
    setLeadsDetailsArr(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const submit = data => {
    let req = {...stepValues, ...data, leadsDetailsArr};

    console.log('requess', req);
    setStepValues(req);

     setCurrentStep(currentStep+1)
    let serviceUrl = `/getCommercialReportInput/`;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Leads</Text>
          <Text style={styles.subHeading}>Help/Lead Generation</Text>
          <Text style={styles.description}>
            Do you need help in getting financing, finding the right general
            contractor, broker, appraiser, or any other needs?
          </Text>

          <View>
            <RadioButton
              label="Yes"
              value="yes"
              checked={watch('isLeads') == 'yes'}
              name={'isLeads'}
              onChange={val => {
                setValue('isLeads', val);
              }}
            />
            <RadioButton
              label="No"
              value="no"
              checked={watch('isLeads') == 'no'}
              name={'isLeads'}
              onChange={val => {
                setValue('isLeads', val);
              }}
            />
          </View>

          <Text style={styles.description}>
            We can help you connect with the right organizations faster! We can
            send over your report and have the right organizations or
            individuals contact you directly. Please check off which services
            you need help:
          </Text>

          <View style={styles.CheckBoxContainer}>
            <CheckBox
              onValueChange={checked => {
                if (checked) {
                  setLeadsDetailsArr([...leadsDetailsArr, 'financeProj']);
                } else {
                  setLeadsDetailsArr(
                    leadsDetailsArr.filter(item => item !== 'financeProj'),
                  );
                }
              }}
              value={leadsDetailsArr?.includes('financeProj')}
            />
            <Text style={styles.CheckBoxLabel}>
              {' '}
              Financing/ Funding for the project
            </Text>
          </View>
          <View style={styles.CheckBoxContainer}>
            <CheckBox
              onValueChange={checked => {
                if (checked) {
                  setLeadsDetailsArr([...leadsDetailsArr, 'constBids']);
                } else {
                  setLeadsDetailsArr(
                    leadsDetailsArr.filter(item => item !== 'constBids'),
                  );
                }
              }}
              value={leadsDetailsArr?.includes('constBids')}
            />
            <Text style={styles.CheckBoxLabel}> Construction Bids</Text>
          </View>

          <View style={styles.CheckBoxContainer}>
            <CheckBox
              style={styles.CheckBox}
              onValueChange={checked => {
                if (checked) {
                  setLeadsDetailsArr([...leadsDetailsArr, 'dueDiligence']);
                } else {
                  setLeadsDetailsArr(
                    leadsDetailsArr.filter(item => item !== 'dueDiligence'),
                  );
                }
              }}
              value={leadsDetailsArr?.includes('dueDiligence')}
            />
            <Text style={styles.CheckBoxLabel}>Due Diligence for site</Text>
          </View>

          <View style={styles.CheckBoxContainer}>
            <CheckBox
              style={styles.CheckBox}
              onValueChange={checked => {
                if (checked) {
                  setLeadsDetailsArr([...leadsDetailsArr, 'needAgents']);
                } else {
                  setLeadsDetailsArr(
                    leadsDetailsArr.filter(item => item !== 'needAgents'),
                  );
                }
              }}
              value={leadsDetailsArr?.includes('needAgents')}
            />
            <Text style={styles.CheckBoxLabel}>Need Agents/Brokers</Text>
          </View>

          <View style={styles.CheckBoxContainer}>
            <CheckBox
              style={styles.CheckBox}
              onValueChange={checked => {
                if (checked) {
                  setLeadsDetailsArr([...leadsDetailsArr, 'fuelDistri']);
                } else {
                  setLeadsDetailsArr(
                    leadsDetailsArr.filter(item => item !== 'fuelDistri'),
                  );
                }
              }}
              value={leadsDetailsArr?.includes('fuelDistri')}
            />
            <Text style={styles.CheckBoxLabel}>
              Fuel Distributors/Suppliers
            </Text>
          </View>

          <View style={styles.CheckBoxContainer}>
            <CheckBox
              style={styles.CheckBox}
              onValueChange={checked => {
                if (checked) {
                  setLeadsDetailsArr([...leadsDetailsArr, 'insuranceQuotes']);
                } else {
                  setLeadsDetailsArr(
                    leadsDetailsArr.filter(item => item !== 'insuranceQuotes'),
                  );
                }
              }}
              value={leadsDetailsArr?.includes('insuranceQuotes')}
            />
            <Text style={styles.CheckBoxLabel}>Insurance Quotes</Text>
          </View>

          <Text style={styles.authorizationText}>
            Do you authorize us to send your report to the recommended
            organizations that can help you with your needs?
          </Text>

          <View style={{marginTop: 15}}>
            <RadioButton
              label="Yes"
              value="yes"
              checked={watch('isSendReport') == 'yes'}
              name={'isSendReport'}
              onChange={val => {
                setValue('isSendReport', val);
              }}
            />
            <RadioButton
              label="No"
              value="no"
              checked={watch('isSendReport') == 'no'}
              name={'isSendReport'}
              onChange={val => {
                setValue('isSendReport', val);
              }}
            />
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

const styles = {
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
  CheckBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  CheckBoxLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
  authorizationText: {
    fontSize: 16,
    marginTop: 20,
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
};

export default Leads;
