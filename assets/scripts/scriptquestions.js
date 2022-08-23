let nivel = 6;

function questions(){
    let listaDeQuestoes = [
        
        Item1 = {
            numero : 2,
            enunciado: "A fórmula estrutural da metanamina é:",
            alternativas : ["CH3—NH2",
            ` H3C—CH—CH3
                  |    
                 NH2`,
            `H3C—CH2—NH2`,
            `H3C—CH2—CH2
                      |
                     NH2 ` ], 
            resposta: 1
        },

        Item2 = {
            numero : 2,
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
        item3 = {
            numero: 3,
            enunciado: "(PUC-RJ) A seguir está representada a estrutura da dihidrocapsaicina, uma substância comumente encontrada em pimentas e pimentões. A seguir está representada a estrutura da dihidrocapsaicina, uma substância comumente encontrada em pimentas e pimentões. Na dihidrocapsaicina, está presente, entre outras, a função orgânica:",
            alternativas: ["Álcool.", "Amina.", "Amida.", "Éster."],
            resposta: 3,
            nivel: 5,
        },
        item4 = {
            numero: 4,
            enunciado: "(PUC-MG) O princípio ativo dos analgésicos comercializados com nomes de Tylenol, Cibalena, Resprin é o paracetamol, cuja fórmula está representada a seguir. O princípio ativo dos analgésicos comercializados com nomes de Tylenol, Cibalena, Resprin é o paracetamol, cuja fórmula está representada a seguir",
            alternativas: ["Fenol, cetona e amina.", "Álcool, cetona e amina.", "Álcool e amida.", "Fenol e amida."],
            resposta: 4,
            nivel: 5,
        },
        item5 = {
            numero: 5,
            enunciado: "A camada de ozônio (cinturão de Van Allen), que protege a biosfera do efeito nocivo de certas radiações, sofre ataque destrutivo dos CFC (clorofluorcarbono) usados em aerossóis e refrigeração, por exemplo. O mais usado, freon-12, de fórmula molecular CF2Cℓ2, pertence à função:",
            alternativas: ["a)hidrocarboneto", "cloreto de ácido", "haleto orgânico.", "hidrocarboneto insaturado."],
            resposta: 4,
            nivel: 5,
        },

        item6 = {
            numero: 6,
            enunciado: "Hidrocarbonetos halogenados, usados em aerossóis, são também responsáveis pela destruição da camada de ozônio da estratosfera. São exemplos de hidrocarbonetos halogenados:",
            alternativas: ["CH2Cℓ2 e CH3CH3","CH3COCℓ e CH3OCH3Cℓ", "CFCℓ3 e CHCℓ3.", "CH3NH2 e CFCℓ3."],
            resposta: 3,
            nivel: 6,
        },

        item7 = {
            numero: 7,
            enunciado: "(Unitau) O composto: O composto apresenta radicais que caracterizam Apresenta radicais que caracterizam:",
            alternativas: ["Álcool e aminoácido.", "Fenol e ácido.", "Álcool e amina.", "Álcool e amida."],
            resposta: 3,
            nivel: 6,
        },
        item8 = {
            numero: 8,
            enunciado: "(Unitau) O composto: O composto apresenta radicais que caracterizam Apresenta radicais que caracterizam:",
            alternativas: ["Álcool e aminoácido.", "Fenol e ácido.", "Álcool e amina.", "Álcool e amida."],
            resposta: 3,
            nivel: 6,
        }, 

        item9 = {
            numero: 9,
            enunciado: "(Fuvest – SP) Hidrocarbonetos halogenados, usados em aerossóis, são também responsáveis pela destruição da camada de ozônio da estratosfera. São exemplos de hidrocarbonetos halogenados:",
            alternativas: ["CH2Cℓ2 e CH3CH3", "CH3COCℓ e CH3OCH2Cℓ", "CFCℓ3 e CHCℓ3", "CH3NH2 e CFCℓ3","CH3CHFCℓ e CH3COCℓ"],
            resposta: 3,
            nivel: 6,
        },

        item10 = {
            numero: 10,
            enunciado: "Em compostos orgânicos ou inorgânicos o átomo de oxigênio pode ser substituído por um átomo de enxofre, ambos pertencentes à mesma família da Tabela Periódica realizando, assim, a mesma quantidade de ligações. O etanol, por exemplo, pode formar o etanotiol, um tio-álcool. Como se pode obter um tio-éter a partir do éter etílico?",
            alternativas: ["CH3CH2SH.", "CH3OCH3.", "CH3SCH3.", "CH3CH2OCH2CH3.", "CH3CH2SCH2CH3."],
            resposta: 1,
            nivel: 6,
        }  
    ];
    return listaDeQuestoes;

}

function separador() {
    let lista = questions();
    let lista_level = []

    for(let i = 0; i<lista.length; i++){
        questao = lista[i]
        if(questao.nivel == nivel){
            lista_level.push(questao)
        }
    }
    return lista_level;
}

function pegaQuest(){
    let questoes = separador();
    let numeroQ = Math.floor(Math.random() * questoes.length);
    let questao = questoes[numeroQ];

    questoes.splice(numeroQ);

    return questoes;

        
    }


console.log(pegaQuest());
console.log(pegaQuest());
console.log(pegaQuest());
console.log(pegaQuest());
console.log(pegaQuest());
