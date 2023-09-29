import { StyleSheet } from 'react-native';
export const color = {
    coffee: "#6f4e37",
    lightCoffee: "#d5bba9",
    whiteCoffee:"#a27250",
    milk: "#f5f5f5",
    primary: "#6f4e37",
    secondary: "#d5bba9",
    tridicA:"#376f4e",
    tridicB:"#4e376f",
    analogusA:"#6f373c",
    analogusB:"#6f6a37",
}
export const styles = StyleSheet.create({
    radioContainer: {
        flexShrink: 1,
        flexDirection: "row",
        color:color.milk,
        borderColor:color.milk,
        borderWidth:1,
        borderRadius:10,
        margin:10,
        minWidth:50,
    },
    textWhite: {
        color:color.milk,
    },
    coffeeMenu: {
        backgroundColor:color.primary,
        alignItems: "center",
        margin: 10,
    },
    coffeeSubmenu: {
        flexDirection: "row",
        // width: "90%",
        // height: "90%",
        flexWrap: "wrap",
        // justifyContent: "center",
    },
    coffeeSizeItem: {
        backgroundColor:color.lightCoffee,
        width:60,
        height:60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 2,
    },
    row: {
        flexDirection: "row",
    },
    submit: {
        backgroundColor:color.secondary,
        width: 100,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        margin:2,
        borderRadius: 10,
    },
    container: {
width:"100%",        backgroundColor: '#fff',
        height:"100%",
        alignItems: 'center',
        // justifyContent: 'center',
    },
    button:{
        backgroundColor:color.secondary,
        width: 100,
        height: 50,
        margin: 2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    coffeeItem: {
        backgroundColor:"#3c2a1e",
        margin:10,
        width: 150,
        padding:5,
        borderRadius: 10,
    }, coffeeList: {
        flexWrap: "wrap",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        backgroundColor:color.primary,
        alignItems: "flex-start",
        marginTop: 10,
    }

})