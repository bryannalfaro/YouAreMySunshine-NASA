import React, { useEffect } from 'react';
import { StyleSheet, View, Animated, Dimensions } from 'react-native'
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
});

const Splash = () => {
  const rotation = new Animated.Value(0.5)
  const scale = new Animated.Value(0)
  const animation = () => {
    Animated.sequence([
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 1,
        useNativeDriver: true,
      }),
      Animated.timing(rotation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 0,
        duration: 1,
        useNativeDriver: true,
      }),
    ]).start(() => animation())
  }
  useEffect(() => {
    animation()
  }, [])

  return (
    <View style={styles.container}>
      <Animated.Image
        style={{
          width: '100%',
          height: width,
          transform: [{
            rotate: rotation.interpolate({
              inputRange: [0, 1],
              outputRange: ['-30deg', '30deg']
            })
          }, {
            scaleX: scale.interpolate({
              inputRange: [0, 1],
              outputRange: [1, -1]
            })
          }]
        }}
        source={require('../../assets/splash.png')}
      />
    </View>
  )
}

export default Splash
