let nivel = 5;
var listaNivel = [];
let questaoEsc
let classAlternativas = document.getElementsByClassName("alternativa")
let pontos = 0;



function questions(){




    let listaDeQuestoes = [
        
        {
            
            enunciado: "A fórmula estrutural da metanamina é:",
            alternativas : ["CH3—NH2",
            ` H3C—CH—CH3
                  |    
                 NH2`,
            `H3C—CH2—NH2`,
            `H3C—CH2—CH2
                      |
                     NH2 ` ], 
            resposta: 1,
            nivel: 5
        },


        {
            
            enunciado : `Nome da fórmula estrutural abaixo:
            
            
     NH2
      |
     H2C—CH2—CH—CH3
              |
             CH2
`,
            alternativas : ["Propano-1,3-diamina", "Propano-1,2,3-triamina", "3-metilpropan-1-amina", "Etilmetilamina" ], 
            resposta: 3,
            nivel: 5,
        },


        {
            
            enunciado: "(PUC-RJ) A seguir está representada a estrutura da dihidrocapsaicina, uma substância comumente encontrada em pimentas e pimentões. A seguir está representada a estrutura da dihidrocapsaicina, uma substância comumente encontrada em pimentas e pimentões. Na dihidrocapsaicina, está presente, entre outras, a função orgânica:",
            alternativas: ["Álcool.", "Amina.", "Amida.", "Éster."],
            resposta: 3,
            nivel: 5,
        },


        {
            
            enunciado: "(PUC-MG) O princípio ativo dos analgésicos comercializados com nomes de Tylenol, Cibalena, Resprin é o paracetamol, cuja fórmula está representada a seguir. O princípio ativo dos analgésicos comercializados com nomes de Tylenol, Cibalena, Resprin é o paracetamol, cuja fórmula está representada a seguir",
            alternativas: ["Fenol, cetona e amina.", "Álcool, cetona e amina.", "Álcool e amida.", "Fenol e amida."],
            resposta: 4,
            nivel: 5,
        },
        
        
        {
           
            enunciado: "A camada de ozônio (cinturão de Van Allen), que protege a biosfera do efeito nocivo de certas radiações, sofre ataque destrutivo dos CFC (clorofluorcarbono) usados em aerossóis e refrigeração, por exemplo. O mais usado, freon-12, de fórmula molecular CF2Cℓ2, pertence à função:",
            alternativas: ["hidrocarboneto", "cloreto de ácido", "haleto orgânico.", "hidrocarboneto insaturado."],
            resposta: 4,
            nivel: 5,
        },

        
        
        {
            
            enunciado: "Hidrocarbonetos halogenados, usados em aerossóis, são também responsáveis pela destruição da camada de ozônio da estratosfera. São exemplos de hidrocarbonetos halogenados:",
            alternativas: ["CH2Cℓ2 e CH3CH3","CH3COCℓ e CH3OCH3Cℓ", "CFCℓ3 e CHCℓ3.", "CH3NH2 e CFCℓ3."],
            resposta: 3,
            nivel: 6,
        },

        
        
        {
            
            enunciado: "(Unitau) O composto: O composto apresenta radicais que caracterizam Apresenta radicais que caracterizam:",
            alternativas: ["Álcool e aminoácido.", "Fenol e ácido.", "Álcool e amina.", "Álcool e amida."],
            resposta: 3,
            nivel: 6,
        },
        
        
        
        {
            
            enunciado: "(Unitau) O composto: O composto apresenta radicais que caracterizam Apresenta radicais que caracterizam:",
            alternativas: ["Álcool e aminoácido.", "Fenol e ácido.", "Álcool e amina.", "Álcool e amida."],
            resposta: 3,
            nivel: 6,
        }, 

        
        
        
        {
            
            enunciado: "(Fuvest – SP) Hidrocarbonetos halogenados, usados em aerossóis, são também responsáveis pela destruição da camada de ozônio da estratosfera. São exemplos de hidrocarbonetos halogenados:",
            alternativas: ["CH2Cℓ2 e CH3CH3", "CH3COCℓ e CH3OCH2Cℓ", "CFCℓ3 e CHCℓ3", "CH3NH2 e CFCℓ3","CH3CHFCℓ e CH3COCℓ"],
            resposta: 3,
            nivel: 6,
        },

        
        
        
        {
            
            enunciado: "Em compostos orgânicos ou inorgânicos o átomo de oxigênio pode ser substituído por um átomo de enxofre, ambos pertencentes à mesma família da Tabela Periódica realizando, assim, a mesma quantidade de ligações. O etanol, por exemplo, pode formar o etanotiol, um tio-álcool. Como se pode obter um tio-éter a partir do éter etílico?",
            alternativas: ["CH3CH2SH.", "CH3OCH3.", "CH3SCH3.", "CH3CH2OCH2CH3.", "CH3CH2SCH2CH3."],
            resposta: 1,
            nivel: 6,
        }  
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

    setTimeout(() => { separaDados(1) }, 2000);

    


}

function separaDados(){
    
    for(let i =0; i<classAlternativas.length; i++){
        classAlternativas[i].style.backgroundColor = "white"
        classAlternativas[i].disabled=false
    }
    
    questaoEsc = pegaQuestion();
    document.getElementById("enunciado").innerHTML = `${questaoEsc.enunciado}`
    let indices = []


    for(let i = 0; i<questaoEsc.alternativas.length; i++){
        
        let alt = document.getElementById(`a${i+1}`);
        alt.innerHTML = `${questaoEsc.alternativas[i]}`
    }

    return indices


}

let indices = separaDados()
questaoEsc.alternativas[questaoEsc.resposta]

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





