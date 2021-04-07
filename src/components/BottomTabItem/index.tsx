import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

import { BottomTabItem, TextBottomTab } from "./styles";

interface IBottomTabItem {
  text: string;
  onPress?: Function;
  icon: string;
}

export const BottomTabItemComponent = (props: IBottomTabItem) => {
  return (
    <>
      <BottomTabItem onPress={props.onPress}>
        <Icon name={props.icon} size={22} color="#fff" />
        <TextBottomTab>{props.text}</TextBottomTab>
      </BottomTabItem>
    </>
  );
};
