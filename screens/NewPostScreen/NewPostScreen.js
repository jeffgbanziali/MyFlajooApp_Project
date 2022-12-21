import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import AddNewPost from '../../components/newpost/AddNewPost'

const NewPostScreen = () => {
    return (
        <SafeAreaView>
            <AddNewPost />
        </SafeAreaView>


    )
}

export default NewPostScreen