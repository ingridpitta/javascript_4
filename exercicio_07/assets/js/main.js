const userIput = document.querySelector('#username'); //pega o id do input usuario;
const passwordInput = document.querySelector('#password');//pega o id do input senha;
const form = document.querySelector('#login-form'); //pega o id do form;

//adiciona um evento ao form
form.addEventListener("submit", event => {
  event.preventDefault(); //faz com que a pagina não atualize assim que submetida;
  //verifica se o usuario e senha estão preenchidos;
  if(userIput.value && passwordInput.value){        
      //se os valores existirem chama a função fazer login;
      login()
  } else{
      //senão exibe uma mensagem de erro;
      alert("usuario e senha são obrigatórios")
  }
})

const login = () => {

  const bodyParaEnviar = JSON.stringify({ 
  //coloca o objeto que será transformado em JSON para enviar para API
      user: userIput.value,
      pass : passwordInput.value,
  })
  fetch('https://lais-api-reprograma.herokuapp.com/login', {
      method: 'POST',
      body: bodyParaEnviar,
      headers: {
          /* headers informação que eu tenho sobre a minha 
          # request(requere algo de alguma API)
          # response = a resposta do requrimento
          */
          'Accept' : 'application/json', //o que eu to mandando
          'Content-type' : 'application/json', //o que a API está recebendo
      },
  })

  
  /*
  # .then(response => response.jason())

  # resposta em JSON da API para o que mandei para ela e que transformei em JS(respnse.json()) para acessar as propriedades da API

  ##.then( res => console.log(res)
  ## resposta (response) que transformei em JS que mandei "printar no console"

  */
  .then(response => response.json())
  .then(objetoJava => {
      console.log(objetoJava);
      //Api de login devolve um token e guardo ele no localStorage;
      //localStorage é uma memoria que serve de armazenamento;
      //armazena a senha(token) para que o usuario não a resete;
      //setItem(chave, valor) ==> chave é strg 
      localStorage.setItem('token', objetoJava.token);
      //window.location.href ==> direciona o navegador para a página especificada;
      window.location.href = "home.html"
  })
  //.then( res => console.log(res))//a resposta que transformei em JS que mandei "printar no console"
  .catch(error => console.log(error))
}