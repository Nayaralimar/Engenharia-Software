let botao = document.getElementById("teste");

document.getElementById("teste").addEventListener("click", function(e){
    e.preventDefault();

    carro.marca = document.getElementById("campoMarca").value;
    carro.modelo = document.getElementById("campoModelo").value;
    carro.ano = document.getElementById("campoAno").value;
    carro.cor = document.getElementById("campoCor").value;
    carro.km = document.getElementById("campoKm").value;
    carro.valor = document.getElementById("campoValor").value;

    console.log(carro.valorMercado());
    document.getElementById("resultado").innerHTML = carro.anosUtilizacao()+" Anos";
    document.getElementById("resultado1").innerHTML = "R$"+carro.valorMercado();

})
    
let carro = {
    marca: "",
    modelo: "",
    ano: 1,
    cor: "",
    km: 1,
    valor: 1,
    anosUtilizacao: function(){
        const dataAtual = new Date();
        const anoAtual = dataAtual.getFullYear();
        if (this.ano < anoAtual){
            return anoAtual - this.ano;
        }
	},
	valorMercado: function(){
		if(this.km <= 30000){
            let rel = this.valor * 1.1
            return rel;
        }
        else if(this.km > 30000 && this.km <= 50000){
            let rel = this.valor
            return rel;
        }
        else{
            let rel = this.valor * 0.9
            return rel
        }

	}
};