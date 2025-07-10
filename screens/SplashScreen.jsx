import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SplashScreen = () => {
  return (
   <SafeAreaView className="bg-blue-500 h-full justify-center items-center">
    <View className="bg-white h-32 w-32 rounded-2xl justify-center items-center shadow-2xl shadow-white">
        <Image source={require("../assets/splashimg.png")} />
    </View>

    <View className="bg-white w-80 h-12 rounded-full justify-center items-center absolute top-[85%]">
        <Pressable>
            <Text className="text-blue-500 text-xl font-bold tracking-wider">
                Start
            </Text>
        </Pressable>
    </View>
   </SafeAreaView>
  )
}

 export default SplashScreen

const styles = StyleSheet.create({})