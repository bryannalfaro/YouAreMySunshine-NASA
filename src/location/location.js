import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView, Text, Button } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import Flag from 'react-native-flags'
import * as Locationd from 'expo-location'
import { useNavigation } from '@react-navigation/native'
import countries from './countries.json'
import Splash from '../splash/splash'

const styles = StyleSheet.create({
  scontainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },

  data: {
    alignItems: "center",
    flexDirection: "column",
    marginBottom: 40,
  },

  button: {
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontSize: 35,
  },
  text2: {
    fontSize: 20,
  },
})

const Location = () => {
  const [flagg, setFlag] = useState("GT")
  const [selectedLanguage, setSelectedLanguage] = useState("Guatemala")
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [isReady, setIsReady] = useState(false)
  const navigation = useNavigation()
  const countriesData = countries.countries
  const flags = countries.flags

  var lat = 0
  var lon = 0

  const prepareResources = async () => {
    const active = await Locationd.hasServicesEnabledAsync()
    if (!active) {
      setErrorMsg("Please enable location services")
      setIsReady(true)
    }
    let { status } = await Locationd.requestForegroundPermissionsAsync()
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied")
      setIsReady(true)
    }

    await Locationd.getCurrentPositionAsync({}).then((location) => {
      setLocation(location)
      setIsReady(true)
      lat = location.coords.latitude
      lon = location.coords.longitude
      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
      )
        .then((response) => response.json())
        .then((data) => {
          setSelectedLanguage(data.address.country)
        })
    }).catch(() => {
      setErrorMsg('Unable to get location')
      setIsReady(true)
    })
  }

  useEffect(() => {
    setFlag(flags[countriesData.indexOf(selectedLanguage)])
  }, [selectedLanguage])

  useEffect(() => {
    prepareResources()
  }, [])

  function change(itemValue) {
    setSelectedLanguage(itemValue)
    setFlag(flags[countriesData.indexOf(itemValue)])
  }
  
  return (isReady ? (
    
    <ScrollView contentContainerStyle={styles.scontainer}>
      <View style={styles.container}>
        <View style={styles.data}>
          <Text>{errorMsg}</Text>
          <Text style={styles.text1}>Country:</Text>
          <Flag code={flagg} size={64} />
          <Text style={styles.text2}>{selectedLanguage}</Text>
        </View>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) => change(itemValue)}
        >
          {countriesData.map((item, index) => {
            return <Picker.Item value={item} label={item} key={index} />
          })}
        </Picker>
      </View>
      <View style={styles.button}>
        <Button onPress={() => { navigation.navigate('Home') }} title="CONTINUAR" />
      </View>
    </ScrollView>
  ) : (
    <Splash></Splash>
  ))
}

export default Location
