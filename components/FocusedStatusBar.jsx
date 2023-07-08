import React from "react";
import { View, Text, StatusBar, Platform } from "react-native";
import { useIsFocused } from "@react-navigation/native";

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();
  const statusBarStyle = Platform.OS === "ios" ? "dark-content" : "default";

  return isFocused ? (
    <StatusBar animated={true} barStyle={statusBarStyle} {...props} />
  ) : null;
};

export default FocusedStatusBar;
