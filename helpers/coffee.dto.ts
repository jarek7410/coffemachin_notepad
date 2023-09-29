import {sizeENUM, strengthENUM} from "./consts";

export class coffeeDto{
    date=new Date();

    strength:strengthENUM=strengthENUM.m;
    size: sizeENUM=sizeENUM.m;
    double:boolean=false;
    milk: boolean=false;
    done: boolean=false;
}