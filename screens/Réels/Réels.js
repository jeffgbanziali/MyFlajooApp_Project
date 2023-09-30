import React, { useState } from 'react';
import { View, Image, KeyboardAvoidingView, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Ionicons, Entypo, Feather, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import { Video, ResizeMode } from 'expo-av';



{/*
const fakeVideos = [
    {
        id: 1,
        title: 'Vidéo 1',
        description: 'Description de la vidéo 1',
        videoSource: require('../../assets/Videos/AZE.mov'),
    },
    {
        id: 2,
        title: 'Vidéo 2',
        description: 'Description de la vidéo 2',
        videoSource: require('../../assets/Videos/AZE2.mp4'),
    },
    {
        id: 3,
        title: 'Vidéo 3',
        description: 'Description de la vidéo 3',
        videoSource: require('../../assets/Videos/AZE3.mp4'),
    },
    {
        id: 4,
        title: 'Vidéo 4',
        description: 'Description de la vidéo 3',
        videoSource: require('../../assets/Videos/AZE4.mp4'),
    },
];*/}

const Réels = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const video = React.useRef(null);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [status, setStatus] = React.useState({});

    const handleVideoLoad = () => {
        setIsVideoLoaded(true);
    };

    const toggleVideoPlayback = () => {
        if (isVideoPlaying) {
            video.current.pauseAsync();
        } else {
            video.current.playAsync();
        }
        setIsVideoPlaying(!isVideoPlaying);
    };


    const handleScroll = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const videoHeight = Dimensions.get('window').height;
        const videoIndex = Math.floor(offsetY / videoHeight);

        if (videoIndex !== currentVideoIndex) {
            setCurrentVideoIndex(videoIndex);
        }
    };

    return (

        <KeyboardAvoidingView
            style={{
                flex: 1,

            }}
        >
            <View
                style={{
                    flex: 1,
                    position: 'absolute',
                    marginTop: 50,
                    zIndex: 1,

                }}
            >
                <View
                    style={{
                        width: "100%",
                        height: 60,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: "space-evenly"

                    }}
                >
                    <TouchableOpacity>
                        <View
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 30,
                                justifyContent: 'center',
                                alignSelf: 'center',
                                opacity: 0.8,
                            }}>
                            <Entypo
                                name='dots-three-horizontal'
                                size={30}
                                color='white'
                                style={{
                                    alignSelf: 'center',
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    resizeMode: 'contain'
                                }}
                            />

                        </View>
                    </TouchableOpacity>

                    <View
                        style={{
                            width: 240,
                            height: 50,
                            backgroundColor: '#5F5858',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderRadius: 30,
                            opacity: 0.8,
                        }}>

                        <View
                            style={{
                                width: 110,
                                height: 50,
                                borderRadius: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                opacity: 0.8,

                            }}>

                            <View
                                style={{
                                    flex: 1,
                                    backgroundColor: 'red',
                                    position: 'absolute',
                                    width: 11,
                                    height: 11,
                                    borderRadius: 25,
                                    borderWidth: 2,
                                    borderColor: 'white',
                                    top: 10,
                                    right: 4,
                                    zIndex: 100
                                }}
                            >

                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'white',
                                }}
                            >
                                Following
                            </Text>
                        </View>
                        <View
                            style={{
                                width: 120,
                                height: 45,
                                marginRight: 4,
                                backgroundColor: 'red',
                                borderRadius: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: 'white',
                                }}
                            >
                                For you
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <View
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 30,
                                justifyContent: 'center',
                                alignSelf: 'center',
                                opacity: 0.8,
                            }}>
                            <Feather
                                name="search"
                                color='white'
                                size={30}
                                style={{
                                    alignSelf: 'center',
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    resizeMode: 'contain'
                                }} />

                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                {fakeVideos.map((videoData, index) => (
                    <View key={videoData.id} style={{
                        height:
                            Dimensions.get('window').height
                    }}>
                        {index === currentVideoIndex && (
                            <>
                                <Video
                                    ref={video}
                                    source={videoData.videoSource}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        position: 'absolute'
                                    }}
                                    useNativeControls
                                    resizeMode="cover"
                                    isLooping
                                    shouldPlay={isVideoPlaying}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                    onLoad={handleVideoLoad}
                                    onError={(error) => console.error('Erreur de lecture vidéo :', error)}
                                />

                                <TouchableOpacity
                                    style={{
                                        position: 'absolute',
                                        width: "100%",
                                        height: "100%",
                                        alignItems: "center",
                                        zIndex: 1,
                                        justifyContent: "center"
                                    }}
                                    onPress={toggleVideoPlayback}
                                >
                                    <FontAwesome5
                                        name={isVideoPlaying ? 'pause' : 'play'}
                                        size={60}
                                        color="white"
                                    />
                                </TouchableOpacity>



                                <View
                                    style={{
                                        width: '100%',
                                        height: '95%',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end',
                                        alignItems: "flex-end",

                                        marginLeft: 12,

                                    }}
                                >
                                    <View
                                        style={{
                                            width: '100%',
                                            height: '40%',
                                            alignItems: 'flex-end',
                                        }}
                                    >
                                        <View
                                            style={{
                                                width: 100,
                                                height: '100%',
                                                flexDirection: 'column',
                                                justifyContent: "space-evenly",
                                                alignItems: 'center',
                                            }}
                                        >
                                            <View
                                                style={{
                                                    flexDirection: "column",
                                                    justifyContent: 'center',
                                                    alignItems: 'center',

                                                }}
                                            >
                                                <TouchableOpacity
                                                    style={{
                                                        width: 80,
                                                        height: 50,
                                                        borderRadius: 50,
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <Ionicons name="md-heart-sharp" size={40} color="red" />
                                                </TouchableOpacity>
                                                <Text
                                                    style={{
                                                        fontSize: 14,
                                                        fontWeight: "500",
                                                        color: "white"
                                                    }}>
                                                    100.2K
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    flexDirection: "column",
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                <TouchableOpacity
                                                    style={{
                                                        width: 80,
                                                        height: 50,
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <MaterialCommunityIcons name="comment-processing" size={35} color="white" />
                                                </TouchableOpacity>
                                                <Text
                                                    style={{
                                                        fontSize: 14,
                                                        fontWeight: "500",
                                                        color: "white"
                                                    }}
                                                >
                                                    100.2K
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    flexDirection: "column",
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <TouchableOpacity
                                                    style={{
                                                        width: 80,
                                                        height: 50,
                                                        borderRadius: 50,
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <Entypo name="share" size={35} color="white" />
                                                </TouchableOpacity>
                                                <Text
                                                    style={{
                                                        fontSize: 14,
                                                        fontWeight: "500",
                                                        color: "white"
                                                    }}
                                                >
                                                    Share
                                                </Text>
                                            </View>

                                        </View>
                                    </View>

                                    <View
                                        style={{
                                            width: '100%',
                                            height: '20%',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <View
                                            style={{
                                                width: 400,
                                                marginTop: 4,
                                                flexDirection: "row"

                                            }}
                                        >

                                            <Image source={{
                                                uri: 'https://www.10wallpaper.com/wallpaper/2880x1800/2102/Assassins_Creed_Eivor_AC_2021_Game_HD_Poster_2880x1800.jpg'
                                            }}
                                                style={{
                                                    height: 50,
                                                    width: 50,
                                                    borderRadius: 30,
                                                    borderWidth: 2,
                                                    borderColor: "red",
                                                }}
                                            />
                                            <View
                                                style={{
                                                    height: 80,
                                                    width: 200,
                                                    marginLeft: 10
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        fontSize: 14,
                                                        fontWeight: 'bold',
                                                        color: "white"
                                                    }}
                                                >
                                                    Jeff Flaj

                                                </Text>
                                                <View
                                                    style={{
                                                        marginTop: 5,
                                                    }}

                                                >
                                                    <Text
                                                        style={{
                                                            fontSize: 14,
                                                            fontWeight: 'normal',
                                                            textAlign: 'justify',
                                                            color: "white",

                                                        }}
                                                    >
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta possimus aliquam architecto quasi mollitia suscipit, inventore beatae deleniti repellendus! Fugiat tempora quae in illum quos quod soluta, explicabo quia eum?

                                                    </Text>
                                                </View>

                                            </View>
                                        </View>
                                        <View
                                            style={{
                                                height: 40,
                                                width: 400,
                                                flexDirection: "row",
                                                alignItems: 'center',
                                            }}
                                        >
                                            <FontAwesome5 name="music" size={20} color="white" />
                                            <View
                                                style={{
                                                    marginLeft: 10,
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        fontSize: 16,
                                                        textAlign: 'justify',
                                                        color: "white",

                                                    }}>
                                                    Maitre Gims : Jasmine
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                            </>
                        )}
                    </View>
                ))}
            </ScrollView>
        </KeyboardAvoidingView >


    );
};



export default Réels;
