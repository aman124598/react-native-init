import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { Button } from '@react-navigation/elements';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

const index = () => {

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <View style={styles.container}>

      <Image
        source={require('@/assets/images/icon.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>Welcome back! Please sign in to your account.</Text>

      <Text style={styles.label}>Email</Text>
      <View style={styles.inputContainer}>
        <Feather name="mail" size={20} color="gray" />
        <TextInput
          placeholder="Email"
          style={styles.textInput}
        />
      </View>

      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
        <Feather name="lock" size={20} color="gray" />
        <TextInput
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}
          style={styles.textInput}
        />
        <Feather
          name={isPasswordVisible ? 'eye' : 'eye-off'}
          size={20}
          color="gray"
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        />
      </View>

      <Button onPress={() => { alert("Signed-in") }} style={styles.signInButton}>
        Sign In
        <Feather name="arrow-right" size={20} color="white" style={styles.buttonIcon} />
      </Button>

      <View style={styles.socialContainer}>
        <Feather name="facebook" size={20} color="#3b5998" style={styles.socialIcon} />
        <Feather name="twitter" size={20} color="#00acee" style={[styles.socialIcon, styles.socialIconMargin]} />
        <AntDesign name="google" size={20} color="#db4437" style={[styles.socialIcon, styles.socialIconMargin]} />
      </View>

      <View style={styles.footer}>
        <Text>Don't have an account? <Text style={styles.link}>Sign Up
        </Text></Text>
        <Text style={styles.link}>Forgot your password?</Text>
      </View>

    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginTop: 10
  },
  label: {
    fontSize: 16,
    marginTop: 20,
    width: '80%',
    fontWeight: 'bold'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  textInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    color: 'black'
  },
  signInButton: {
    marginTop: 20,
    width: '80%',
    backgroundColor: '#0c59d6',
    fontWeight: 'bold',
  },
  buttonIcon: {
    marginLeft: 10
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 20
  },
  socialIcon: {
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 7,
    padding: 4
  },
  socialIconMargin: {
    marginLeft: 20
  },
  link: {
    color: '#0c59d6',
    fontWeight: 'bold'
  },
  footer: {
    marginTop: 20,
    alignItems: 'center'
  }
});