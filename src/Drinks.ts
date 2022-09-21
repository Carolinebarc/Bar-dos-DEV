

abstract class Drink {

    public hasAlcohol: boolean;
    public codDrink: number 
    public size: string;
    public qntDrinks: number 
    public price: number 


   
    constructor ( hasAlcohol: boolean, size: string, price: number, codDrink: number) {

        this.hasAlcohol = hasAlcohol
        this.codDrink = codDrink
        this.size = size
        this.price = price 
    }

   
    }
      
      export { Drink }; 
