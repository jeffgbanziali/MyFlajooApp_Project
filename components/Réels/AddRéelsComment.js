import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { commentVideoReels, getVideoReels } from "../../actions/réels.action";
import { useDarkMode } from "../Context/AppContext";

const AddRéelsComment = ({ réels }) => {
  const [text, setText] = useState("");
  const { isDarkMode } = useDarkMode();

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
      dispatch(commentVideoReels(réels._id, userData._id, text, userData.pseudo))
        .then(() => dispatch(getVideoReels()))
        .then(() => setText(""));
    }
  };

  return (
    <View>
      {userData._id && (
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              width: 45,
              height: 45,
              marginLeft: "2.5%",
            }}
          >
            <Image
              source={{ uri: userData.picture }}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 100,
              }}
              alt="commenter-pic"
            />
          </View>
          <TextInput
            style={{
              width: "78%",
              height: 50,
              paddingLeft: 12,
              marginLeft: 2,
            }}
            onChangeText={(text) => setText(text)}
            value={text}
            placeholder="Leave a comment"
            placeholderTextColor={isDarkMode ? "#F5F5F5" : "black"}
            fontSize="16"
            color={isDarkMode ? "#F5F5F5" : "black"}
          />
          {isButtonVisible && ( // Affichez le bouton si isButtonVisible est vrai
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                paddingRight: 10,
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

export default AddRéelsComment;
