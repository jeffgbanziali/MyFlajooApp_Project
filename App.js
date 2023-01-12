import React, { useState, useEffect } from 'react';
import { StyleSheet, View, } from 'react-native';
import StackNavigation from './navigation/StackNavigation';
import { UidContext } from './components/Context/AuthContext';
import axios from 'axios';








const App = () => {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fecthToken = async () => {
      await axios({
        method: 'get',
        url: "http://192.168.0.34:5000/jwtid",
        withCredentials: true,
      })
        .then((res) => {
          console.log(res.data)
          setUid(res.data)
        })
        .catch((err) => console.log('no token'))
    };
    fecthToken();
  }, []);


  return (
    <UidContext.Provider value={uid}>
      <View style={styles.root}>
        <StackNavigation />
      </View>
    </UidContext.Provider>




  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#2C2828',
  },
});


export default App;