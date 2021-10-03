import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import Splash from "../splash/splash";
import { Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: '10%',
    paddingTop: "10%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  containers: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: width,
    height: height / 3,
    justifyContent: "center",
    alignItems: "center",
  },
  inside: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  containerOptions: {
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    marginTop: 20,
    flexDirection: "row",
  },
  option: {
    width: width / 3,
    height: width / 3,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  text: {
    marginTop: 20,
    fontSize: 34,
  },
  search: {
    width: "90%",
    margin: 5,
  },
});

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1);
  }, []);

  return isLoading ? (
    <Splash></Splash>
  ) : (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.search}
      />
      <ScrollView contentContainerStyle={styles.containers}>

        <View style={styles.image}>
          <Image
            style={styles.inside}
            source={require("../../assets/panel/panel1.png")}
          ></Image>
          <Text style={styles.text}>CONDICION</Text>
        </View>

        <View style={styles.containerOptions}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Specifications")}
          >
            <View style={styles.option}>
              <Image
                style={styles.inside}
                source={require("../../assets/sun/sun1.png")}
              ></Image>
              <Text>CONDICION 1</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Specifications")}
          >
            <View style={styles.option}>
              <Image
                style={styles.inside}
                source={require("../../assets/cloud/cloud1.png")}
              ></Image>
              <Text>CONDICION 2 </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Specifications")}
          >
            <View style={styles.option}>
              <Image
                style={styles.inside}
                source={require("../../assets/temp/temp1.jpg")}
              ></Image>
              <Text>CONDICION 3</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
