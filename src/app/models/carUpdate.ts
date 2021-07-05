import { CarImage } from "./carImage";

export interface CarUpdate{

    id:number;
    carName :string;
    brandName:string;
    colorName:string;
    modelYear:number;
    dailyPrice:number;
    brandId: number;
    colorId: number;
    carImage:CarImage[]


}


