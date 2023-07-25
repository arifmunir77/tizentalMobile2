import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Pdf from 'react-native-pdf';

import {useAppState} from '../../hooks/useAppState';

const ReportView = () => {
  const [stepValues, setStepValues] = useAppState();

  let pdfUrl = "https://tezintel.com" + stepValues?.reportPath;

  console.log('pftdd', pdfUrl);

  if (!pdfUrl) {
    return (
      <View style={styles.container}>
        <Text>No PDF URL available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Pdf
       trustAllCerts={false}
        source={{uri: pdfUrl, cache: true}}
        style={styles.pdf}
        onError={error => console.log('Error while loading PDF: ', error)}
      />
    </View>
  );
};

export default ReportView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width: '100%',
  },
});
