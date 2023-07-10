import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Modal} from 'native-base';

const DatePickerModal = ({showModal, onClose}) => {
  return (
    <Modal isOpen={showModal} onClose={onClose}>
      <Modal.Content style={{width: '95%', height: 'auto'}}>
        <Modal.Header>
          <Text>Hello1</Text>
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

const styles = StyleSheet.create({});
