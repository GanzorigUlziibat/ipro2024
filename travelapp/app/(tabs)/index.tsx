import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  TurboModuleRegistry,
} from "react-native";
import { Stack, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors1";
import { ColorSpace } from "react-native-reanimated";
import destinationCategories from "@/data/categories";
import { text } from "stream/consumers";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import destinationGroup from "@/data/destinations";
import groups from "@/data/groups";
import Entypo from "@expo/vector-icons/Entypo";
const Mainhome = () => {
  const [isCategorySelected, setIsCategorySelected] = useState(0);
  const [categoryName, setCategoryName] = useState("Бүгд");
  // isCategorySelected = 2; buruu
  // setIsCategorySelected(2); zuv
  return (
    <View>
      <Stack.Screen
        options={{
          headerStyle: {
            height: 60,
          },
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=female",
                }}
                style={styles.imgIcon}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.notifIcon}>
              <Ionicons name="notifications" size={24} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Travel app</Text>
        <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
          <View
            style={{
              flex: 10,
              borderColor: "#ccc",
              borderStyle: "solid",
              borderWidth: 2,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 20,
              marginRight: 10,
            }}
          >
            <Ionicons name="search" size={24} color={Colors.black} />
            <TextInput
              placeholder="search"
              style={{
                flex: 1,
                fontSize: 18,
                color: "#ccc",
                marginHorizontal: 10,
                height: 45,
              }}
            />
          </View>
          <Pressable
            onPress={() => {}}
            style={{
              backgroundColor: Colors.primaryColor,
              width: 60,
              height: 30,
              paddingVertical: 30,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Ionicons name="filter" size={24} color={Colors.white} />
          </Pressable>
        </View>

        <Text style={styles.categoryStyle}>Category</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {destinationCategories.map((item, index) => (
            <Pressable
              onPress={() => {
                setIsCategorySelected(index);
                setCategoryName(item.title);
              }}
              style={{
                flexDirection: "row",
                borderRadius: 10,
                //borderWidth: 2,
                marginHorizontal: 5,
                padding: 20,
                alignItems: "center",
                backgroundColor:
                  isCategorySelected == index
                    ? Colors.primaryColor
                    : Colors.white,
              }}
            >
              <MaterialCommunityIcons
                name={item.iconName}
                size={24}
                color={
                  isCategorySelected == index ? Colors.white : Colors.black
                }
                style={{ marginRight: 10 }}
              />
              <Text
                style={{
                  fontSize: 18,
                  color:
                    isCategorySelected == index ? Colors.white : Colors.black,
                }}
              >
                {item.title}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
        <Text style={styles.categoryStyle}>Destination</Text>
        <ScrollView>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {destinationGroup.map((item, index) =>
              categoryName == "Бүгд" || item.category == categoryName ? (
                <TouchableOpacity
                  onPress={() => {
                    router.push({
                      pathname: "/(tabs)/destination",
                      params: {
                        id: item.id,
                        name: item.name,
                      },
                    });
                  }}
                  style={{
                    marginHorizontal: 20,
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 10,
                    shadowColor: "black",
                    shadowOffset: { width: 5, height: 5 },
                    shadowRadius: 10,
                    shadowOpacity: 0.5,
                    borderColor: Colors.primaryColor,
                    width: 250,
                    //alignItems: "center",
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: 220,
                      height: 220,
                      borderRadius: 10,
                      marginBottom: 20,
                    }}
                  ></Image>
                  <Text style={styles.itemName} numberOfLines={2}>
                    {item.name}
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Ionicons
                      name="location-outline"
                      size={18}
                      color={Colors.primaryColor}
                      style={{ flex: 1 }}
                    ></Ionicons>
                    <Text style={{ flex: 5, fontSize: 16 }}>
                      {item.location}
                    </Text>
                    <Text
                      style={{
                        color: Colors.primaryColor,
                        flex: 2,
                        textAlign: "right",
                      }}
                    >
                      {item.price}
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <View></View>
              )
            )}
          </ScrollView>
          <View>
            {" "}
            <Text style={styles.categoryStyle}> Groups </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {groups.map((item, index) => (
                <View style={styles.groupsViewContainer}>
                  <Image source={item.image} style={styles.groupsImage} />
                  <View style={styles.groupTitle}>
                    <Text numberOfLines={2} style={styles.itemName}>
                      {" "}
                      {item.name}{" "}
                    </Text>
                    <View style={styles.reviewContainer}>
                      <Entypo
                        name="star"
                        size={24}
                        color={Colors.primaryColor}
                      />
                      <Text> {item.rating} </Text>
                      <Text style={styles.reviewText}> ({item.reviews})</Text>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Mainhome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.bgColor,
    marginTop: 65,
  },
  reviewText: {
    color: "#ccc",
  },
  groupsImage: {
    width: 220,
    height: 170,
    borderRadius: 10,
    marginBottom: 20,
  },
  groupTitle: {
    marginLeft: 20,
  },
  reviewContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemName: { fontSize: 20, fontWeight: 600, height: 60, width: 220 },
  notifIcon: {
    padding: 10,
    marginRight: 20,
    backgroundColor: "white",
    shadowColor: "#171717",
    shadowOffset: { height: 4, width: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    borderRadius: 10,
  },
  imgIcon: {
    height: 40,
    width: 40,
    borderRadius: 10,
  },
  groupsViewContainer: {
    flexDirection: "row",
    width: 500,
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    marginRight: 30,
    shadowColor: "#171717",
    shadowOffset: { height: 4, width: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
  titleStyle: {
    fontWeight: 800,
    fontSize: 30,
    marginLeft: 20,
    marginBottom: 20,
  },
  categoryStyle: {
    fontSize: 24,
    fontWeight: 800,
    marginLeft: 20,
    marginVertical: 20,
  },
});
