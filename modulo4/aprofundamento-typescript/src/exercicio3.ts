
type post = {
    autor: string, 
    texto: string 
}
const posts = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

//   enum Autor {
//     Voldemort = "Lord Voldemort",
//     Dobby = "Dobby"
// }

// function buscarPostsPorAutor(posts: string[], autorInformado: string) {
//   return posts.filter(
//     (post) => {
//       return post.Autor === autorInformado
//     }
//   )
// }