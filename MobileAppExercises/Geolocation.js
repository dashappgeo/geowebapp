import React, { useState } from 'react';
import { ScrollView,View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location'; // Ensure you have expo-location installed

const DataField = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState();

  // Function to handle the form submission
  const handleSubmit = () => {
    // You can perform any action with the collected data here
    console.log('Collected data:', name);
    console.log('Coordinates:', location);
    // Add additional logic for storing or processing the data as needed
  };

  // Function to get the device coordinates
  const getCoordinates = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied.');
      return;
    }

    try {
      let location = await Location.getCurrentPositionAsync({});
      console.log(location)
      setLocation(location.coords);
    } catch (error) {
      console.error('Error fetching location:', error);
      Alert.alert('Error fetching location.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Enter your name"
      />
      <Button title="Get Coordinates" onPress={getCoordinates} />
      <Text>
        Latitude:{location&&location.latitude}
        Longitude: {location&&location.longitude}
      </Text>
      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
});

export default DataField;
