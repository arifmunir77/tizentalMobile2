import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';

const GenerateReport = ({currentStep, setCurrentStep}) => {
  console.log('genee', 3222);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.reportTitle}>Generate Report</Text>
        <Image
          style={styles.reportImg}
          source={require("../../assets/images/project-type.png")}
        />
        <Text style={styles.priceValue}>Estimated Market Value</Text>
        <Text style={styles.priceValue}>$502,018.3</Text>
 
        <Text style={styles.paraText}>
            Thank you for using our evaluation service. We want to remind you
            that the evaluated value you received was based solely on the input
            you provided. Please keep in mind that the actual value may vary due
            to a number of factors beyond our control.
          </Text>

          
          <Text  style={styles.paraText}>
            If you require a more detailed analysis from one of our experts, we
            encourage you to click on the "Generate Full Report" button. Please
            note that generating a report may take 7-8 days, but it will provide
            you with a comprehensive understanding of the factors that affect
            the value, and a more accurate evaluation. Our team of professionals
            is committed to providing you with the most accurate and reliable
            information possible.
          </Text>

          <Text style={styles.paraText} >
            Thank you for using our service, and we hope that we can assist you
            again in the future.
          </Text>
      </ScrollView>

      <View style={styles.buttonContainer}>
        {currentStep > 1 && (
          <TouchableOpacity
            style={styles.prevButton}
            onPress={() => {
              setCurrentStep(currentStep - 1);
            }}
          >
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
        )}

        {currentStep < 7 && (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              setCurrentStep(currentStep + 1);
            }}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}
       
          <TouchableOpacity
            style={styles.nextButton}
           
          >
            <Text style={styles.buttonText}>View Report</Text>
          </TouchableOpacity>
    
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
    fontSize: 20,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
  priceValue: {
    fontSize: 24,
    // fontWeight: 'bold',
    // marginBottom: 20,
    textAlign: 'center',
  },
  textContainer: {
    marginTop: 15,
  },
  text: {
    marginBottom: 10,
    fontSize: 14,
    // fontWeight: 600,
  },
  paraText:{
    marginBottom: 10,
    fontSize: 14,
     
  },
  reportTitle: {
    fontSize: 24,
    // fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  reportImg: {
    alignSelf: 'center',
    marginBottom: 20,
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
    // fontWeight: 'bold',
  },
});

export default GenerateReport;
