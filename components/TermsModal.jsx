import React, {useState} from 'react';
import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CheckBox from '@react-native-community/checkbox';

const TermsModal = ({visible, onClose, onSubmit}) => {
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();

  const termUser = () => {
    navigation.navigate('User-Agreement');
  };

  //   User-Agreement
  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalHeader}>Terms of Use</Text>
          <Text style={styles.modalText}>
            Before going forward, we require that you read, understand, or agree
            to the Terms of Use.
            <Text style={styles.linkText} onPress={termUser}>
              {' '}
              View Full Terms of Use.
            </Text>
          </Text>
          <View style={styles.checkboxContainer}>
            <CheckBox
              style={styles.checkbox}
              onValueChange={checked => {
                if (checked) {
                  setIsChecked(true);
                } else {
                  setIsChecked(false);
                }
              }}
              value={isChecked}
            />
            <Text style={styles.checkboxLabel}>
              I have read and understand the Terms of Use.
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.button, !isChecked && styles.disabledButton]}
            disabled={!isChecked}
            onPress={onSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 8,
    elevation: 5,
    width: '95%',
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkboxLabel: {
    fontSize: 16,
    marginLeft: 0,
  },

  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  disabledButton: {
    backgroundColor: '#B0B0B0',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  linkText: {
    textDecorationLine: 'underline', // Add underline to the link text
  },
});

export default TermsModal;
