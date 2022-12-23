import { View, Text, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'


const PostUpload = () => {
    const { thumbermailUrl, setThumbermailUrl } = useState('PALCEHOLDER_IMG')
    return (
        <Formik
           
        >

            {({ handleBlur, handleChange, handleSubmit, errors, values, invalid }) => (
                <>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>

                        <Image source={{ uri: thumbermailUrl }} style={{ width: 100, height: 100, borderRadius: 50 }} />
                    </View>
                    <TextInput placeholder='jeff flaj' placeholderTextColor='gray' />
                </>
            )}



        </Formik>

    )
}

export default PostUpload;