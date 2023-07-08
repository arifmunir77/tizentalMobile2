import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const StepsComponent = ({ currentStep, handlePrevStep, handleNextStep }) => {
  return (
    <View style={styles.buttonContainer}>
      {currentStep > 1 && (
        <TouchableOpacity style={styles.prevButton} onPress={handlePrevStep}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
      )}

      {currentStep < 8 && (
        <TouchableOpacity style={styles.nextButton} onPress={handleNextStep}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
 
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
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
});

export default StepsComponent;
