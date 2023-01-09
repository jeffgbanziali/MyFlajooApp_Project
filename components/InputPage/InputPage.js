import React from 'react';
import { TextInput, View } from 'react-native';
import { darkRose } from '../Button/Constants';


const InputPage = props => {
  return (
<TextInput {...props} 
style={{ 
  margin: 10,
  borderWidth: 1,
  padding: 10,
  borderRadius: 10, 
  color: 'black', 
  backgroundColor: "#FFFFFF",
  height: 54,
  width: 349,
   }}
  placeholderTextColor={darkRose}
/>
  );
}

export default InputPage;