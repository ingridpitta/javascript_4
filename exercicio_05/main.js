//Verificar se o número é par ou ímpar;
const parOuImpar= num => num % 2 === 0 ? num + ' é par' : num + ' é ímpar';
//Criar promise a partir do número inserido na const validacao;
const retornaPromise = numero => {
    return new Promise ((resolve,reject) =>{
        //Verificar se o número inserido na const validacao, e que agora entrou na Promise, é par ou ímpar utilizando a const parOuImpar acima;
        const numeroInserido = parOuImpar(numero)
        //Verificar se o número é mesmo um número;
        if(typeof numero != 'number'){
        //Caso o número não seja um número Promise == reject , mostrar valor para reject;
        reject("O valor inserido não é um número!")
        }else{
        //Senão (se for realmente um número), Promise == resolve, depois de 1s chamar a const parOuImpar;
        numeroInserido === true ? setTimeout(() => {resolve(parOuImpar(numero))}, 1000) : setTimeout(() => {resolve(parOuImpar(numero)),1000}) 
        };
    })
};
//Validar o número inserido (data) e mostrar resultado;
const validacao = (data) =>{
    //Chamar a const retornaPromise tendo como atributo o valor inserido (data);
    retornaPromise(data)
    //Se válido cai no resolve que é chamado pelo then e exibe {resultado} + o valor do resolve (que depende da validação das constantes e funções chamadas dentro desta Promise;
    .then(resultado => console.log({resultado}))
    //Se inválido cai no reject que é chamado pelo catch e exibe {erro} + o valor do reject;
    .catch(erro => console.log({erro}))
};