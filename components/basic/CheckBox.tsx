import React from "react";
import {Pressable, View,Text} from "react-native";
import styles from "./checkbox.styles";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export const CheckBox = ({
                             textStyle={},
                             text="",
                             isChecked,
                             onPress=undefined,
                             borderRadius=5,
                             fillColor,
                             unfillColor,
                             children,
                             visible=true,
                             height=30,
                             width=30,
                         })=>{
    return(

        <MyCheckbox
            textStyle={textStyle}
            text={text}
            onPress={onPress}
            isChecked={isChecked}
            borderRadius={borderRadius}
            fillColor={fillColor}
            unfillColor={unfillColor}
            fill={children}
            unfill= {children}
            width={width}
            height={height}
            visible={visible}
        />
    )
}
export const MyCheckbox = ({
                               textStyle={},
                               text="",
                               isChecked,
                               onPress=undefined,
                               borderRadius=5,
                               fillColor,
                               unfillColor,
                               fill= <MaterialCommunityIcons name="check" style={{color:"grey"}}/>,
                               unfill =<></>,
                               width=30,
                               height=30,
                               visible=true
                           })=>{
    return(
        <>
            {visible &&
                <Pressable onPress={onPress} >
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <View style={[{margin:2,width:width,height:height,borderColor:fillColor,borderWidth:2,borderRadius:borderRadius}]}>
                            {isChecked&&
                                <View style={{borderRadius:borderRadius-2,backgroundColor:fillColor,height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}}>
                                    {fill}
                                </View>
                            }
                            {isChecked||
                                <View style={{borderRadius:borderRadius-2,backgroundColor:unfillColor,height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}}>
                                    {unfill}
                                </View>
                            }
                        </View>
                        <Text style={[styles.buttonText,textStyle]}>{text&&" "+text}</Text>
                    </View>
                </Pressable>
                ||
                <View style={{height:height,width:width,margin:2}}/>
            }
        </>
    )
}