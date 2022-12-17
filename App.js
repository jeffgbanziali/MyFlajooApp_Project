import * as React from 'react';
import { View } from 'react-native';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={styles.root}>
      <Navigation />
    </View>
  );
};

export default App;