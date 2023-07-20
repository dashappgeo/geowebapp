import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import * as Location from 'expo-location';
import { Camera } from 'expo-camera';

const DataField = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);

  useEffect(() => {
    // Get the user's permission for location access
    getLocationPermission();
    // Get the user's permission for camera access
    getCameraPermission();
  }, []);

  const getLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied.');
    }
  };

  const getCameraPermission = async () => {
    let { status } = await Camera.requestCameraPermissionsAsync();
    setCameraPermission(status === 'granted');
  };

  const getCoordinates = async () => {
    try {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    } catch (error) {
      console.error('Error fetching location:', error);
      Alert.alert('Error fetching location.');
    }
  };

  const takePhoto = async () => {
    if (camera) {
      let photo = await camera.takePictureAsync();
      setPhotoUri(photo.uri);
    }
  };

  const handleSubmit = () => {
    // You can perform any action with the collected data here
    console.log('Collected data:', name);
    console.log('Coordinates:', location);
    console.log('Photo URI:', photoUri);
    // Add additional logic for storing or processing the data as needed
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.cameraContainer}>
        {cameraPermission ? (
          <Camera
            style={styles.camera}
            type={Camera.Constants.Type.back}
            ref={(ref) => setCamera(ref)}
          />
        ) : (
          <Text>No access to camera</Text>
        )}
      </View>
      <Button title="Take Photo" onPress={takePhoto} />
      {photoUri && <Image source={{ uri: photoUri }} style={styles.photoPreview} />}
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Enter your name"
      />
      <Button title="Get Coordinates" onPress={getCoordinates} />
      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  cameraContainer: {
    width: '100%',
    height: 300,
    marginBottom: 16,
    overflow: 'hidden',
  },
  camera: {
    flex: 1,
  },
  photoPreview: {
    width: '100%',
    height: 200,
    marginBottom: 16,
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
