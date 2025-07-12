import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome5";
import { history } from "../constants/cardicons";
import { FlatList } from "react-native";

const TransactScreen = () => {
  return (
    <SafeAreaView className="bg-gray-100 flex-1 px-6">
      <View className="flex-row justify-between items-center h-28 w-full rounded-xl">
        <View className="flex-row space-x-4 w-[45%]">
          <View className="aspect-square justify-center items-center bg-blue-300 w-12 h-12 rounded-full overflow-hidden ml-2">
            <Image
              source={require("../assets/userprofile.png")}
              className="h-full w-full"
              resizeMode="cover"
            />
          </View>
          <View className="">
            <Text className="text-gray-500 text-base font-semibold">Alex</Text>
            <Text className="font-semibold text-gray-900 tracking-wider">
              Usuf
            </Text>
          </View>
        </View>
        <View className="flex-col w-[40%]">
          <Text className="text-gray-500 font-semibold text-base">Balance</Text>
          <Text className="text-gray-900 text-base font-bold">$ 24,552.00</Text>
        </View>
      </View>

      <TouchableOpacity className="bg-white items-center justify-center flex-col h-28 rounded-xl w-full">
        <View className="bg-blue-500 w-8 h-8 justify-center items-center rounded-full">
          <Icon name="plus" size={16} color="white" />
        </View>
        <Text className="text-gray-500 font-semibold">Tap for Send Money </Text>
      </TouchableOpacity>

      <View className="mt-4 bg-white w-full rounded-xl p-2">
        <Text className="text-black font-semibold">Recent Transfer</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {history.map((item) => (
            <TouchableOpacity
              key={item.id}
              className="items-center justify-center w-16 h-12 aspect-square"
            >
              <Image
                source={item.profile}
                resizeMode="cover"
                className="w-full h-full"
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View className="mt-4 px-2 flex-row justify-between items-center w-full">
        <Text className="text-black text-base font-semibold">
          Recent Transactions
        </Text>
        <TouchableOpacity className="flex-row items-center space-x-1">
          <Text className="text-sm text-gray-700 font-semibold">See All</Text>
          <Icon name="angle-right" size={17} color="gray" />
        </TouchableOpacity>
      </View>

      <View className="mt-2 flex-1 px-1 w-full">
        <FlatList
          data={history}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View className="bg-white w-full mb-2 rounded-xl flex-row items-center ">
              <View className="w-[18%] aspect-square justify-center items-center ml-2 my-1 bg-gray-200 rounded-full overflow-hidden">
                <Image
                  source={item.profile}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              </View>
              <View className="w-[80%] flex-col p-3.5 space-y-1">
                <View className="flex-row justify-between">
                  <Text className="text-black font-medium">
                    {item.username}
                  </Text>
                  <Text className={`${item.text} font-semibold`}>
                    {item.amount}
                  </Text>
                </View>
                <View className="flex-row justify-between">
                  <Text className={`${item.text} `}>{item.type}</Text>
                  <Text className="text-gray-500">{item.date}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default TransactScreen;
