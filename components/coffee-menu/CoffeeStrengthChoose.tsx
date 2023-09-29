import {Text, View} from "react-native";
import {strengths} from "../../helpers/consts";
import {color, styles} from "../styles";
import {CheckBox} from "../basic/CheckBox";
import React from "react";

export const CoffeeStrengthChoose = ({strength,setStrength}) => {
    return(
        <View style={styles.radioContainer}>
            {strengths.map(({key,text})=>{
                return(
                    <CheckBox
                        key={key}
                        isChecked={key===strength}
                        onPress={()=>{
                            setStrength(key)
                        }}
                        borderRadius={25}
                        fillColor={color.whiteCoffee}
                        unfillColor={color.lightCoffee}
                        height={60}
                        width={60}
                    >
                        <Text>
                            {text}
                        </Text>
                    </CheckBox>
                )
            })}
        </View>
    )
}