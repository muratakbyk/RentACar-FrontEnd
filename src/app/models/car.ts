import { CarImage } from "./carImage";

export interface Car{

    id:number;
    brandName:string;
    colorName:string;
    carName :string;
    modelYear:number;
    dailyPrice:number;
    carImage:CarImage[]

}