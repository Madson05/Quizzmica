let nivel = 1;
let listaNivel = [];
let questaoEsc
let classAlternativas = document.getElementsByClassName("alternativa")
let pontos = 0;
let jogadas = 0;



function questions(){




    let listaDeQuestoes = [
        
        {
            enunciado: "Essa cadeia é: ",
            alternativas: ["Normal", "Ramificada", "Normal e ramificada", "Nenhuma das alternativas acima"],
            resposta: 1,
            nivel: 1 ,
            imagem: "../images/EstaCadeia.png",
        
        },
        
        {
            enunciado: "Qual dessas opções o nome da estrutura está incorreta: ",
            alternativas: ["CH2=CH-CH3 (propeno)", "H3C-CH=CH-CH3 (but-2-eno)", "CH3-CH3 (etano)", "CH3-CH2-CH2-CH2-CH3 (penteno)"],
            resposta: 4,
            nivel: 1,
            imagem: null
        
        },
        
        {
            enunciado: "Qual é a fórmula molecular do HEX-2-ENO: ",
            alternativas: ["C12H6", "C6H10", "C7H12", "C6H12"],
            resposta: 4,
            nivel: 1,
            imagem: null
        
        },
        
        {
            enunciado: "A nomeclatura correta da seguinte estrutura é: ",
            alternativas: ["but-4-eno", "buteno", "but-1-eno", "butano"],
            resposta: 3,
            nivel: 1,
            imagem: "../images/AMomenclaturaCorretaDa.png"
        
        
        
        },
        
        {
            enunciado: "A estrutura abaixo é um: ",
            alternativas: ["isopropil", "isobutil", "isopropenil", "metil"],
            resposta: 2,
            nivel: 1,
            imagem: "../images/AEstruturaAbaixoEUm.png",
        },
        

        {
            enunciado: "Qual a nomenclatura do composto a seguir:",
            alternativas: ["epoxibutano", "1,2-epoxi-2-metilpropano", "epoxi-2-metilbutano","1,2-epoxi-2-metilbutano"],
            resposta: 4,
            nivel: 2,
            imagem: "../images/QualaMomenclaturaDoCompostoaSeguir.png",
        },


        
        {
            enunciado : `Nome da fórmula estrutural abaixo:`,
            alternativas : ["Propano-1,3-diamina", "Propano-1,2,3-triamina", "3-metilpropan-1-amina", "Etilmetilamina" ], 
            resposta: 3,
            nivel: 3,
            imagem: "../images/NomeDaFormulaEstruturalAbaixo.png"
        },


        {
            enunciado: "(PUC-RJ) A seguir está representada a estrutura da dihidrocapsaicina, uma substância comumente encontrada em pimentas e pimentões. Na dihidrocapsaicina, está presente, entre outras, a função orgânica:",
            alternativas: ["Álcool.", "Amina.", "Amida.", "Éster."],
            resposta: 3,
            nivel: 3,
            imagem: "../images/ASeguirEstaRepresentadaAEstruturaDaDihidrocapsaicina.PNG"

        },


        {
            
            enunciado: "(PUC-MG) O princípio ativo dos analgésicos comercializados com nomes de Tylenol, Cibalena, Resprin é o paracetamol, cuja fórmula está representada a seguir. O princípio ativo dos analgésicos comercializados com nomes de Tylenol, Cibalena, Resprin é o paracetamol, cuja fórmula está representada a seguir",
            alternativas: ["Fenol, cetona e amina.", "Álcool, cetona e amina.", "Álcool e amida.", "Fenol e amida."],
            resposta: 4,
            nivel: 3,
            imagem: "../images/OPrincípioAtivoDosAnalgésicos.jpeg"
        },
        
        
        {
           
            enunciado: "A camada de ozônio (cinturão de Van Allen), que protege a biosfera do efeito nocivo de certas radiações, sofre ataque destrutivo dos CFC (clorofluorcarbono) usados em aerossóis e refrigeração, por exemplo. O mais usado, freon-12, de fórmula molecular CF2Cℓ2, pertence à função:",
            alternativas: ["hidrocarboneto", "cloreto de ácido", "haleto orgânico.", "hidrocarboneto insaturado."],
            resposta: 3,
            nivel: 3,
            imagem: null
        },

        
        
        {
            
            enunciado: "Hidrocarbonetos halogenados, usados em aerossóis, são também responsáveis pela destruição da camada de ozônio da estratosfera. São exemplos de hidrocarbonetos halogenados:",
            alternativas: ["CH2Cℓ2 e CH3CH3","CH3COCℓ e CH3OCH3Cℓ", "CFCℓ3 e CHCℓ3.", "CH3NH2 e CFCℓ3."],
            resposta: 3,
            nivel: 3,
            imagem: null
        },

        
        
        {
            
            enunciado: "(Unitau) O composto apresenta radicais que caracterizam Apresenta radicais que caracterizam:",
            alternativas: ["Álcool e aminoácido.", "Fenol e ácido.", "Álcool e amina.", "Álcool e amida."],
            resposta: 3,
            nivel: 3,
            imagem: "../images/OcompostoApresenta.jpeg"
        },

        {
            enunciado: "Dê o nome da seguinte formula estrutural:",
            alternativas: ["Ácido 2-aminopropanoico", "Ácido 1,1-amino-3-oico", "Ácido propanoico-1-amino", "Ácido butanoico"],
            resposta: 1,
            nivel: 3,
            imagem: "../images/DeoNomeDaSeguinteFormulaEstrutural.jpeg"
        
        },
        
        {
            enunciado: "Qual a função existente nessa estrutura: CH3-O-CH2-CH3",
            alternativas: ["Eter", "Éster", "Álcool", "Haleto"],
            resposta: 1,
            nivel: 2,
            imagem: "../images/QualaFuncaoExistente.png"
        
        },
        
        {
            enunciado: "Nome da fórmula estrutural abaixo:",
            alternativas: ["Propanoato de fetila", "Etanoato de etila", "Aceto de etila", "Propenoato"],
            resposta: 2,
            nivel: 2,
            imagem: "../images/NomeDaFormulaEstruturalAbaixoNiv2.png"
        },
        
        {
           enunciado: "Qual a função do composto abaixo: ",
           alternativas: ["Aldeido", "Álcool", "Ceteno", "Ácido carboxílico"], 
           resposta: 1,
           nivel: 2,
           imagem: "../images/QualAFuncaoAldeidodoCompostoAbaixo.png"
        },
        
        {
            enunciado: "Como é classicada uma molécula de álcool que apresenta apenas uma hidroxila?",
            alternativas: ["Monoálcool", "Álcool", "Glicol", "Polióis" ],
            resposta: 1,
            nivel: 2,
            imagem: null,
        
        },

        {
            enunciado: "Identifique nessa estrutura os grupos funcionais:",
            alternativas: ["Álcool, cetona e fenol.", "Fenol e amina.", "Cetona, amida e fenol", "Cetona, amina e fenol"],
            resposta: 2,
            nivel: 3,
            imagem: "../images/IdentifiqueNessaEstruturaOsGruposFuncionais.jpeg"
        
        },
        
        

        
    
    ];
    return listaDeQuestoes;

}

