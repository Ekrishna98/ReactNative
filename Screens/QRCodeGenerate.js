import React, { useState, useEffect } from 'react';
import QRCode from 'react-native-qrcode-svg';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const QRCodeGenerate = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPasswaord] = useState('');
  const [qrvalue, setQrvalue] = useState('');

  // const [Details, setDetails] = useState({
  //   Email:'',
  //   Password:''
  // })

  const Update = () =>{
    
    console.log(`E-mail: ${Email} \nPassword: ${Password}`)
    setQrvalue(`E-mail: ${Email} \nPassword: ${Password}`)
    setEmail('')
    setPasswaord('')

    // setDetails.Email(''),
    // setDetails.Password('')
    // console.log(`E-mail: ${Details.Email} \nPassword: ${Details.Password}`)
    // setDetails('')
    
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          React Native Tutorials: Part 1
        </Text>
        <Text style={styles.titleStyle}>
          React Native Tutorials: Generation of QR Code in React Native
        </Text>
        <QRCode
          value={qrvalue ? qrvalue : 'NA'}
          size={250}
          color="black"
          backgroundColor="white"
        // logo={{
        //   url:
        //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
        // }}
        // logoSize={30}
        // logoMargin={2}
        // logoBorderRadius={15}
        // logoBackgroundColor="yellow"
        />
        <Text style={styles.textStyle}>
          Please insert any value to generate QR code
        </Text>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={
            (val) => setEmail(val)
          }
          placeholder="Email"
          value={Email}
        />
        <TextInput
          style={styles.textInputStyle}
          onChangeText={
            (val1) => setPasswaord(val1)
          }
          placeholder="Password"
          value={Password}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Update()}>
          <Text style={styles.buttonTextStyle}>
            Generate QR Code
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textStyle: {
    textAlign: 'center',
    margin: 10,
  },
  textInputStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#51D8C7',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#51D8C7',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
    padding: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});

export default QRCodeGenerate;