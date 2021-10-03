import React, { useState, useEffect } from 'react'
import {
  View, StyleSheet, ScrollView, Text, Button
} from 'react-native'
import { Picker } from '@react-native-picker/picker';
const axios = require('axios').default;
import Flag from 'react-native-flags';


const styles = StyleSheet.create({
  scontainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  data: {
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 40,
  },

  button: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 35,
  },
  text2: {
    fontSize: 20,
  }
})

const Location = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('l');
  const [options, setOptions] = useState([]);
  const [flag,setFlag] = useState([]);

  const fill = (data)=>{
    for(let i=0; i<259; i++){
      if(data[i].name.common !== undefined)
      options.push(data[i].name.common)
      flag.push(data[i].cca2)
    }
  }
  const getCountries = async () =>{
    const response= await fetch('https://restcountries.com/v3.1/all').catch(err => err)
    const data = await response.json()
    fill(data)
  }
   useEffect(() => {
      getCountries()
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scontainer}>
      <View style={styles.container}>
        <View style={styles.data}>
          <Text style={styles.text1}>Country:</Text>
          <Flag
            code="GB"
            size={64}
          />
          <Text style={styles.text2}>{selectedLanguage}</Text>
        </View>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          {
          options.map((item, index) => {
            return <Picker.Item value={item} label={item} key={index} />
          })
        }
        </Picker>


      </View>
      <View style={styles.button}>
        <Button title='CONTINUAR' />
      </View>
    </ScrollView>)
}

export default Location