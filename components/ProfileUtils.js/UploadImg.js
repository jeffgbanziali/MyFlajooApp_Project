import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { uploadPicture } from '../../actions/user.action';

const UploadImg = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  const handleChooseImage = () => {
    ImagePicker.showImagePicker({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setFile({
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        });
      }
    });
  };

  const handlePicture = () => {
    const data = new FormData();
    data.append('name', userData.pseudo);
    data.append('userId', userData.uid);
    data.append('file', file);

    dispatch(uploadPicture(data, userData._id));
  };

  return (
    <View>
      <Text>Change your profile picture</Text>
      <TouchableOpacity onPress={handleChooseImage}>
        <Text>Choose Image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handlePicture}
        style={{
          backgroundColor: 'red',
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          Upload picture
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default UploadImg;
