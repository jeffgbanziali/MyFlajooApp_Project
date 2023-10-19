import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";

import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const ProfileEdit = () => {
  const [text, setText] = useState("");
  const navigation = useNavigation();

  const userData = useSelector((state) => state.userReducer);

  const handleClickReturnProfile = () => {
    console.log("clicked home");
    navigation.navigate("Settings");
  };
  const handleUpdateBio = () => {
    console.log("clicked");
    navigation.navigate("BioUpdate");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        backgroundColor: "black",
      }}
    >
      <View
        style={{
          marginTop: 50,
          paddingBottom: 4,
          marginLeft: 10,
          marginRight: 10,
          flexDirection: "row",
          borderBottomColor: "gray",
          borderBottomWidth: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => handleClickReturnProfile()}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 40,
              height: 40,
              borderRadius: 30,
            }}
          >
            <MaterialIcons name="arrow-back-ios" size={28} color="white" />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 30,
            color: "#fff",
            fontWeight: "bold",
            marginRight: 10,
          }}
        >
          ProfileEdit
        </Text>
      </View>
      <ScrollView
        vertical
        howsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <View
          style={{
            marginTop: 10,
            width: "100%",
            height: 250,
            flexDirection: "column",

            borderBottomColor: "gray",
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 4,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: "#fff",
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              Profil picture
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  color: "#fff",
                  fontWeight: "normal",
                  marginRight: 10,
                }}
              >
                Udapte
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              height: "80%",
              padding: 4,
              marginTop: 10,
            }}
          >
            <TouchableOpacity>
              <Image
                source={{
                  uri: userData?.picture
                    ? userData.picture
                    : "https://pbs.twimg.com/media/EFIv5HzUcAAdjhl.png",
                }}
                style={{
                  width: 160,
                  height: 160,
                  borderRadius: 100,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            width: "100%",
            height: 120,
            flexDirection: "column",
            borderBottomColor: "gray",
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",

              padding: 4,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: "#fff",
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              Bio
            </Text>
            <TouchableOpacity onPress={handleUpdateBio}>
              <Text
                style={{
                  fontSize: 20,
                  color: "#fff",
                  fontWeight: "normal",
                  marginRight: 10,
                }}
              >
                To Add
              </Text>
            </TouchableOpacity>
          </View>
          <Pressable onPress={handleUpdateBio}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: "85%",
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  color: "#fff",
                  fontWeight: "normal",
                  marginRight: 10,
                }}
              >
                Describe yourselft...
              </Text>
            </View>
          </Pressable>
        </View>
        <View
          style={{
            marginTop: 10,
            width: "100%",
            height: 120,
            flexDirection: "column",
            borderBottomColor: "gray",
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 4,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: "#fff",
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              Contact details
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  color: "#fff",
                  fontWeight: "normal",
                  marginRight: 10,
                }}
              >
                Update
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: "80%",
                padding: 4,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#3D3939",
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                }}
              >
                <MaterialIcons name="local-phone" size={30} color="black" />
              </View>

              <View
                style={{
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#fff",
                    fontWeight: "600",
                    marginLeft: 10,
                  }}
                >
                  {userData.phoneNumber}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "gray",
                    fontWeight: "normal",
                    marginLeft: 10,
                  }}
                >
                  Mobile
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 10,
            width: "100%",
            height: 200,
            flexDirection: "column",
            borderBottomColor: "gray",
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 4,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: "#fff",
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              Générals informations
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  color: "#fff",
                  fontWeight: "normal",
                  marginRight: 10,
                }}
              >
                Update
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 14,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#3D3939",
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                }}
              >
                <FontAwesome name="user" size={28} color="black" />
              </View>

              <View
                style={{
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#fff",
                    fontWeight: "600",
                    marginLeft: 10,
                  }}
                >
                  Homme
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "gray",
                    fontWeight: "normal",
                    marginLeft: 10,
                  }}
                >
                  Genre
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 14,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#3D3939",
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                }}
              >
                <FontAwesome name="birthday-cake" size={24} color="black" />
              </View>

              <View
                style={{
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#fff",
                    fontWeight: "600",
                    marginLeft: 10,
                  }}
                >
                  11 Juillet 2001
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "gray",
                    fontWeight: "normal",
                    marginLeft: 10,
                  }}
                >
                  Date de naissance
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 10,
            width: "100%",
            height: 200,
            flexDirection: "column",
            borderBottomColor: "gray",
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 4,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: "#fff",
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              Locations
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  color: "#fff",
                  fontWeight: "normal",
                  marginRight: 10,
                }}
              >
                Update
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 14,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#3D3939",
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                }}
              >
                <MaterialIcons name="location-on" size={30} color="black" />
              </View>

              <View
                style={{
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#fff",
                    fontWeight: "600",
                    marginLeft: 10,
                  }}
                >
                  Paris
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "gray",
                    fontWeight: "normal",
                    marginLeft: 10,
                    marginTop: 2,
                  }}
                >
                  Current City
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 14,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#3D3939",
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                }}
              >
                <MaterialIcons name="location-on" size={30} color="black" />
              </View>

              <View
                style={{
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#fff",
                    fontWeight: "600",
                    marginLeft: 10,
                  }}
                >
                  Longjumeau
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "gray",
                    fontWeight: "normal",
                    marginLeft: 10,
                    marginTop: 2,
                  }}
                >
                  Hometown
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProfileEdit;
