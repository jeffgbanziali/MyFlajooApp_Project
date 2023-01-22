import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { uploadPicture } from '../../actions/user.action';


const UploadImg = () => {

    const [file, setFile] = useState('');
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer);
    const handlePicture = () => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', userData.name); // name of the user;
        data.append('userId', userData._id); // id of the user;
        data.append('file', file); // file to upload;

        dispatch(uploadPicture(data, userData._id));

        console.log('handlePicture');
    }
    return (
        <View>
            <Text>
                Change your profile picture
            </Text>
            <TextInput
                type="file"
                name="file"
                id="file"
                accept=".jpg, .jpeg, .png"
                onChange={(e) => setFile(e.target.files[0])} />
            <TouchableOpacity
                onPress={handlePicture}
                style={{
                    backgroundColor: 'red',
                    padding: 10,
                    borderRadius: 5

                }}
            >
                <Text
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        textAlign: 'center'
                    }}
                >
                    Upload picture
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({})

export default UploadImg;
