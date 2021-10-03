import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Splash from "../splash/splash";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1);
  }, []);

  return isLoading ? (
    <Splash />
  ) : (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
