const objetoUsuario = new fetchUsuario()
const objetoTweets = new fetchTweets()
const objetoFollow = new fetchFollow()

const objetoMostraUsuario = new jsUsuario()
const objetoPegaTweets = new jsTweets()
const objetoExibeFollow = new jsFollow()

objetoUsuario.buscaDaConta().then(function (resposta) {
  resposta.json().then(function (dados) {
    objetoMostraUsuario.mostraUsuario(dados)
  })
})

objetoTweets.buscaTweets().then(function (resposta) {
  resposta.json().then(function (dados) {
    objetoPegaTweets.mostraTweets(dados)
  })
})

objetoFollow.buscaSugestao().then(function (resposta) {
  resposta.json().then(function (dados) {
    objetoExibeFollow.mostraFollow(dados)
  })
})
