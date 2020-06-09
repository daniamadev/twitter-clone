//define a classe card
class jsUsuario {
  constructor() {
    this.quantidade_tweets = document.getElementById("quantidade_tweets")
    this.seguindo = document.getElementById("seguindo")
    this.seguidores = document.getElementById("seguidores")
    this.likes = document.getElementById("likes")

    this.nome = document.getElementById("nome")
    this.usuario = document.getElementById("usuario")
    this.local = document.getElementById("local")
    this.cadastro = document.getElementById("cadastro")
  }
  //monta o HTML da página Twitter
  mostraUsuario(dados) {
    this.quantidade_tweets.innerText = `${dados[0].quantidade_tweets}`
    this.seguindo.innerText = `${dados[0].seguindo}`
    this.seguidores.innerText = `${dados[0].seguidores}`
    this.likes.innerText = `${dados[0].likes}`

    this.nome.innerText = `${dados[0].nome}`
    this.usuario.innerText = `${dados[0].usuario}`
    this.local.innerText = `${dados[0].local}`
    this.cadastro.innerText = `${dados[0].cadastro}`
  }
}

class jsTweets {
  constructor() {
    this.tweets = document.querySelector("#tweets_timeline")
  }

  mostraTweets(dados) {
    let card = ""
    dados.forEach(function (dado) {
      card += `
      <li class="tweet-card">
        <div class="tweet-content">
         
          <div class="tweet-header">
          <span class="fullname"><strong>${dado.nome}</strong></span>
          <span class="username">${dado.usuario}</span>
          <span class="tweet-time">${dado.data}</span>
        </div>
        <a>
          <img class="tweet-card-avatar" src="${dado.imagem}" alt="">
        </a>
        <div class="tweet-text">
          <p class="" lang="es" data-aria-label-part="0">${dado.mensagem}</p>
        </div>
        <div class="tweet-footer">
          <a class="tweet-footer-btn">
            <i class="octicon octicon-comment" aria-hidden="true"></i><span>${dado.comentarios}</span>
          </a>
          <a class="tweet-footer-btn">
            <i class="octicon octicon-sync" aria-hidden="true"></i><span>${dado.compartilhamentos}</span>
          </a>
          <a class="tweet-footer-btn">
            <i class="octicon octicon-heart" aria-hidden="true"></i><span>${dado.likes}</span>
          </a>
        </div>
        </div>
        </li>
          `
    })
    this.tweets.innerHTML = card
  }
}

class jsFollow {
  constructor() {
    this.whofollow = document.querySelector("#whofollow")
  }

  mostraFollow(dados) {
    let card = ""
    dados.forEach(function (dado) {
      console.log(dado)

      card += `
      <ol class="tweet-list">
      <li class="tweet-card">
        <div class="tweet-content">
          <img class="tweet-card-avatar" src="${dado.imagem}" alt="">
          <div class="tweet-header">
            <span class="fullname">
              <strong>${dado.nome}</strong>
            </span>
            <span class="username">${dado.usuario}</span>
          </div>

          <button class="btn btn-follow">Follow</button>
        </div>
      </li>
    </ol>
          `
    })
    this.whofollow.innerHTML = card
  }
}
