/*
    Prototype
    * prototype-based language
    * prototype chain
    * __proto__
===
      Type conversion (Typecasting) VS Type coersion
    * Alteração de um tipo de dado para outro tipo

      console.log(Number ('9') + 5) tranforma string em number

===
    //Manipulando Strings e Números

    //Transformar string em numero e numero em string

    let string = "123"
    console.log(Number(string))
    let number = 321
    console.log(String(number))

    //Contar quantos caracteres tem uma palavra e quando dígitos tem um número

    let word = "Paralelepipedo"
    console.log(word.length)
    let number = 1234
    console.log(String(number).length)

   // Tranformar um número quebrado com 3 casas decimais e trocar ponto por virgula

    let number = 345.33452345
    console.log(number.toFixed(2).replace(".", ","))

   //Transforme letras minúsculas em maiúsculas, Faça o contrário disso também

   let word = "programar é muito bacana"
   console.log(word.toUpperCase()) //Mairusculo
   console.log(word.toLowerCase())//Minusculo
   console.log(word.toLowerCase().toUpperCase())//cadeia

*** Manipulando Arrays

    // Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, tranforme o array em um texto de onde eram espaços coloque _

    let phrase = "Eu quero viver o Amor!"
    let myArray = phrase.split(" ")
    let phraseWithUnderscore = myArray.join("_")
    console.log(phraseWithUnderscore)
    

    let phrase = "Eu quero viver o Amor!"
    console.log(phrase.includes("Amor"))
    

    //Criar Array com construtor

    let myArray = new Array ('a', 'b', 'c')
    console.log(myArray)
    

    // Contar elementos de um array

    console.log(["a", "b", "c"].length)

   

    // Transformar uma cadeia de caracteres em elemntos de um array

    let word = "manipulação"
    console.log(Array.from(word))

      */
     let techs = ["html", "css", "js"]

     //Adicionar item no fim
     //console.log(techs.push("nodejs"))
     //adicionar no começo
     techs.unshift("sql")
     // remover do fim
     //techs.pop()
     //remover do começo
     //techs.shift()   
     // pegar somente algusn elementos do array
     //console.log(techs.slice(1, 3))
     // remover 1 ou mais items de quaklquer posição do arraay
     //techs.splice(1, 1)
     //encopntrar a posição de um elento no array
     let index = techs.indexOf('css')

     console.log(index)




