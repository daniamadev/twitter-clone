//cria classe Twitter
class fetchUsuario {
  //cria metodo para buscar dados pessoais
  buscaDaConta() {
    return fetch("./usuario.json", { method: "get" })
  }
}

class fetchTweets {
  buscaTweets() {
    return fetch("./tweets.json", { method: "get" })
  }
}

class fetchFollow {
  buscaSugestao() {
    return fetch("./follow.json", { metdho: "get" })
  }
}
