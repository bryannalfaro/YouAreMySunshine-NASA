import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Splash from '../splash/splash'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  return (
    <View style={styles.container}>
      {isLoading ? <Splash></Splash> : <Text>Home</Text>}
    </View>
  )
}

export default Home
