import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { darkRose } from '../Button/Constants';


const InputPage = ({ label, ...props }) => {
  return (


    <>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>


        <TextInput
          style={styles.input}
          {...props}

        />

      </View>
    </>
  );
};



const styles = StyleSheet.create({
  input: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    color: 'black',
    backgroundColor: "#FFFFFF",
    height: 54,
    width: 349,

  },

});

export default InputPage;