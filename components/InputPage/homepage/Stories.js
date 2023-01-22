import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { USER } from "../../Data/Users"

const Stories = () => {
    return (
        <View style={{
            marginTop: -15,
            marginBottom: 10,
            backgroundColor: "#000",
            height: 100,
            width: "100%",
            padding: 10,


        }}>
            <ScrollView horizontal
                showsHorizontalScrollIndicator={false}
            >
                {USER.map((story, index) => (
                    <TouchableOpacity key={index} >
                        < View style={{ alignItems: 'center' }} >
                            <Image key={index} source={{ uri: story.image }} style={{
                                width: 60,
                                height: 60,
                                borderRadius: 30,
                                borderWidth: 3,
                                borderColor: "red",
                                marginLeft: 10,
                                resizeMode: "cover"
                            }} />
                            <Text style={{ color: "white" }}>{
                                story.user.length > 11 ? story.user.slice(0, 10).toLowerCase() + '...' :
                                    story.user.toLowerCase()}</Text>
                        </View>

                    </TouchableOpacity>

                ))}
            </ScrollView>
        </View>
    )
}

export default Stories