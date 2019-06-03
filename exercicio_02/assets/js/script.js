class Botao{
    constructor(cor, tamanho, texto){
        this.cor = cor,
        this.tamanho = tamanho,
        this.texto = texto;
    }

    desenhaBotao(local){
        const novoBotaoNoDom = document.createElement("button");
        novoBotaoNoDom.setAttribute("class", `${this.cor}`,`${this.tamanho}`);
        novoBotaoNoDom.innerHTML = this.texto;
        document.getElementById("buttonsSection").appendChild(novoBotaoNoDom);
        console.log(novoBotaoNoDom);
    }


}

// const novoBotao = new Botao("verde", "grande","Click,me!");
// novoBotao.desenhaBotao();

// const botaoRoxo = new Botao("roxo", "pequeno","Click,me!");
// botaoRoxo.desenhaBotao();

const botaoRoxoFillDarkLarge = new Botao("roxoFillDarkLarge", "pequeno","DEFAULT");
botaoRoxoFillDarkLarge.desenhaBotao();

const botaoRoxoFillLightLarge = new Botao("roxoFillLightLarge", "pequeno","DEFAULT");
botaoRoxoFillLightLarge.desenhaBotao();

const botaoRoxoUnfillLightLarge = new Botao("roxoUnfillLightLarge", "pequeno","DEFAULT");
botaoRoxoUnfillLightLarge.desenhaBotao();

const botaoRoxoNoBorderLarge = new Botao("roxoNoBorderLarge", "pequeno","DEFAULT");
botaoRoxoNoBorderLarge.desenhaBotao();