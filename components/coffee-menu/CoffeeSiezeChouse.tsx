import {Text, View} from "react-native";
import React from "react";
import {color, styles} from "../styles";
import {CheckBox} from "../basic/CheckBox";
import {sizes} from "../../helpers/consts";
// import i18n from "../translations/localized";

export const CoffeeSizeChoose = ({setSize,size}) => {

    return (
        <View style={styles.radioContainer}>
            {sizes.map(({text,key})=>{
                    return(
                        <CheckBox
                            key={key}
                            isChecked={key===size}
                            // style={styles.coffeeSizeItem}
                            onPress={()=>{
                                setSize(key)
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
                    )})}
        </View>
    )
}
{/*// {return()})}*/}