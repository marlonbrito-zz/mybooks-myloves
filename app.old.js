import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native';
import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes
} from 'expo-google-sign-in';
import { WEB_CLIENT_ID } from './utils/keys';


export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.logo}>My Books</Text>

      
      <Text style={styles.logo2}>My Loves</Text>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2B2C5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    
    color: '#EB5E76',
    position: "absolute",
    height: 60,
    top: 153,
    fontSize: 53,
  },
  logo2: {
   
    color: '#EB5E76',
    position: "absolute",
    height: 60,
    top: 353,
    fontSize: 53,
  },
  signInButton: {
    width: 200,
    height: 50
  },
  google: {
    position: "absolute",
    width: 194,
    height: 40,
    left: 83,
    top: 430,

  },
  status: {
    marginVertical: 20
  },
  loggedinMessage: {
    fontSize: 20,
    color: 'tomato'
  },
  userInfoContainer: {
    marginVertical: 20
  },
  profileImageContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  profileImage: {
    width: 100,
    height: 100
  },
  displayTitle: {
    fontSize: 22,
    color: '#010101'
  }
});

