import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { Button } from '@react-navigation/elements';
import * as ScreenOrientation from 'expo-screen-orientation';
import React from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleSheet, Switch, Text, TextInput, useWindowDimensions, View, type ViewStyle } from 'react-native';

const Themes = {
  light: {
    background: 'white',
    text: 'black',
    subtitle: 'gray',
    inputBorder: 'gray',
    icon: 'gray',
    buttonBg: '#0c59d6',
  },
  dark: {
    background: '#121212',
    text: 'white',
    subtitle: '#aaa',
    inputBorder: '#555',
    icon: '#aaa',
    buttonBg: '#3f7ee8',
  }
};

const index = () => {

  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const theme = isDarkMode ? Themes.dark : Themes.light;
  const dynamicStyles = getStyles(theme);

  const { height, width } = useWindowDimensions();

  console.log({ height, width });


  const isActive = true;
  const composedStyle = StyleSheet.compose(dynamicStyles.signInButton, isActive && dynamicStyles.activeButton);

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: theme.background }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={dynamicStyles.container} keyboardShouldPersistTaps="handled">

        {/* To set status bar visible in white bg. */}
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />

        <View style={dynamicStyles.themeToggle}>
          <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
        </View>

        <Image
          source={require('@/assets/images/icon.png')}
          style={dynamicStyles.logo}
        />

        <Text style={dynamicStyles.title}>Sign In</Text>
        <Text style={dynamicStyles.subtitle}>Welcome back! Please sign in to your account.</Text>
        <Text style={dynamicStyles.label}>Email</Text>
        <View style={dynamicStyles.inputContainer}>
          <Feather name="mail" size={20} color={theme.icon} />
          <TextInput
            placeholder="Email"
            placeholderTextColor={theme.subtitle}
            style={dynamicStyles.textInput}
          />
        </View>

        <Text style={dynamicStyles.label}>Password</Text>
        <View style={dynamicStyles.inputContainer}>
          <Feather name="lock" size={20} color={theme.icon} />
          <TextInput
            placeholder="Password"
            placeholderTextColor={theme.subtitle}
            secureTextEntry={!isPasswordVisible}
            style={dynamicStyles.textInput}
          />
          <Feather
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={20}
            color={theme.icon}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        </View>

        <Button onPress={() => { alert("Signed-in") }} style={dynamicStyles.signInButton}>
          Sign In
        </Button>
        <Feather name="arrow-right" size={20} color="white" style={dynamicStyles.buttonIcon} />

        <View style={dynamicStyles.socialContainer}>
          <Feather name="facebook" size={20} color="#3b5998" style={dynamicStyles.socialIcon} />
          <Feather name="twitter" size={20} color="#00acee" style={[dynamicStyles.socialIcon, dynamicStyles.socialIconMargin]} />
          <AntDesign name="google" size={20} color="#db4437" style={[dynamicStyles.socialIcon, dynamicStyles.socialIconMargin]} />
        </View>

        <View style={dynamicStyles.footer}>
          <Text style={{ color: theme.text }}>Don't have an account? <Text style={dynamicStyles.link}>Sign Up
          </Text></Text>
          <Text style={dynamicStyles.link}>Forgot your password?</Text>
        </View>


        {/* Stylesheet Compose */}

        <Button style={composedStyle as ViewStyle}>Hi</Button>

        <View style={{ flexDirection: 'row', gap: 10, marginTop: 20 }}>
          <Button
            onPress={() => ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)}
          >
            Force Portrait
          </Button>
          <Button
            onPress={() => ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)}
          >
            Force Landscape
          </Button>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default index

const getStyles = (theme: typeof Themes.light) => StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
    paddingVertical: 20
  },
  themeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: theme.text
  },
  subtitle: {
    fontSize: 16,
    color: theme.subtitle,
    marginTop: 10
  },
  label: {
    fontSize: 16,
    marginTop: 20,
    width: '80%',
    fontWeight: 'bold',
    color: theme.text
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    width: '80%',
    borderColor: theme.inputBorder,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  textInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    color: theme.text
  },
  signInButton: {
    marginTop: 20,
    width: '80%',
    backgroundColor: theme.buttonBg,
    fontWeight: 'bold',
  },
  activeButton: {
    opacity: 0.8,
  },
  buttonIcon: {
    marginLeft: 10
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 20
  },
  socialIcon: {
    borderColor: theme.inputBorder,
    borderWidth: 2,
    borderRadius: 7,
    padding: 4,
    color: theme.text
  },
  socialIconMargin: {
    marginLeft: 20
  },
  link: {
    color: theme.buttonBg,
    fontWeight: 'bold'
  },
  footer: {
    marginTop: 20,
    alignItems: 'center'
  }
});