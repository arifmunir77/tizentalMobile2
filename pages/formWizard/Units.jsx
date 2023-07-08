import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";
import RadioButton from "../../components/RadioButton";
 
import StepsComponent from "../../components/StepsComponent";

const Units = ({ currentStep, setCurrentStep }) => {
  const [textType, setTextType] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("");

  const handleUnitSelection = (unit) => {
    setSelectedUnit(unit);
  };

  const handlePrevStep = (unit) => {
    setCurrentStep(currentStep - 1);
  };

  const handleNextStep = (unit) => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Type of unit:</Text>
        <View>
          <RadioButton
            label="Single-family unit"
            value="Single-family unit"
            //   checked={selectedDevelopmentType === "New Site Development"}
            //   onChange={handleDevelopmentTypeChange}
          />
          <RadioButton
            label="Multi-family unit"
            value="Multi-family unit"
            //   checked={selectedDevelopmentType === "Existing Site Development"}
            //   onChange={handleDevelopmentTypeChange}
          />
        </View>
        <View style={styles.mainStudioContainer}>
          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/bed.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Studios</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="N"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Per month"
              keyboardType="numeric"
            />
          </View>
          <View>
            <TextInput
              style={styles.input2}
              placeholder="Total square foot"
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.mainStudioContainer}>
          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/bed.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>1-bedrooms</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="N"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Per month"
              keyboardType="numeric"
            />
          </View>
          <View>
            <TextInput
              style={styles.input2}
              placeholder="Total square foot"
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.mainStudioContainer}>
          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/studio.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>2-bedrooms</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="N"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Per month"
              keyboardType="numeric"
            />
          </View>
          <View>
            <TextInput
              style={styles.input2}
              placeholder="Total square foot"
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.mainStudioContainer}>
          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/bed.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>3-bedrooms</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="N"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Per month"
              keyboardType="numeric"
            />
          </View>
          <View>
            <TextInput
              style={styles.input2}
              placeholder="Total square foot"
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Enter the number of units of each type and the Market Rent that one
            of these units would get per month. (Market Rent is the rent the
            landlord could get if the units were rented today to new tenants.)
          </Text>

          <Text style={styles.text}>
            Enter the average rent for each type. (For instance, if there are
            two one-bedrooms and they could get $1,000 and $1,400 because one is
            better than the other, enter the average, $1,200, as the one-bedroom
            Market Rent.)
          </Text>
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
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    width: "50%",
  },
  input2: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    width: "101%",
  },
  mainStudioContainer: {
    padding: 20,
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
    flexDirection: "row",
    gap: 3,
  },
  radioGroup: {
    flexDirection: "row",
    marginBottom: 10,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  radioButtonText: {
    fontSize: 16,
  },
  radioButtonSelected: {
    backgroundColor: "#ccc",
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  legendContainer: {
    alignItems: "center",
    display: "flex",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  legendImage: {
    marginTop: 20,
  },
});

export default Units;
