import { CarImage } from "./carImage";

export interface CarDetailDto{
    id:number,
    carName: string,
    brandName: string,
    colorName: string,
    modelYear: number,
    dailyPrice: number
    carImage: CarImage[];

}