function separador() {
    let qtdeQuestions = 0;
    let lista = questions();
    let lista_level = []

    while(qtdeQuestions < 5){

        let numeroQ = Math.floor(Math.random() * lista.length);
        questao = lista[numeroQ];
        

        if(questao.nivel == nivel && (lista_level.includes(questao) == false)){
            lista_level.push(questao)
            qtdeQuestions++;
        }

        
    }
    return lista_level;
}

function pegaQuestion(){
    
    
    let questao;
    let numeroQ = null;
    if(listaNivel.length == 0){
        listaNivel = separador();
        
    
        numeroQ = Math.floor(Math.random() * listaNivel.length);
        questao = listaNivel[numeroQ];
        listaNivel.splice(listaNivel.indexOf(questao), 1);
    }

    else{
        numeroQ = Math.floor(Math.random() * listaNivel.length);
        questao = listaNivel[numeroQ];
        listaNivel.splice(listaNivel.indexOf(questao), 1);

    }

    return questao;
}


function respondeu(botaoApertado){

    
    

    for(let i =0; i<classAlternativas.length; i++){
        if(i+1 != botaoApertado){
            if(classAlternativas[i].disabled==false){
                classAlternativas[i].disabled = true
            }
            else{
                classAlternativas[i].disabled = false
            }
            

        }
        
    }
    jogadas++;
    if(pontos >= 40 && jogadas >= 3){
        nivel++;
        listaNivel = [];
        pontos = 0
        
    }

    else if(jogadas == 3){
        listaNivel = []
        pontos = 0

    }
    setTimeout(() => { separaDados() }, 2000);


    


}

function separaDados(){
    
    let areaImagem = document.getElementById("imagem")
    let areaNivel = document.getElementById("nivel")
    let areaPOntos = document.getElementById("pontuacao")
    let areaEnunciado = document.getElementById("enunciado")

    

    for(let i =0; i<classAlternativas.length; i++){
        classAlternativas[i].style.backgroundColor = "white"
        classAlternativas[i].disabled=false
    }
    document.getElementById("imagem").innerHTML=``
    
    questaoEsc = pegaQuestion();
    
    areaEnunciado.innerHTML = `${questaoEsc.enunciado}`
    areaNivel.innerHTML = `Nivel: ${nivel}`
    areaPOntos.innerHTML = `Pontuação: ${pontos} pontos`
    if(questaoEsc.imagem!= null){
        areaImagem.innerHTML=`<img src="${questaoEsc.imagem}" alt="">`

    }

    for(let i = 0; i<questaoEsc.alternativas.length; i++){
        
        let alt = document.getElementById(`a${i+1}`);
        alt.innerHTML = `${questaoEsc.alternativas[i]}`
    }

    


}

separaDados()



function button1(){
    let divpintar = document.getElementById("a1")
    if(questaoEsc.alternativas[0] == questaoEsc.alternativas[questaoEsc.resposta-1]){
        divpintar.style.backgroundColor = "green";
        pontos += 20
    }
    else{
        divpintar.style.backgroundColor = "red";
    }

    respondeu(1)

    

    

}

function button2(){
    let divpintar = document.getElementById("a2")
    if(questaoEsc.alternativas[1] == questaoEsc.alternativas[questaoEsc.resposta-1]){
        divpintar.style.backgroundColor = "green";
        pontos += 20
    }
    else{
        divpintar.style.backgroundColor = "red";
    }
    respondeu(2)
}


function button3(){
    let divpintar = document.getElementById("a3")
    if(questaoEsc.alternativas[2] == questaoEsc.alternativas[questaoEsc.resposta-1]){
        divpintar.style.backgroundColor = "green";
        pontos += 20
    }
    else{
        divpintar.style.backgroundColor = "red";
    }
    respondeu(3)
}
function button4(){
    let divpintar = document.getElementById("a4")
    if(questaoEsc.alternativas[3] == questaoEsc.alternativas[questaoEsc.resposta-1]){
        divpintar.style.backgroundColor = "green";
        pontos += 20
        
    }
    else{
        divpintar.style.backgroundColor = "red";
    }
    respondeu(4)
}




separaDados();





