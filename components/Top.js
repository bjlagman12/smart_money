import React from "react";
import { Header } from "react-native-elements";

export default (Top = ({ home }) => {
  return (
    <Header
      leftComponent={{
        icon: "menu",
        color: "#fff"
      }}
      centerComponent={{
        text: "SMART MONEY",
        style: { color: "#fff" }
      }}
      rightComponent={{
        icon: "home",
        color: "#fff"
      }}
      onPress={home}
    />
  );
});
