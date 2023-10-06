import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";

export default function Login({ navigation }){
    return(
        <SafeAreaView>
            <TouchableOpacity
                onPress={()=> navigation.navigate('Home')}
            >
                <Text>Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}