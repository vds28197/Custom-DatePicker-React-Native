import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Modal} from 'native-base';

const DatePickerModal = ({showModal, onClose}) => {
  return (
    <Modal isOpen={showModal} onClose={onClose}>
      <Modal.Content style={styles.modalContainer}>
        <Modal.Header style={styles.headerWrapper}>
          <Text style={styles.headerContent}>Date - Picker</Text>
        </Modal.Header>
        <Modal.Body>
          <Text>Hello1</Text>
        </Modal.Body>
        <Modal.Footer>
          <Text>Hello1</Text>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default DatePickerModal;

const styles = StyleSheet.create({
  modalContainer: {width: '95%', height: 'auto'},
  headerWrapper: {
    backgroundColor: '#191919',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
