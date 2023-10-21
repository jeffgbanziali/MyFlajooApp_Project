import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { useDarkMode } from "../../Context/AppContext";
import { commentStory, getStories } from "../../../actions/story.action";

const AddStoryComment = ({ story }) => {
    const { isDarkMode } = useDarkMode();

    const [text, setText] = useState("");
    const userData = useSelector((state) => state.userReducer);
    const [isButtonVisible, setIsButtonVisible] = useState(false); // Ajoutez cet état local

    const dispatch = useDispatch();

    useEffect(() => {
        // Mettez à jour la visibilité du bouton en fonction de la longueur du texte
        if (text.length > 0) {
            setIsButtonVisible(true);
        } else {
            setIsButtonVisible(false);
        }
    }, [text]);

    const handleComment = () => {
        if (text) {
            dispatch(commentStory(story._id, userData._id, text, userData.pseudo))
                .then(() => dispatch(getStories()))
                .then(() => setText(""));
        }
    };

    return (
        <View
            style={{
                width: "85%",
                height: 50,
                flexDirection: "row",
                marginLeft: 6,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderRadius: 30,
                borderColor:isDarkMode ? "#F5F5F5" : "white"

            }}>
            {userData._id && (
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 10,
                        marginBottom: 10,
                        width: "100%",

                    }}
                >
                    <TextInput
                        style={{
                            height: 45,
                            width: "100%",
                            borderColor: "white",
                            paddingLeft: 20,
                            fontSize: 18,
                            fontWeight: "normal",
                            overflow: "hidden",
                            color: "white",
                        }}
                        onChangeText={(text) => setText(text)}
                        value={text}
                        placeholder="Leave a comment..."
                        placeholderTextColor={isDarkMode ? "#F5F5F5" : "white"}
                        fontSize="16"
                        color={isDarkMode ? "#F5F5F5" : "white"}
                    />
                    {isButtonVisible && (
                        <View
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 50,
                                justifyContent: "center",
                                position: "absolute",
                                alignItems: "center",
                                right: "0.5%",

                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                onPress={handleComment}
                            >
                                <Ionicons name="send" size={30} color="blue" />
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            )}
        </View>
    );
};

export default AddStoryComment;
