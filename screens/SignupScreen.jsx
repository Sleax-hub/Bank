import { View, Text, Image, TextInput, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  return (
    <SafeAreaView className="h-full bg-blue-500 ">
      <View className="items-center mt-8 space-y-4 ">
        
        <Image
          className="h-20 w-20"
          source={require("../assets/usersignup.png")}
        />
        <Text className="text-white font-semibold text-xl">Create Account</Text>
      </View>
      <View className="h-4/5 bg-white mt-20 rounded-t-2xl pl-20 py-10 space-y-6 ">
        <View>
          <Text className="text-blue-500 font-semibold ">Full Name</Text>
          <TextInput
            className="bg-gray-300 rounded-2xl h-12 px-4 w-64"
            placeholder="e.g John Doe"
            placeholderTextColor={"gray"}
          />
        </View>
        <View>
          <Text className="text-blue-500 font-semibold ">Email</Text>
          <TextInput
            className="bg-gray-300 rounded-2xl h-12 px-4 w-64"
            placeholder="example@gmail.com"
            placeholderTextColor={"gray"}
          />
        </View>

        <View>
          <Text className="text-blue-500 font-semibold ">Password</Text>
          <TextInput
            className="bg-gray-300 rounded-2xl h-12 px-4 w-64"
            placeholder="enter your password"
            placeholderTextColor={"gray"}
            secureTextEntry
          />
        </View>
        <View>
          <Text className="text-blue-500 font-semibold ">Confirm Password</Text>
          <TextInput
            className="bg-gray-300 rounded-2xl h-12 px-4 w-64"
            placeholder="enter your password"
            placeholderTextColor={"gray"}
            secureTextEntry
          />
        </View>

        <View className="w-64 h-12 bg-blue-500 rounded-full justify-center items-center">
          <Pressable>
            <Text className="text-white font-bold text-xl">Signup</Text>
          </Pressable>
        </View>

        <View className="flex-row space-x-1">
          <Text className="text-blue-300">Already have an account?</Text>
          <Pressable>
            <Text className="text-blue-500 font-semibold">Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
