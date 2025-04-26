import { Tabs } from "expo-router";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
const BottomRouter = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: "Home page",
          title: "Home",
          tabBarIcon: () => <FontAwesome size={28} name="home" color="aqua" />,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="user/[id]"
        options={{
          headerTitle: "User page",
          title: "User",
          tabBarIcon: () => <AntDesign size={28} name="user" color="aqua" />,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="About"
        options={{
          headerTitle: "About page",
          title: "About",
          tabBarIcon: () => (
            <AntDesign size={28} name="checkcircle" color="aqua" />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Api"
        options={{
          headerTitle: "API page header",
          title: "API",
          tabBarIcon: () => (
            <AntDesign size={28} name="checkcircle" color="aqua" />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default BottomRouter;
