import { View, Text } from 'react-native'
import React from 'react'


const ImageCustum = () => {
    return (
        <>
            <View
                style={{
                    flexDirection: 'row'
                }}
            >
                <View
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 100,
                        backgroundColor: 'blue',
                    }}
                >
                    <Text>Image 1</Text>
                </View>
                <View
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 100,
                        backgroundColor: 'red',
                    }}
                >
                    <Text>Image 2</Text>
                </View>
                <View
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 100,
                        marginLeft: 8,
                        backgroundColor: 'green',
                    }}
                >
                    <Text>Image 3</Text>
                </View>
                <View
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 100,
                        marginLeft: 8,
                        backgroundColor: 'yellow',
                    }}
                >
                    <Text>Image 4</Text>
                </View>
                <View
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 100,
                        marginLeft: 8,
                        backgroundColor: 'purple',
                    }}
                >
                    <Text>Image 5</Text>
                </View>
            </View>
        </>
    )
}

export default ImageCustum
