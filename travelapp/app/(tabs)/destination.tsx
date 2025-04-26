import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Stack, useLocalSearchParams, router } from "expo-router";
import destinationGroup from "@/data/destinations";
import { ScreenStack } from "react-native-screens";
import { Background } from "@react-navigation/elements";
import Colors from "@/constants/Colors1";
import AntDesign from "@expo/vector-icons/AntDesign";

const destination = () => {
  const { id, name } = useLocalSearchParams();
  const destination = destinationGroup.find((item) => item.id === id);
  return (
    <View>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              style={{
                padding: 3,
                backgroundColor: "#ccc",
                borderRadius: 10,
                marginLeft: 20,
              }}
              onPress={() => router.back()}
            >
              <View
                style={{
                  backgroundColor: Colors.white,
                  borderRadius: 5,
                  padding: 4,
                }}
              >
                <AntDesign name="arrowleft" size={20} color={Colors.black} />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{
                padding: 3,
                backgroundColor: "#ccc",
                borderRadius: 10,
                marginRight: 20,
              }}
              onPress={() => {}}
            >
              <View
                style={{
                  backgroundColor: Colors.white,
                  borderRadius: 5,
                  padding: 4,
                }}
              >
                <AntDesign name="book" size={20} color={Colors.black} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <Image style={styles.headImage} source={destination.image}></Image>
        <View style={styles.contentWrapper}>
          <Text style={styles.headerTitle}>{destination.name}</Text>
          <View style={styles.destinationLocationWrapper}>
            <AntDesign name="book" size={20} color={Colors.black} />
            <Text style={styles.destinationLocation}>
              {destination.location}
            </Text>
          </View>

          <View style={styles.destinationLocationWrapper}>
            <Text style={styles.destinationLocation}>
              {destination.description}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default destination;
const styles = StyleSheet.create({
  headImage: {
    height: 350,
    width: "100%",
  },
  container: {
    flex: 1,
  },
  headerTitle: {
    fontWeight: 800,
    fontSize: 28,
  },
  contentWrapper: {
    padding: 20,
  },
  destinationLocationWrapper: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  destinationLocation: {
    fontSize: 24,
    fontWeight: 500,
    color: Colors.black,
    marginLeft: 10,
  },
});
