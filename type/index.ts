import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title : string ;
    containerStyles?: string;
    btnType ?: "button" | "submit" ;
    handleClick?: MouseEventHandler <HTMLButtonElement>;
    rightIcon?: string;
    textStyle?: string
}

export interface SearchManufacturerProps {
   manufacturer : string ;
   setManufacturer : (manufacurer : string )=> void
}



export interface CarProps {
    city_mpg:number;
// lass:string;
combination_mpg:number;
cylinders:number;
displacement:number;
drive:string;
fuel_type:string;
highway_mpg:number;
make:string;
model:string;
transmission:string;
year:number;
}

export interface CarCardDetails {
 isOpen : boolean ; closeModel : ( )=> void ; car : CarProps 
}