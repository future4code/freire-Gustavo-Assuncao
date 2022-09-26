
describe("Olá, estamos testando",()=>{

    test("O número 100 deve ser maior que 99", ()=>{

        expect(100).toBeGreaterThan(99)

    })

    test("Testando se o valor é menor", ()=>{
        const n = 100
        expect(n).toBeLessThan(101)

    })
    test("Apenas testando o ambiente", ()=>{

        expect(100).toBeGreaterThan(99)

    })

    test("Testando se o valor é menor", ()=>{
        const n = 100
        expect(n).toBeLessThan(101)

    })

    //toBe
    test("10 multiplicado por 2 deve ser 20",()=>{
        const n = getNum()
        expect(n).toBe(20)

    })
    //
    test ("Verificar se existe um gato no array",()=>{
        const arrayDebichos = getAnimals()
        
        expect(arrayDebichos).toContain("Cachorro caramelo")

    })

    test("Verificando a task no array de tasks",()=>{

        const task:ITask = {
            id:"2",
            name:"Estudar jest"
        }
        expect(tasks).toContainEqual(task)


    })

    test("Verificando se número é par",()=>{

        expect(isEven(10)).toBe(true)

    })


})

interface ITask {
    id: string,
    name: string
}

const tasks: ITask[] =[
    {
        id:"1",
        name:"Fazer o rango"

    },
    {
        id:"2",
        name: "Estudar jest"
    }
]

const isEven=(integer: number)=>{
   return integer%2==0
}



const getAnimals =()=>{
    return (["Pato","Cachorro caramelo","Gato"])
}

const getNum=()=>{
    return 20
}