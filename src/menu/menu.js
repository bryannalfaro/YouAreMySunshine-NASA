import { useNavigation } from "@react-navigation/core";
import Store from '../navigation/store'
import React, { useContext } from "react";
import {
  StyleSheet,
  Animated,
  View,
  Text,
  Pressable,
  Image,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 275,
    position: "absolute",
    bottom: -100,
    backgroundColor: "#dbdbdb",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  optionsContainer: {
    width: "100%",
    height: 100,
    position: "absolute",
    top: 75,
    flexDirection: "row",
  },
  option: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    marginTop: 10,
  },
  optionImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  menuButtonContainer: {
    width: 75,
    height: 75,
    position: "absolute",
    backgroundColor: "#dbdbdb",
    bottom: 100,
  },
  menuButton: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});

const Menu = () => {
  const [animation] = React.useState(new Animated.Value(0));
  const [isOpen, setIsOpen] = React.useState(false);
  const context = useContext(Store)
  const navigation = useNavigation();

  const openAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
    setIsOpen(true);
  };

  const closeAnimation = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
    setIsOpen(false);
  };

  return context.store.lat === null ? null : (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [100, 0],
              }),
            },
          ],
        },
      ]}
    >
      <Animated.View
        style={[
          styles.optionsContainer,
          {
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -75],
                }),
              },
            ],
          },
        ]}
      >
        <Pressable
          style={styles.option}
          onPress={() => navigation.navigate("Location")}
        >
          <Image
            style={styles.optionImage}
            source={require("../../assets/icons/location.png")}
          />
          <Text>Location</Text>
        </Pressable>

        <Pressable
          style={styles.option}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.optionImage}
            source={require("../../assets/icons/home.png")}
          />
          <Text>Home</Text>
        </Pressable>

        <Pressable
          style={styles.option}
          onPress={() => navigation.navigate("About")}
        >
          <Image
            style={styles.optionImage}
            source={require("../../assets/icons/about.png")}
          />
          <Text>About us</Text>
        </Pressable>
      </Animated.View>
      <Animated.View
        style={[
          styles.menuButtonContainer,
          {
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-100, 0],
                }),
              },
            ],
          },
        ]}
      >
        <Pressable
          style={styles.menuButton}
          onPress={() => {
            isOpen ? closeAnimation() : openAnimation();
          }}
        >
          <Image
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
            source={require("../../assets/icons/menu.png")}
          />
          <Text>Menu</Text>
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
};

export default Menu;
