import React from 'react'
import {
  View, StyleSheet, ScrollView, Text,
} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  perfil: {
    width: '80%',
    height: 200,
    borderRadius: 5,
    justifyContent: 'center',
  },
  textBiography: {
    backgroundColor: '#1B9CC4',
    borderRadius: 5,
    padding: 23,
    color: 'white',
    textAlign: 'justify',
  },
  data: {
    display: 'flex',
    flexDirection: 'row',
  },
  faceicon: {
    fontSize: 35,
    color: '#1B9CC4',
    borderRadius: 15,
    margin: 5,
    padding: 4,
    alignItems: 'center',
  },
  biography: {
    alignItems: 'flex-start',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  contact: {
    fontWeight: 'bold',
    marginTop: 30,
    fontSize: 24,
    marginBottom: 15,
  },
  icons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  red: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    alignItems: 'center',
    textAlign: 'center',
  },
})

const Location = ({ navigation }) => (
  <ScrollView>
    <View style={styles.container}>

    </View>
  </ScrollView>
)

PlayerProfile.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired,
}

export default Location