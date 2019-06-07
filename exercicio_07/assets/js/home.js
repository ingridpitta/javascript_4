const checkUser = () =>{
    //Verificar s eo usuário já está logado;
    if(localStorage.getItem("token")){
    getUser()
    // Se tiver token buscar as informações do usuário;
    }else{
    // Senão voltar para a tela de login;
    window.location.href = "index.html"
    }
}

//Chamar API
const getUser = () => {
    //API de dados do usuário;
    fetch("https://randomuser.me/api/")
    //Resposta em JSON;
    .then(response => response.json())
    //Conversão para objeto Javascript para que possamos acessar;
    .then(objJavascript => {
    //Exibe os dados no HTML a partir da função criarPainel;
    document.getElementById("profile").innerHTML = criarPainel(objJavascript.results[0])
    document.getElementById("username").innerHTML = objJavascript.results[0].name.first
    })
    //Caso não consiga acessar a API mostrar a msg de erro;
    .catch(erro => console.log(erro))
}

//Criar HTML inserindo informações do objeto carregado na api acima
const criarPainel = (user) => {
    // ${x.xy.xz} acessar informações no objeto;
    console.log(user)
    return `<div class=" panel text-center padding">
    <figure class="image is-128x128 margin-auto padding">
      <img src="${user.picture.medium}" alt="" class="is-rounded">
    </figure>

    <div class="content">
      <p>
        <strong>${user.name.first} ${user.name.last}</strong>
        <br>
        <i class="fas fa-mobile-alt"></i>
        <small>cel ${user.cell}</small>
      </p>
    </div>

    <div>
      <button class="button is-warning" onclick="testarApi()">Testar API</button>
    </div>

    <div class="content column">
      <div class="column">
        <div><i class="far fa-envelope"> ${user.email}</i></div>
      </div>
    </div>
    
    <div class="column">
      <div><i class="fas fa-map-marker-alt"> ${user.location.street} - ${user.location.city} / ${user.location.state} ${user.location.postcode}</i></div>
    </div>

    <div class="column">
      <div><i class="far fa-calendar"> ${user.dob.date}</i></div>
    </div>

    <div class="content padding">
      <button class="button is-danger" onclick="signOut()">
        Sair
      </button>
    </div>

    </div>

  </div>`
}

//Botão testar API
const testarApi = () => {
//Por default o fetch é GET;
//Especifica o endpoint usado; 
fetch("https://lais-api-reprograma.herokuapp.com/resource",{
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        //Aturozação para acessar recurso
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
}) 
.then(res => res.json())
.then(result => console.log(result))
.catch(erro => console.log(erro))
}

//Redirecionar para a tela de login (index)
const signOut = () => {
    localStorage.clear()
    window.location.href = "index.html"
}

//Executar a checkUser para verificar se o usuário possui token e deve estar ou não logado;
//Questão de segurança;
checkUser();

