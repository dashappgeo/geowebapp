import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const goToDataField = () => {
    navigation.navigate("DataField");
  };

  const goToViewDetails = () => {
    navigation.navigate("ViewDetails");
  };

  const goToInfoDetails = () => {
    navigation.navigate("InfoDetails");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Data Field" onPress={goToDataField} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="View Details" onPress={goToViewDetails} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Info Details" onPress={goToInfoDetails} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  buttonContainer: {
    width: "80%", // You can adjust this width as needed
    marginBottom: 12,
  },
});

export default Home;
