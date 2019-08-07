export class Product {
   public name? : string;
   public  img? : string; 
   public  category : string;
   public price : number; 
   public discription : string;
   public page : number;
   public comment : string[];
}


export enum Categories {
    All = "All",
    Drinks = "Drinks",
    Food = "Food",
    Snacks = "Snacks"
    
} 