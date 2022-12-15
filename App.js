import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Bonjour </Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2828',
    textColor: 'white',
  },
  text: {
    color: 'white',
  }
});
