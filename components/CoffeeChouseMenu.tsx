import {View, Text, Button, Touchable, Pressable, TouchableOpacity} from "react-native";
import React from "react";
import {
    CoffeeDoubleToggle,
    CoffeeSizeChoose,
    CoffeeStrengthChoose,
    MilkChoose
} from "./coffee-menu";
import {color, styles} from "./styles";
import {coffeeDto} from "../helpers/coffee.dto";
import {sizeENUM, strengthENUM} from "../helpers/consts";

export const CoffeeChouseMenu = ({submit}) => {
    const [coffee, setCoffee] = React.useState(new coffeeDto())
    const addCoffee = () => {
        submit(coffee)
    }
    const setSize = (size:sizeENUM) => {
        setCoffee({...coffee, size})
    }
    const setStrength = (strength:strengthENUM) => {
        setCoffee({...coffee, strength})
    }
    const setDouble = (double:boolean) => {
        setCoffee({...coffee, double})
    }
    const setMilk = (milk:boolean) => {
        setCoffee({...coffee, milk})
    }
    return(
        <View style={styles.coffeeMenu}>
            <Text style={styles.textWhite}>Add Coffee</Text>
            {/*<Text>size: {coffee.size}</Text>*/}
            {/*<Text>strength: {coffee.strength}</Text>*/}
            {/*<Text>double: {coffee.double ? "yes" : "no"}</Text>*/}
            {/*<Text>milk: {coffee.milk ? "yes" : "no"}</Text>*/}
                <View style={styles.coffeeSubmenu}>
            <CoffeeSizeChoose size={coffee.size} setSize={setSize}/>
                    <CoffeeDoubleToggle double={coffee.double} setDouble={setDouble}/>
                    <MilkChoose milk={coffee.milk} setMilk={setMilk}/>
            <CoffeeStrengthChoose strength={coffee.strength} setStrength={setStrength}/>
            {/*<View style={styles.row}>*/}
            {/*</View>*/}
            </View>
            <TouchableOpacity style={styles.button} onPress={addCoffee}>
                <Text style={{}}>submmit</Text>
            </TouchableOpacity>
        </View>
    )
}