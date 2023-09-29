import {CheckBox} from "../basic/CheckBox";
import {color, styles} from "../styles";
import {Text, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import React from "react";

export const MilkChoose = ({milk,setMilk}) => {
    return(

        <View style={styles.radioContainer}>
        <CheckBox
            isChecked={milk}
            // style={styles.coffeeSizeItem}
            onPress={()=>{
                setMilk(!milk)
            }}
            fillColor={color.whiteCoffee}
            unfillColor={color.lightCoffee}
            height={60}
            width={60}
        >
            <Text>
                milk
            </Text>
        </CheckBox>
            </View>
    )
}