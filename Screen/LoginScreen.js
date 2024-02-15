// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableHighlight,
  Platform,
} from 'react-native';
import Loader from './Components/Loader';
const LoginScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [token, setToken] = useState('');

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        >
        <Image
          source={require('./Images/next-icon.png')}
          style={{width: 20, height: 20, marginLeft: 16, marginRight: 8}}
        />
        <Text style={styles.buttonTextStyle}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#242424',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'column',
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  Label: {
    textAlign: 'left',
    marginBottom: 8,
    color: '#FFFFFF',
  },
  linearGradient: {
    height: 40,
    width: 110,
    alignItems: 'center',
    borderRadius: 30,
    marginVertical: 25,
    marginTop: 20,
    marginBottom: 25,
    alignSelf: 'center',
  },
  buttonStyle: {
    color: '#FFFFFF',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonStyleDisabled: {
    color: '#FFFFFF',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.5,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 0,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingHorizontal: 10,
    backgroundColor: '#242424',
    margin: 2,
    borderRadius: 4,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  borderInput: {
    width: '100%',
    height: 45,
    borderRadius: 6,
  },
});
