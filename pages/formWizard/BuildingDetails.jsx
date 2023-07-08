import { View, Text, StyleSheet, Image ,ScrollView } from "react-native";
import React from "react";
import StepsComponent from "../../components/StepsComponent";
import RadioButton from "../../components/RadioButton";
import { useState } from "react";
 
import CheckBox from '@react-native-community/checkbox';


const BuildingDetails = ({ currentStep, setCurrentStep }) => {
  const handlePrevStep = (unit) => {
    setCurrentStep(currentStep - 1);
  };

  const handleNextStep = (unit) => {
    setCurrentStep(currentStep + 1);
  };

  const [retailUnit, setRetailUnit] = useState("");

  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Building Details</Text>
          <Text style={styles.description}>
            {" "}
            Check off any that apply about the building
          </Text>

          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/carbon_building.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Building Quality</Text>
          </View>
          <View>
            <View style={styles.radioContainer}>
              <RadioButton
                label="Low"
                value="low"
                checked={retailUnit === "low"}
                onChange={(value) => {
                  // console.log("value", value);
                  setRetailUnit(value);
                }}
              />
              <RadioButton
                label="Average"
                value="average"
                checked={retailUnit === "average"}
                onChange={(value) => {
                  setRetailUnit(value);
                }}
              />
              <RadioButton
                label="High"
                value="high"
                checked={retailUnit === "high"}
                onChange={(value) => {
                  setRetailUnit(value);
                }}
              />
            </View>
          </View>

          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/roof.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Roof</Text>
          </View>
          <View>
            <View style={styles.radioContainer}>
              <RadioButton
                label="Gable Roof"
                value="gable Roof"
                checked={retailUnit === "gable Roof"}
                onChange={(value) => {
                  // console.log("value", value);
                  setRetailUnit(value);
                }}
              />
              <RadioButton
                label="Flat Roof"
                value="flat roof"
                checked={retailUnit === "flat roof"}
                onChange={(value) => {
                  setRetailUnit(value);
                }}
              />
            </View>
          </View>

          {/* Kitchen */}

          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/kitchen.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Kitchen</Text>
          </View>
          <View>
            <View style={styles.radioContainer}>
              <RadioButton
                label="Older"
                value="older"
                checked={retailUnit === "older"}
                onChange={(value) => {
                  // console.log("value", value);
                  setRetailUnit(value);
                }}
              />
              <RadioButton
                label="Average"
                value="average"
                checked={retailUnit === "average"}
                onChange={(value) => {
                  setRetailUnit(value);
                }}
              />
              <RadioButton
                label="High End"
                value="high end"
                checked={retailUnit === "high end"}
                onChange={(value) => {
                  setRetailUnit(value);
                }}
              />
            </View>
          </View>

          {/* Kitchen */}

          {/* Bathrooms */}

          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/bathroom.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Bathrooms</Text>
          </View>
          <View>
            <View style={styles.radioContainer}>
              <RadioButton
                label="Older"
                value="older"
                checked={retailUnit === "older"}
                onChange={(value) => {
                  // console.log("value", value);
                  setRetailUnit(value);
                }}
              />
              <RadioButton
                label="Average"
                value="average"
                checked={retailUnit === "average"}
                onChange={(value) => {
                  setRetailUnit(value);
                }}
              />
              <RadioButton
                label="High End"
                value="high end"
                checked={retailUnit === "high end"}
                onChange={(value) => {
                  setRetailUnit(value);
                }}
              />
            </View>
          </View>

          {/* Bathrooms */}

          {/* Air Conditoning */}

          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/air-conditioning.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}> Air Conditoning</Text>
          </View>
          <View>
            <View style={styles.radioAirContainer}>
              <RadioButton
                label="Non Air Conditioning"
                value="Non Air Conditioning"
                checked={retailUnit === "Non Air Conditioning"}
                onChange={(value) => {
                  // console.log("value", value);
                  setRetailUnit(value);
                }}
              />
              <RadioButton
                label="Window Unts"
                value="Window Unts"
                checked={retailUnit === "Window Unts"}
                onChange={(value) => {
                  setRetailUnit(value);
                }}
              />
              <RadioButton
                label="Through-wall condtitioners"
                value="Through-wall condtitioners"
                checked={retailUnit === "Through-wall condtitioners"}
                onChange={(value) => {
                  setRetailUnit(value);
                }}
              />
              <RadioButton
                label="Central air condtitioners"
                value="Central air condtitioners"
                checked={retailUnit === "Central air condtitioners"}
                onChange={(value) => {
                  setRetailUnit(value);
                }}
              />
            </View>
          </View>

          {/*  Air Conditoning */}

          {/* Exterior */}

          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/exterior.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}> Exterior</Text>
          </View>
          <View>
            <View style={styles.radioAirContainer}>
              <RadioButton
                label="Brick Exterior"
                value="Brick Exterior"
                checked={retailUnit === "Brick Exterior"}
                onChange={(value) => {
                  // console.log("value", value);
                  setRetailUnit(value);
                }}
              />
              <RadioButton
                label="Wood Exterior"
                value="Wood Exterior"
                checked={retailUnit === "Wood Exterior"}
                onChange={(value) => {
                  setRetailUnit(value);
                }}
              />
              <RadioButton
                label="Vinyl or aluminum exterior"
                value="Vinyl or aluminum exterior"
                checked={retailUnit === "Vinyl or aluminum exterior"}
                onChange={(value) => {
                  setRetailUnit(value);
                }}
              />
              <RadioButton
                label="Asbestos shingle exterior"
                value="Asbestos shingle exterior"
                checked={retailUnit === "Asbestos shingle exterior"}
                onChange={(value) => {
                  setRetailUnit(value);
                }}
              />
            </View>
          </View>

          {/*  Exterior */}

          {/* Parking */}

          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/parking.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}> Parking</Text>
          </View>
          <View>
            <View style={styles.radioAirContainer}>
              <RadioButton
                label="No parking on-site"
                value="No parking on-site"
                checked={retailUnit === "No parking on-site"}
                onChange={(value) => {
                  // console.log("value", value);
                  setRetailUnit(value);
                }}
              />
              <RadioButton
                label="Limited parking on-site"
                value="Limited parking on-site"
                checked={retailUnit === "Limited parking on-site"}
                onChange={(value) => {
                  setRetailUnit(value);
                }}
              />
              <RadioButton
                label="About one space per unit on site"
                value="About one space per unit on site"
                checked={retailUnit === "About one space per unit on site"}
                onChange={(value) => {
                  setRetailUnit(value);
                }}
              />
              <RadioButton
                label="More than one space per bedroom on site"
                value="More than one space per bedroom on site"
                checked={
                  retailUnit === "More than one space per bedroom on site"
                }
                onChange={(value) => {
                  setRetailUnit(value);
                }}
              />
            </View>
          </View>

          <View style={styles.checkboxContainer}>
            <CheckBox
              style={styles.checkbox}
              value={checked}
              onValueChange={setChecked}
            />
            <Text style={styles.checkboxLabel}>
              Overnight street parking is available
            </Text>
          </View>

          {/*  Parking */}

          {/* Parking */}

          <View style={styles.legendContainer}>
            <Image
              source={require("../../assets/images/carbon_building.png")}
              style={styles.legendImage}
            />
            <Text style={styles.label2}> Other Features</Text>
          </View>
          <View>
            <View style={styles.checkboxContainer}>
              <CheckBox
                style={styles.checkbox}
                value={checked}
                onValueChange={setChecked}
              />
              <Text style={styles.checkboxLabel}>Elevator or elevators</Text>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
                style={styles.checkbox}
                value={checked}
                onValueChange={setChecked}
              />
              <Text style={styles.checkboxLabel}>Indoor pool</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
                style={styles.checkbox}
                value={checked}
                onValueChange={setChecked}
              />
              <Text style={styles.checkboxLabel}>Tennis court or courts</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
                style={styles.checkbox}
                value={checked}
                onValueChange={setChecked}
              />
              <Text style={styles.checkboxLabel}>Roof deck</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
                style={styles.checkbox}
                value={checked}
                onValueChange={setChecked}
              />
              <Text style={styles.checkboxLabel}>Balconies and patios</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
                style={styles.checkbox}
                value={checked}
                onValueChange={setChecked}
              />
              <Text style={styles.checkboxLabel}>
                In-unit laundry facilities
              </Text>
            </View>
          </View>

          <View style={styles.checkboxContainer}>
            <CheckBox
              style={styles.checkbox}
              value={checked}
              onValueChange={setChecked}
            />
            <Text style={styles.checkboxLabel}>
              Overnight street parking is available
            </Text>
          </View>

          <View style={styles.checkboxContainer}>
            <CheckBox
              style={styles.checkbox}
              value={checked}
              onValueChange={setChecked}
            />
            <Text style={styles.checkboxLabel}>Storage cubicles</Text>
          </View>

          <View style={styles.checkboxContainer}>
            <CheckBox
              style={styles.checkbox}
              value={checked}
              onValueChange={setChecked}
            />
            <Text style={styles.checkboxLabel}>Laundry room</Text>
          </View>

          {/*  Features */}
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
  },
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 20,
    // fontWeight: 600,
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    // fontWeight: 600,
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
  label2: {
    fontSize: 16,
    // fontWeight: "bold",
     textAlign: "center",
  },
  legendImage: {
    // marginTop: 20,
  },
  radioContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
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

export default BuildingDetails;
