import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import StepsComponent from "../../components/StepsComponent";
import { TextInput } from "react-native";
 
import { useState } from "react";
 

import CheckBox from '@react-native-community/checkbox';


const ExtraIncome = ({ currentStep, setCurrentStep }) => {
  const handlePrevStep = (unit) => {
    setCurrentStep(currentStep - 1);
  };

  const handleNextStep = (unit) => {
    setCurrentStep(currentStep + 1);
  };

  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.contianer}>
      <ScrollView>
        <View style={styles.contianer}>
          <Text style={styles.title}>Extra Income</Text>

          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/Laundry.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Laundry</Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="$ per month"
              keyboardType="numeric"
            />
          </View>

          {/* Parking */}

          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/parking.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Parking</Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="$ per month"
              keyboardType="numeric"
            />
          </View>
          {/* Parking */}

          {/* Storage */}

          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/storage.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Storage</Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="$ per month"
              keyboardType="numeric"
            />
          </View>
          {/* Storage */}

          {/* Antennas  */}

          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/antenas.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Antennas </Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="$ per month"
              keyboardType="numeric"
            />
          </View>
          {/* Antenas  */}

          {/* 
Billboards  */}

          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/billboard.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Billboards </Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="$ per month"
              keyboardType="numeric"
            />
          </View>
          {/* Antenas  */}

          {/* 
Other  */}

          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/other.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Other </Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="$ per month"
              keyboardType="numeric"
            />
          </View>
          {/* Other  */}

          <View style={styles.checkboxContainer}>
            <CheckBox
              style={styles.checkbox}
              value={checked}
              onValueChange={setChecked}
            />
            <Text style={styles.checkboxLabel}>
              Tenants pay their own electric bills
            </Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              style={styles.checkbox}
              value={checked}
              onValueChange={setChecked}
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
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    width: "101%",
  },
  legendContainer: {
    alignItems: "center",
    display: "flex",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 25,
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

export default ExtraIncome;
