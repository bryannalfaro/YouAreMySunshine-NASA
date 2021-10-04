import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import Store from "../navigation/store";
import Splash from "../splash/splash";
import { Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";
import { fetchData } from "../services/nasaPower";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: "10%",
    paddingTop: "10%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
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
    width: "100%",
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
    fontSize: 22,
  },
  search: {
    width: "90%",
    margin: 5,
  },
});

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [data, setData] = useState({
    panel: "",
    cond: "",
    solar: "",
    precipitation: "",
    temperature: "",
  });
  const onChangeSearch = (query) => setSearchQuery(query);
  const navigation = useNavigation();
  const context = useContext(Store);

  const getSolar = async (lat, lon) => {
    const response = await fetchData("Luz Solar", lat, lon);
    const last = Math.max.apply(
      null,
      Object.keys(response.properties.parameter.ALLSKY_SFC_UVA)
    );
    setData((prev) => {
      return {
        ...prev,
        solar: response.properties.parameter.ALLSKY_SFC_UVA[last - 11],
      };
    });
    return response.properties.parameter.ALLSKY_SFC_UVA[last - 11];
  };

  const getPrecipitation = async (lat, lon) => {
    const response = await fetchData("Humedad", lat, lon);
    const last = Math.max.apply(
      null,
      Object.keys(response.properties.parameter.PRECTOTCORR)
    );
    setData((prev) => {
      return {
        ...prev,
        precipitation: response.properties.parameter.PRECTOTCORR[last - 11],
      };
    });
    return response.properties.parameter.PRECTOTCORR[last - 11];
  };

  const getTemperature = async (lat, lon) => {
    const response = await fetchData("Temperatura", lat, lon);
    const last = Math.max.apply(
      null,
      Object.keys(response.properties.parameter.T2M)
    );
    setData((prev) => {
      return { ...prev, temperature: response.properties.parameter.T2M[last - 11] };
    });
    return response.properties.parameter.T2M[last - 11];
  };

  const getAllData = async (lat, lon, isMounted) => {
    if (!isMounted) {
      setIsLoading(false);
      return;
    }
    const solar = await getSolar(lat, lon);
    const prec = await getPrecipitation(lat, lon);
    const temp = await getTemperature(lat, lon);
    let calc = 0;
    calc = temp < 15 ? calc : temp > 30 ? calc + 1 : calc + 2;
    calc = prec > 1.5 ? calc : prec > 0.7 ? calc + 1 : calc + 2;
    calc = solar < 5 ? calc : solar < 30 ? calc + 1 : calc + 2;
    setData((prev) => {
      return { ...prev, panel: calc };
    });
    setData((prev) => {
      return { ...prev, cond: (calc >=5 ? 'Buenas Condiciones' : (calc === 4 ? 'Condiciones aceptables' : (calc === 3 ? 'Condiciones no satisfactorias' : 'Malas Condiciones'))) };
    });
    setIsLoading(false);
  };

  useEffect(() => {
    let isMounted = true;
    getAllData(context.store.lat, context.store.lon, isMounted);
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigation.navigate("Specifications", { query: searchQuery });
    }
  }, [searchQuery]);

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
          {data.panel >= 5 ? (
            <Image
              style={styles.inside}
              source={require(`../../assets/panel/panel4.png`)}
            ></Image>
          ) : data.panel === 4 ? (
            <Image
              style={styles.inside}
              source={require(`../../assets/panel/panel3.png`)}
            ></Image>
          ) : data.panel === 3 ? (
            <Image
              style={styles.inside}
              source={require(`../../assets/panel/panel2.png`)}
            ></Image>
          ) : (
            <Image
              style={styles.inside}
              source={require(`../../assets/panel/panel1.png`)}
            ></Image>
          )}
          <Text style={styles.text}>{ data.cond }</Text>
        </View>

        <View style={styles.containerOptions}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Specifications")}
          >
            <View style={styles.option}>
              {data.solar >= 50 ? (
                <Image
                  style={styles.inside}
                  source={require("../../assets/sun/sun2.png")}
                ></Image>
              ) : data.solar >= 30 ? (
                <Image
                  style={styles.inside}
                  source={require("../../assets/sun/sun4.png")}
                ></Image>
              ) : data.solar >= 10 ? (
                <Image
                  style={styles.inside}
                  source={require("../../assets/sun/sun3.png")}
                ></Image>
              ) : (
                <Image
                  style={styles.inside}
                  source={require("../../assets/sun/sun1.png")}
                ></Image>
              )}
              <Text>{data.solar}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Specifications")}
          >
            <View style={styles.option}>
              {data.precipitation >= 1.5 ? (
                <Image
                  style={styles.inside}
                  source={require("../../assets/cloud/cloud1.png")}
                ></Image>
              ) : data.precipitation >= 0.7 ? (
                <Image
                  style={styles.inside}
                  source={require("../../assets/cloud/cloud2.png")}
                ></Image>
              ) : (
                <Image
                  style={styles.inside}
                  source={require("../../assets/cloud/cloud3.png")}
                ></Image>
              )}
              <Text>{data.precipitation}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Specifications")}
          >
            <View style={styles.option}>
              {data.temperature >= 30 ? (
                <Image
                  style={styles.inside}
                  source={require("../../assets/temp/temp1.jpg")}
                ></Image>
              ) : data.temperature >= 15 ? (
                <Image
                  style={styles.inside}
                  source={require("../../assets/temp/temp2.jpg")}
                ></Image>
              ) : (
                <Image
                  style={styles.inside}
                  source={require("../../assets/temp/temp1.jpg")}
                ></Image>
              )}
              <Text>{data.temperature}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
