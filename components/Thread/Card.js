import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { isEmpty } from '../Context/Utils'

const Card = ({ post }) => {

    const [isLoading, setIsLoading] = useState(true)
    const usersData = useSelector((state) => state.userReducer)
    const userData = useSelector((state) => state.userReducer)

    useEffect(() => {
        !isEmpty(usersData[0]) && setIsLoading(false)
    }, [usersData])
    return (


        <View key={post._id}>
            {isLoading ?
                (
                    <Text >Card</Text>
                ) : (
                    <Text>test</Text>
                )
            }
        </View>
    )
}

export default Card