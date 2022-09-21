
class Client {
    public name: string;
    public age: number;
    public qntDrinks: number 

  

    public  get drinks () {
        return this.qntDrinks;
    }


    constructor (name: string, age: number) {
        this.name = name
        this.age = age
    }
    
    comprar (qntDrinks: number) {
        this.qntDrinks = qntDrinks; 

        
            
    }   addDrink () {
        this.qntDrinks++; 
        }
        

}

export {Client}
