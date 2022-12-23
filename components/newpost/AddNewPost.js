import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import PostUpload from './PostUpload'

const AddNewPost = () => {
    return (
        <View style={styles.container}>
            <Header />
            <PostUpload />
        </View>
    )
}

const Header = () => {
    return (
        <>
            <View style={styles.headerContainer} >
                <TouchableOpacity>
                    <Feather name="chevron-left"
                        size={34} color="white"
                        style={{
                            width: 60,
                            height: 60,
                            marginLeft: -10,
                            resizeMode: "contain",


                        }}
                    />

                </TouchableOpacity>

            </View>
            <View>
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: -40,

                }}>New Post</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 10,
    },
})


export default AddNewPost