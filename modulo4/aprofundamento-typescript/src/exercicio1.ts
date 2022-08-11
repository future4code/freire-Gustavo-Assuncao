// a) 
// ele dá erro, pois ele identifica que minha variavel é um tipo string 
// e escrevi um tipo number
// const minhaString1: string = 2 

// b)
// const meuNumero: number | string = "oi"
// para usarmos number ou SVGStringList, aplicamos o UnionType

// c)
// type Person = {
//     name: string, 
//     age: number, 
//     favoriteColor: string
// }

// d)
// enum Colors {
//     BLUE = "Blue",
//     RED = "Red",
//     YELLOW = "Yellow",
//     GREEN = "Green",
//     }

// const astrodev: Person = {
//     name: "Astrodev",
//     age: 30,
//     favoriteColor: Colors.BLUE
//     }
    
//     console.table(astrodev)