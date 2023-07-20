import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MyInfo = () => {
  // Replace the following information with your own details
  const name = 'John Doe';
  const age = 30;
  const occupation = 'Software Developer';
  const imageUrl = 'https://icaii.rvscollege.ac.in/wp-content/uploads/2014/10/speaker-3.jpg'; // Replace with your image URL

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Age: {age}</Text>
      <Text style={styles.text}>Occupation: {occupation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default MyInfo;
