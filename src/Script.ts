import PromptSync = require ('prompt-sync'); 
import { Drink } from "./Drinks"; 
import { Client } from './client';

const prompt = PromptSync ();

const name = prompt ('Digite seu nome, ');
const age = prompt ('Digite sua idade, ');


if (age>18) {

    console.log ('Olá Dev! Temos um catálogo de drinks com e sem álcool disponível para você!') 
// colocar no else o ERROR e exibir a mensagem "Olá pequeno Padawan, vimos que você é menor de idade, mas não fique bugado, temos drinks deliciosos sem álcool!" **

} else {
    console.log ('Olá pequeno Padawan! Vimos que você é menor de idade, mas não fique bugado, temos uma lista de drinks sem álcool para você!')
}

const hasAlcohol = Boolean (prompt ('Deseja drink com Alcohol? ')); 


// Encaminhar a lista dos drinks com álcool e sem álcool **


const numberDrink = Number (prompt('Digite o código do seu drink: '))
// Trabalhar com vetores que irão armazenar a escolha dos drinks **
// Trazer a função drinks para cá - a constante de armazenamento já foi criada qntDrinks **

const size = Number (prompt('De qual tamanho você quer que seja o seu drink?'));
// foi criado uma variável de armazenamento dos preços // price ** 

 

    console.log(``); 
 
