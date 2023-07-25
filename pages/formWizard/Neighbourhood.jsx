import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CheckBox from '@react-native-community/checkbox';

import StepsComponent from "../../components/StepsComponent";
import { useState } from "react";
const Neighbourhood = ({ currentStep, setCurrentStep }) => {
  const handlePrevStep = (unit) => {
    setCurrentStep(currentStep - 1);
  };

  const handleNextStep = (unit) => {
    setCurrentStep(currentStep + 1);
  };

  const [checked, setChecked] = useState(false);
  
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Neighbourhood</Text>

        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkbox}
            value={checked}
            onValueChange={setChecked}
          />
          <Text style={styles.checkboxLabel}>
            Location has noise from heavy road traffic, airport, or other source
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkbox}
            value={checked}
            onValueChange={setChecked}
          />
          <Text style={styles.checkboxLabel}>Quiet neighborhood</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkbox}
            value={checked}
            onValueChange={setChecked}
          />
          <Text style={styles.checkboxLabel}>
            Nearby properties are well maintained
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkbox}
            value={checked}
            onValueChange={setChecked}
          />
          <Text style={styles.checkboxLabel}>
            Neighborhood has luxury houses, golf course, beach, other high-end
            features
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkbox}
            value={checked}
            onValueChange={setChecked}
          />
          <Text style={styles.checkboxLabel}>
            Neighborhood has boarded-up houses, vacant buildings
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkbox}
            value={checked}
            onValueChange={setChecked}
          />
          <Text style={styles.checkboxLabel}>
            Nearby properties are in disrepair
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkbox}
            value={checked}
            onValueChange={setChecked}
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
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default Neighbourhood;
