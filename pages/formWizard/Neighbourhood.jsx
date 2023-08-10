import {View, Text, StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import CheckBox from '@react-native-community/checkbox';

import StepsComponent from '../../components/StepsComponent';
import {useState} from 'react';
import {useAppState} from '../../hooks/useAppState';
const Neighbourhood = ({currentStep, setCurrentStep}) => {
  const [stepValues, setStepValues] = useAppState();

  const [neighborhood_conditions, set_neighborhood_conditions] = useState([]);

  const handlePrevStep = unit => {
    setCurrentStep(currentStep - 1);
  };

  const handleNextStep = unit => {
    setStepValues({...stepValues, neighborhood_conditions});
    setCurrentStep(currentStep + 1);
  };

  useEffect(() => {
    if (stepValues?.neighborhood_conditions) {
      set_neighborhood_conditions(stepValues?.neighborhood_conditions);
    }
  }, [stepValues]);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Neighbourhood</Text>

        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkbox}
            onValueChange={checked => {
              if (checked) {
                set_neighborhood_conditions([
                  ...neighborhood_conditions,
                  'heavyNoiseNeighborhood',
                ]);
              } else {
                set_neighborhood_conditions(
                  neighborhood_conditions.filter(
                    item => item !== 'heavyNoiseNeighborhood',
                  ),
                );
              }
            }}
            value={neighborhood_conditions?.includes('heavyNoiseNeighborhood')}
          />
          <Text style={styles.checkboxLabel}>
            Location has noise from heavy road traffic, airport, or other source
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkbox}
            onValueChange={checked => {
              if (checked) {
                set_neighborhood_conditions([
                  ...neighborhood_conditions,
                  'quietNeighborhood',
                ]);
              } else {
                set_neighborhood_conditions(
                  neighborhood_conditions.filter(
                    item => item !== 'quietNeighborhood',
                  ),
                );
              }
            }}
            value={neighborhood_conditions?.includes('quietNeighborhood')}
          />
          <Text style={styles.checkboxLabel}>Quiet neighborhood</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkbox}
            onValueChange={checked => {
              if (checked) {
                set_neighborhood_conditions([
                  ...neighborhood_conditions,
                  'nearbyPropertyWellMaintained',
                ]);
              } else {
                set_neighborhood_conditions(
                  neighborhood_conditions.filter(
                    item => item !== 'nearbyPropertyWellMaintained',
                  ),
                );
              }
            }}
            value={neighborhood_conditions?.includes(
              'nearbyPropertyWellMaintained',
            )}
          />
          <Text style={styles.checkboxLabel}>
            Nearby properties are well maintained
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkbox}
            onValueChange={checked => {
              if (checked) {
                set_neighborhood_conditions([
                  ...neighborhood_conditions,
                  'luxuryNeighborhood',
                ]);
              } else {
                set_neighborhood_conditions(
                  neighborhood_conditions.filter(
                    item => item !== 'luxuryNeighborhood',
                  ),
                );
              }
            }}
            value={neighborhood_conditions?.includes('luxuryNeighborhood')}
          />
          <Text style={styles.checkboxLabel}>
            Neighborhood has luxury houses, golf course, beach, other high-end
            features
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkbox}
            onValueChange={checked => {
              if (checked) {
                set_neighborhood_conditions([
                  ...neighborhood_conditions,
                  'boardedUpNeighborhood',
                ]);
              } else {
                set_neighborhood_conditions(
                  neighborhood_conditions.filter(
                    item => item !== 'boardedUpNeighborhood',
                  ),
                );
              }
            }}
            value={neighborhood_conditions?.includes('boardedUpNeighborhood')}
          />
          <Text style={styles.checkboxLabel}>
            Neighborhood has boarded-up houses, vacant buildings
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkbox}
            onValueChange={checked => {
              if (checked) {
                set_neighborhood_conditions([
                  ...neighborhood_conditions,
                  'disrepairNeighborhood',
                ]);
              } else {
                set_neighborhood_conditions(
                  neighborhood_conditions.filter(
                    item => item !== 'disrepairNeighborhood',
                  ),
                );
              }
            }}
            value={neighborhood_conditions?.includes('disrepairNeighborhood')}
          />
          <Text style={styles.checkboxLabel}>
            Nearby properties are in disrepair
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkbox}
            onValueChange={checked => {
              if (checked) {
                set_neighborhood_conditions([
                  ...neighborhood_conditions,
                  'averageNeighborhood',
                ]);
              } else {
                set_neighborhood_conditions(
                  neighborhood_conditions.filter(
                    item => item !== 'averageNeighborhood',
                  ),
                );
              }
            }}
            value={neighborhood_conditions?.includes('averageNeighborhood')}
          />
          <Text style={styles.checkboxLabel}>Average neighborhood</Text>
        </View>
      </View>

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
  title: {
    fontSize: 20,
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
  checkbox:{
  width:
20,
height:20}
});

export default Neighbourhood;
