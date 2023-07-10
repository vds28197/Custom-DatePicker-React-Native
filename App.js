import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

const App = () => {
  const [selectedDate, setSelectedDate] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.selectedDateView}>
        <View>
          <Text style={styles.selectedDateTextStyle}>{selectedDate ? selectedDate : 'Select Date'}</Text>
        </View>
        <TouchableOpacity>
          <FeatherIcon name="chevron-down" size={24} color={'#F5F5F5'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ADAFB3',
  },
  selectedDateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#191919",
    width: '90%',
    alignSelf: 'center',
    height: 65,
    borderRadius: 15,
    borderWidth: 1,
    elevation: 3,
    alignItems: 'center',
    padding: 15,
  },
  selectedDateTextStyle: {
    color: '#FFFFFF',
    fontSize: 20
  }
});
