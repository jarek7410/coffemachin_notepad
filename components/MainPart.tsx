import React, {useState} from "react";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import {CoffeeList} from "./CoffeeList";
import {CoffeeChouseMenu} from "./CoffeeChouseMenu";
import {coffeeDto} from "../helpers/coffee.dto";

export const MainPart = () => {
    const [coffeeTable,setCoffeeTable]=useState([])
    const [screen,setScreen]=useState("addCoffee")

    const insets = useSafeAreaInsets();

    const addCoffee=(coffee:coffeeDto)=>{
        console.log(coffee)
        setCoffeeTable([coffee,...coffeeTable])
    };
    return(
        <>
            <View style={[styles.row,{
                width:"100%",
                justifyContent:"flex-start",
                marginTop:insets.top,
            }]}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>
                        setScreen("addCoffee")}>
                    <Text>Add Coffee</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>
                        setScreen("listCoffee")}>
                    <Text>Coffee list</Text>
                </TouchableOpacity>
            </View>

            {screen==="listCoffee"&&
                <CoffeeList coffeeTable={coffeeTable} setCoffee={setCoffeeTable}/>
            }
            {screen==="addCoffee"&&
                <CoffeeChouseMenu submit={addCoffee}/>
            }
        </>
    )
}