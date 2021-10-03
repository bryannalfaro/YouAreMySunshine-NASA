import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Splash from "../splash/splash";
import { Searchbar } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  containers: {
    flex: 1,
  },
  image: {
    width: "40%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  inside: {
    flex: 1,
    aspectRatio: 1.5,
    resizeMode: "contain",
  },

  containerOptions: {
    alignItems: "center",
    justifyContent: "center",
    height: "30%",
    width: "80%",
    flexDirection: "row",
  },
  option: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1);
  }, []);

  return isLoading ? (
    <Splash></Splash>
  ) : (
    <ScrollView contentContainerStyle={styles.containers}>
      <View style={styles.container}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.search}
        />

        <View style={styles.image}>
          <Image
            style={styles.inside}
            source={require("../../assets/panel/panel1.png")}
          ></Image>
        </View>

        <Text style={styles.text}>CONDICION</Text>

        <View style={styles.containerOptions}>
          <TouchableOpacity>
            <View style={styles.option}>
              <View style={styles.containerOptions}>
                <Image
                  style={styles.inside}
                  source={require("../../assets/sun/sun1.png")}
                ></Image>
              </View>
              <Text>CONDICION 1</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.option}>
              <View style={styles.containerOptions}>
                <Image
                  style={styles.inside}
                  source={require("../../assets/cloud/cloud1.png")}
                ></Image>
              </View>
              <Text>CONDICION 2 </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.option}>
              <View style={styles.containerOptions}>
                <Image
                  style={styles.inside}
                  source={require("../../assets/temp/temp1.jpg")}
                ></Image>
              </View>
              <Text>CONDICION 3</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
