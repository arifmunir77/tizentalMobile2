import { StyleSheet, Text, View, Image,ScrollView } from "react-native";
import React from "react";
import StepsComponent from "../../components/StepsComponent";
import { TextInput } from "react-native";
 
import { useState } from "react";
 

const OperatingExpense = ({ currentStep, setCurrentStep }) => {
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
          <Text style={styles.title}>Operating Expense</Text>

          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/real_state.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Real estate tax</Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="$ per annum"
              keyboardType="numeric"
            />
          </View>

          {/* Parking */}

          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/home.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Property Insurance</Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="$ per annum"
              keyboardType="numeric"
            />
          </View>
          {/* Parking */}

          {/* Storage */}

          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/heat-wave.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Heat Bill</Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="$ per annum"
              keyboardType="numeric"
            />
          </View>
          {/* Storage */}

          {/* Antennas  */}

          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/electrical-bill.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Electic Bill </Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="$ per annum"
              keyboardType="numeric"
            />
          </View>
          {/* Antenas  */}

          {/* 
Billboards  */}

          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/water_pumb.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Water and sewer bill </Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="$ per annum"
              keyboardType="numeric"
            />
          </View>
          {/* Antenas  */}

          {/* 
Other  */}

          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/maintenance_repair.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Maintenace and Repairs </Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="$ per annum"
              keyboardType="numeric"
            />
          </View>
          {/* Other  */}

          {/* 
Managmenent cost  */}

          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/reaload.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Management costs</Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="$ per annum"
              keyboardType="numeric"
            />
          </View>
          {/* Managmenent cost  */}

          {/*  User  */}

          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/user.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Administrative costs</Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="$ per annum"
              keyboardType="numeric"
            />
          </View>
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

export default OperatingExpense;
