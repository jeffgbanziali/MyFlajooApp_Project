import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { darkRose } from '../Button/Constants';
import { Controller } from 'react-hook-form';


const InputPage = ({ control, name, rules = {}, placeholder, secureTextEntry }) => {
  return (

    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View>
            <TextInput
              value={value}
              onBlur={onBlur}
              placeholder={placeholder}
              onChangeText={onChange}
              secureTextEntry={secureTextEntry}
              style={{
                margin: 10,
                borderWidth: 1,
                padding: 10,
                borderRadius: 10,
                color: 'black',
                backgroundColor: "#FFFFFF",
                height: 54,
                width: 349,
                borderColor: error ? "red" : "#787373"
              }}
              placeholderTextColor={darkRose}
            />
          </View>
          {error && (
            <View style={styles.container}
            >
              <Text style={{
                color: "red",
                fontWeight: "bold",
                alignSelf: "stretch",
                textAlign: "center",
                paddingRight: 16,
                fontSize: 12


              }}>
                {error.message || "Error"}
              </Text>
            </View>

          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 150,
    height: 20,
    backgroundColor: "black",
    borderRadius: 10,
    
  },
  input: {},

});

export default InputPage;