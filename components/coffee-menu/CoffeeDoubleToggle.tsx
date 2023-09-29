import {CheckBox} from "../basic/CheckBox";
import {color, styles} from "../styles";
import {Text, View} from "react-native";
import React from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export const CoffeeDoubleToggle = ({double,setDouble}) => {
    return(
        <View style={styles.radioContainer}>
        <CheckBox
            isChecked={double}
            // style={styles.coffeeSizeItem}
            onPress={()=>{
                setDouble(!double)
            }}
            fillColor={color.whiteCoffee}
            unfillColor={color.lightCoffee}
            height={60}
            width={60}
        >
            <View style={styles.row}>
                <MaterialCommunityIcons name="coffee" size={24} color="black" />
                <MaterialCommunityIcons name="coffee" size={24} color="black" />
            </View>
        </CheckBox>
            </View>
    )
}