import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Modal} from 'native-base';
import MIcon from 'react-native-vector-icons/MaterialIcons';

const monthsName = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const DatePickerModal = ({showModal, onClose}) => {
  const [getCurrentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [month, setMonth] = useState(getCurrentMonth);

  const [getCurrentDate, setCurrentDate] = useState(new Date().getDate());
  const [getUserSelectedDate, setUserSelectedDate] = useState(getCurrentDate);

  return (
    <Modal isOpen={showModal} onClose={onClose}>
      <Modal.Content style={styles.modalContainer}>
        <Modal.Header style={styles.headerWrapper}>
          <Text style={styles.headerContent}>Date - Picker</Text>
        </Modal.Header>
        <Modal.Body style={styles.bodyContainer}>
          <View style={styles.bodyHeaderContent}>
            <TouchableOpacity
              onPress={() => setMonth(month - 1)}
              disabled={month == getCurrentMonth}>
              <MIcon name="keyboard-arrow-left" size={30} color={'#FFFFFF'} />
            </TouchableOpacity>
            <Text style={styles.monthNameTextStyle}>{monthsName[month]}</Text>
            <TouchableOpacity
              onPress={() => setMonth(month + 1)}
              disabled={month == 11}>
              <MIcon name="keyboard-arrow-right" size={30} color={'#FFFFFF'} />
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              {weekDays.map(day => {
                return (
                  <View key={day} style={styles.weekLabel}>
                    <Text style={{color: '#ffffff'}}>{day}</Text>
                  </View>
                );
              })}
            </View>
          </View>
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
  bodyContainer: {
    backgroundColor: '#191919',
  },
  bodyHeaderContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  monthNameTextStyle: {
    letterSpacing: 1,
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  weekLabel: {
    flex: 1,
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
  },
});
