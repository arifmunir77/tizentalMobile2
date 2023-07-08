import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FocusedStatusBar from "../../components/FocusedStatusBar";
import ProjectType from "./ProjectType";
import SiteLocation from "./SiteLocation";
import SiteDetails from "./SiteDetails";
import DevelopmentStrategy from "./DevelopmentStrategy";
import GenerateReport from "./GenerateReport";

import SiteImages from "./SiteImages";
import Leads from "./Leads";
import Units from "./Units";
import Neighbourhood from "./Neighbourhood";
import BuildingDetails from "./BuildingDetails";
import ExtraIncome from "./ExtraIncome";
import OperatingExpense from "./OperatingExpense";

const ResidentialWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const RenderStepContent = () => {
    return (
      currentStep === 1 ? <Text  style={styles.stepActiveText}>1: Project Type</Text> :
      currentStep === 2 ? <Text  style={styles.stepActiveText}>Step 2: Site Location</Text> :
      currentStep === 3 ? <Text  style={styles.stepActiveText}>Step 3: Unitss</Text> :
      currentStep === 4 ? <Text  style={styles.stepActiveText}>Step 4: Neighborhood</Text> :
      currentStep === 5 ? <Text  style={styles.stepActiveText}>Step 5: Building Details</Text> :
      currentStep === 6 ? <Text  style={styles.stepActiveText}>Step 6: Extra Income</Text> :
      currentStep === 7 ? <Text  style={styles.stepActiveText}>Step 7: Operating Expenses</Text> :
      currentStep === 8 ? <Text  style={styles.stepActiveText}>Step 8: Generate Report</Text> :
      null
    );
  };
  

  console.log("currentStep", currentStep);

  return (
    <View style={styles.container}>
      <FocusedStatusBar />
     
      <View style={styles.stepperMainContainer}>
        <View style={styles.stepperContainer}>
          <View
            style={[
              styles.step,
              currentStep === 1 ? styles.stepActive : styles.stepCompleted,
            ]}
          >
            <Text style={styles.stepText}>1</Text>
          </View>
          <View
            style={[
              styles.step,
              currentStep === 2
                ? styles.stepActive
                : currentStep > 2
                ? styles.stepCompleted
                : styles.stepInactive,
            ]}
          >
            <Text style={styles.stepText}>2</Text>
          </View>
          <View
            style={[
              styles.step,
              currentStep === 3
                ? styles.stepActive
                : currentStep > 3
                ? styles.stepCompleted
                : styles.stepInactive,
            ]}
          >
            <Text style={styles.stepText}>3</Text>
          </View>
          <View
            style={[
              styles.step,
              currentStep === 4
                ? styles.stepActive
                : currentStep > 4
                ? styles.stepCompleted
                : styles.stepInactive,
            ]}
          >
            <Text style={styles.stepText}>4</Text>
          </View>
          <View
            style={[
              styles.step,
              currentStep === 5
                ? styles.stepActive
                : currentStep > 5
                ? styles.stepCompleted
                : styles.stepInactive,
            ]}
          >
            <Text style={styles.stepText}>5</Text>
          </View>
          <View
            style={[
              styles.step,
              currentStep === 6
                ? styles.stepActive
                : currentStep > 6
                ? styles.stepCompleted
                : styles.stepInactive,
            ]}
          >
            <Text style={styles.stepText}>6</Text>
          </View>
          <View
          style={[
            styles.step,
            currentStep === 7
              ? styles.stepActive
              : currentStep > 7
              ? styles.stepCompleted
              : styles.stepInactive,
          ]}
          >
            <Text style={styles.stepText}>7</Text>
          </View>
          <View
            style={[
              styles.step,
              currentStep === 8 ? styles.stepActive : styles.stepInactive,
            ]}
          >
            <Text style={styles.stepText}>8</Text>
          </View>
        </View>

        <View style={styles.stepMain}>
         <RenderStepContent/>
        </View>
      </View>

      <View style={styles.stepContentContainer}>
        {currentStep == 1 && (
          <ProjectType
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep == 2 && (
          <SiteLocation
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep == 3 && (
          <Units 
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep == 4 && (
          <Neighbourhood
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep == 5 && (
          <BuildingDetails
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep == 6 && (
          <ExtraIncome currentStep={currentStep} setCurrentStep={setCurrentStep} />
        )}


        {currentStep == 7 && (
          <OperatingExpense
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}
         {currentStep == 8 && (
          <GenerateReport
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 2,
    paddingBottom: 15,
  },
  stepperMainContainer: {
    backgroundColor: "#327eef",
  },
  stepperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

    padding: 15,
  },
  stepActiveText: {
    color: "white",
    fontSize: 16,
    // fontWeight: 600,
    textAlign: "center",
    marginBottom: 15,
  },
  step: {
    alignItems: "center",
    justifyContent: "center",
    width: 43,
    height: 43,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "white",
  },
  stepActive: {
    backgroundColor: "#FF9900",
  },
  stepCompleted: {
    backgroundColor: "#57C203",
  },
  stepInactive: {
    backgroundColor: "transparent",
  },

  stepText: {
    color: "white",
    fontSize: 18,
    // fontWeight: "bold",
  },
  stepLabelText: {
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
  stepContentContainer: {
    flex: 1,
    // alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  prevButton: {
    width: 100,
    height: 40,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  nextButton: {
    width: 100,
    height: 40,
    backgroundColor: "#0080ff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    // fontWeight: "bold",
  },
});

export default ResidentialWizard;
