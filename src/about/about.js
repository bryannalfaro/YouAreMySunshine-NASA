import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const About = () => (
  <View style={styles.container}>
    <Text>We are a team of students of Computer Science Engineering of the University of the Valley of Guatemala.</Text>
    <Text>We developed this app for the You Are My Sunshine Challenge of the NASA Space Apps Hackaton.</Text>
    <Text>Hope you can find useful and see all the potential of the climate data for your solar panels installation.</Text>
    <Text>Bryann Alfaro</Text>
    <Text>Julio Herrera</Text>
    <Text>Laurelinda Gómez</Text>
    <Text>Diego Arredondo</Text>
  </View>
)

export default About
