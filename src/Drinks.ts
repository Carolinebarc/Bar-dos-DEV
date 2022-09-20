abstract class Drink {
    public name: string;
    public hasAlcohol: boolean;
    public size: string;

    constructor (name: string, hasAlcohol: boolean, size: string) {
        this.name = name
        this.hasAlcohol = hasAlcohol
        this.size = size
    }
}