import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

const ForgotPasswordScreen = () => {
  return (
    <>
    <ImageBackground
        source={require("../../assets/Images/Background3.jpg")}
        style={{ height: '100%' }}>
        <View style={{
            alignItems: "center",
        }}>
            <Text style={{
                color: 'blue',
                fontSize: 64,
                fontWeight: 'bold',
                marginVertical: 30
            }}>
                Change Your Password
            </Text>
            <Text style={{
                fontSize: 20,
                color: 'gray',
                fontWeight: 'bold',
                marginVertical: 60
            }}>
                Change Your Password
            </Text>
            <InputPage
                placeholder="Email/UserName"
                keyboardType={"email-adress"} />
            
            <View style={{
                alignItems: "flex-end",
                width: '78%',
                paddingRight: 16,
                marginBottom: 200
            }}>
                <Text style={{
                    color: darkRed,
                    fontWeight: 'bold',
                    fontSize: 16
                }}>
                    Forgot Password ?
                </Text>
            </View>
            <View>
                <Button
                    textColor="#D9D9D9"
                    bgColor={darkRose}
                    buttonLabel="Login"
                    Press={() => alert("Logged In")} />
                <View style={{ display: "flex", flexDirection: "row", justifyContent: 'center' }}>
                    <Text style={{fontWeight:'semibold', fontSize:16}}>
                        Don't have an account ?
                    </Text>
                    <TouchableOpacity onPress={()=> props.navigation.navigate("Signup")}>
                        <Text style={{color:darkBlue, fontWeight:'bold', fontSize:16}}>Sign Up</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>

    </ImageBackground>




</>
  );
}

export default ForgotPasswordScreen;