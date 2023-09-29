import React from "react";
import {View, Text, ScrollView, TouchableOpacity} from "react-native";
import {color, styles} from "./styles";

export const CoffeeList = ({coffeeTable=[],setCoffee}) => {
    return(
        <ScrollView>
            <View style={styles.coffeeList}>
                {coffeeTable
                    .map((coffee,index)=>{
                    return(
                        <View key={index} style={styles.coffeeItem}>
                            <Text>
                                {coffee.date.toString()}
                            </Text>
                            <Text style={[styles.textWhite,{fontSize:20}]}>
                                {coffee.size}
                            </Text>
                            <Text style={[styles.textWhite,{fontSize:20,marginLeft:5}]}>
                                {coffee.strength}
                            </Text>
                            <Text style={[styles.textWhite,{fontSize:20}]}>
                                And:{coffee.double ? "double" : ""} {coffee.milk ? "milk" : ""}
                            </Text>

                            {coffee.done &&
                                <>
                                <Text>
                                    done
                                </Text>
                                <TouchableOpacity style={[styles.button, {marginLeft: 60, marginBottom: -10, width: 100,backgroundColor: color.analogusA}]}
                                onPress={
                                () => {
                                coffeeTable.splice(index, 1)
                                // const newCoffee = {...coffee, done: true}
                                setCoffee([...coffeeTable])
                            }
                            }>
                                <Text style={styles.textWhite}>delete</Text>
                                </TouchableOpacity>
                                </>
                            }

                            {coffee.done ||
                                <>
                                    <TouchableOpacity style={[styles.button, {marginLeft: 60, marginBottom: -10, width: 100}]}
                                                      onPress={
                                                          () => {
                                                              coffeeTable.splice(index, 1)
                                                              const newCoffee = {...coffee, done: true}
                                                              setCoffee([...coffeeTable, newCoffee])
                                                          }
                                                      }>
                                        <Text style={styles.textWhite}>Done</Text>
                                    </TouchableOpacity>
                                </>
                            }
                        </View>
                    )
                })}
            </View>
        </ScrollView>
    )
}