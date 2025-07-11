import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { card, history, services } from "../constants/cardicons";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="h-28 w-80 bg-gray-200 mx-auto rounded-2xl px-2 py-3 flex-row items-center">
        <Image source={require("../assets/userprofile.png")} />
        <View className="flex-row justify-between w-60">
          <Text className="font-semibold">Welcome Back</Text>
          <Icon name="bell" color="#3B82F6" size={24} />
        </View>
      </View>

      {/* card design with array */}

      <View className="h-48 w-80 bg-blue-400 mx-auto rounded-2xl mt-4 space-y-3">
        <View className="h-24 w-full  px-6 flex-row justify-between items-center">
          <View className="space-y-2">
            <View className="flex-row space-x-2">
              <Icon name="wallet" color="white" size={16} />
              <Text className="text-xs text-white">Your Wallet Balance</Text>
            </View>
            <View className="flex-row items-center space-x-2">
              <Text className="text-white text-3xl font-bold">$ 24,562.00</Text>
              <Icon name="eye-slash" color="gray" size={16} />
            </View>
          </View>
          <View>
            <Icon name="qrcode" color="white" size={34} />
          </View>
        </View>
        <View className="h-20 w-full  flex-row justify-between px-2">
          {card.map((cards, index) => (
            <TouchableOpacity key={index} className=" flex-col items-center ">
              <View className="bg-white w-12 h-12 p-2 rounded-full items-center justify-center">
                <Icon name={cards.iconName} color="#3B82F6" size={24} />
              </View>
              <Text className="text-white mt-1">{cards.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View className="h-52 w-80 mx-auto mt-4 rounded-2xl p-2 bg-gray-200">
        <Text className="text-black text-base font-semibold">
          Other Services
        </Text>

        <View className="w-full h-44 flex-row flex-wrap justify-between py-2">
          {services.map((service, index) => (
            <TouchableOpacity key={index} className="items-center w-[25%]">
              <View
                className={`w-12 h-12 p-2 ${service.color} rounded-xl justify-center items-center`}
              >
                <Icon name={service.icon} color={service.iconColor} size={24} />
              </View>
              <Text className="text-xs mt-1">{service.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View className="w-80 mx-auto mt-4">
        <View className="flex-row justify-between items-center">
          <Text className="text-black text-base font-semibold">
            Recent Activity
          </Text>
          <TouchableOpacity className="flex-row items-center space-x-1">
            <Text className="text-sm text-blue-400">See All</Text>
            <Icon name="angle-right" size={17} color="#60A5FA" />
          </TouchableOpacity>
        </View>
        <View className="w-full h-44">
          <FlatList
            data={history}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View className="bg-gray-200 w-full mb-2 rounded-xl flex-row items-center ">
                <View className="w-[18%] aspect-square justify-center items-center ml-2 my-1 bg-white rounded-full overflow-hidden">
                  <Image source={item.profile} className="w-full h-full" resizeMode="cover"/>
                </View>
                <View className="w-[80%] flex-col p-3.5 space-y-1">
                  <View className="flex-row justify-between">
                    <Text className="text-black font-medium">{item.username}</Text>
                    <Text className={`${item.text} font-semibold`}>{item.amount}</Text>
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
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
