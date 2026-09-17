const blocksData=[
["01","Arts. 1–11","Estrutura e organização"],
["02","Arts. 12–19","Ingresso e formação"],
["03","Arts. 20–27","Estágio probatório"],
["04","Arts. 28–34","Carreira e classes"],
["05","Arts. 35–46","Desenvolvimento funcional"],
["06","Arts. 47–59","Jornada e remuneração"],
["07","Arts. 60–77","Cargos e funções"],
["08","Arts. 78–85","Deveres profissionais"],
["09","Arts. 86–90","Disposições finais"]
];
document.querySelector("#blocks").innerHTML=blocksData.map(x=>`<div class="block"><b>${x[0]} • ${x[1]}</b><span>${x[2]}</span></div>`).join("");

const cards=[
{a:"Art. 1",t:"Objeto da lei",p:"A LC 198/2025 trata da estruturação do Plano de Cargos e Carreiras e da parte organizacional da GCM, incluindo cargos efetivos, funções gratificadas, jornada e tabela de vencimentos.",m:"Carreira + organização + cargos/funções + jornada + vencimentos.",g:"Não reduza a lei apenas à remuneração."},
{a:"Art. 2",t:"Conceitos fundamentais",p:"O material diferencia cargo, função, carreira, classe, nível, progressão, promoção, periculosidade e vencimento base.",m:"Promoção = vertical; progressão = horizontal.",g:"Não troque progressão por promoção."},
{a:"Art. 13",t:"Concurso",p:"O material de treino pergunta sobre as fases enumeradas no artigo.",m:"8 fases.",g:"Atenção às alternativas próximas: 6, 7, 8 ou 9."},
{a:"Art. 19",t:"Formação",p:"A apostila destaca a ajuda de custo do Aluno GCM e o prazo da CNH categoria B.",m:"Aluno GCM: 80% • CNH B: 30 dias.",g:"Não confundir 80% com 60% ou 100%."},
{a:"Prob. • arts. 20–27",t:"Estágio probatório",p:"O material destaca duração, avaliação final e recurso contra parecer desfavorável.",m:"3 anos • 60 dias antes • recurso em 5 dias.",g:"60 dias é antecedência da avaliação final; 5 dias é o recurso."},
{a:"Art. 36",t:"Promoção",p:"O material indica promoção, em regra, a cada cinco anos, com acréscimo associado de 8%.",m:"5 anos → 8%.",g:"Não confundir com progressão de 1%."},
{a:"Art. 40",t:"Progressão",p:"A progressão é evolução de referência dentro do mesmo nível, observando tempo e mérito.",m:"730 dias • 70% • 1%.",g:"Progressão é horizontal; promoção é vertical."},
{a:"Art. 47",t:"Jornada",p:"O material indica jornada semanal de 40 horas, com possibilidade de regimes de turno ou plantão.",m:"40 horas/semana.",g:"A jornada pode envolver dias úteis, recessos, fins de semana, feriados, dia e noite."},
{a:"Arts. 50–56",t:"Vantagens e período noturno",p:"Funções gratificadas seguem o Anexo II. O material destaca hora extra, adicional noturno, 13º, férias e periculosidade.",m:"22h–5h • periculosidade 20%.",g:"Período noturno: 22h às 5h."},
{a:"Art. 73",t:"Processo",p:"O material de revisão destaca os prazos de defesa, parecer e conclusão.",m:"10 dias • 15 dias úteis • 90 dias.",g:"Não confundir prazo de defesa com prazo de conclusão."},
{a:"Art. 89",t:"Anexos",p:"São cinco anexos integrantes da lei. O texto do artigo registra “Anexo IIII”, enquanto o documento apresenta ANEXO III.",m:"5 anexos.",g:"Pegadinha literal: “Anexo IIII” no texto do art. 89."},
{a:"Art. 90",t:"Vigência",p:"A lei entra em vigor na data de sua publicação. O material indica 23/12/2025.",m:"Vigência = publicação.",g:"Não procure vacatio legis no material."}
];

function renderCards(filter=""){
 const f=filter.toLowerCase();
 document.querySelector("#cards").innerHTML=cards.filter(c=>(c.a+" "+c.t+" "+c.p+" "+c.m+" "+c.g).toLowerCase().includes(f)).map(c=>`
 <article class="card"><div class="art">${c.a}</div><h3>${c.t}</h3>
 <p><strong>TEXTO/FOCO:</strong> ${c.p}</p><p><strong>MEMORIZE:</strong> ${c.m}</p>
 <p><strong>PEGADINHA:</strong> ${c.g}</p></article>`).join("");
}
renderCards();
document.querySelector("#search").addEventListener("input",e=>renderCards(e.target.value));
document.querySelector("#retaToggle").addEventListener("change",e=>{
 document.querySelector("#numbers").classList.toggle("hidden",!e.target.checked);
});

const qs=[
["A LC 198/2025 define progressão como:","A) passagem de uma classe à imediatamente superior|B) evolução horizontal para referência/padrão superior|C) mudança de função gratificada|D) promoção por bravura","B"],
["Integram a estrutura administrativa da GCM, EXCETO:","A) Comando|B) Corregedoria|C) Ouvidoria|D) Tribunal Disciplinar","D"],
["O controle interno é exercido pela:","A) Ouvidoria|B) Corregedoria|C) Câmara Municipal|D) Inspetoria","B"],
["O concurso é composto por quantas fases enumeradas no art. 13?","A) 6|B) 7|C) 8|D) 9","C"],
["A CNH categoria B deve ser apresentada no prazo de:","A) 10 dias|B) 20 dias|C) 30 dias|D) 60 dias","C"],
["A ajuda de custo do Aluno GCM corresponde a:","A) 50%|B) 60%|C) 80%|D) 100%","C"],
["O estágio probatório dura:","A) 2 anos|B) 3 anos|C) 4 anos|D) 5 anos","B"],
["A avaliação final do probatório deve ser concluída:","A) 30 dias antes|B) 45 dias antes|C) 60 dias antes|D) 90 dias antes","C"],
["O recurso voluntário contra parecer desfavorável no probatório tem prazo de:","A) 3 dias|B) 5 dias|C) 10 dias|D) 15 dias","B"],
["A lei cria quantos cargos efetivos de GCM?","A) 20|B) 30|C) 40|D) 60","C"],
["A reserva mínima de vagas para candidatas é de:","A) 10%|B) 15%|C) 20%|D) 30%","C"],
["A classe inicial da carreira é:","A) 1ª Classe|B) 2ª Classe|C) 3ª Classe|D) Classe Plena","C"],
["A promoção, em regra, ocorre a cada:","A) 2 anos|B) 3 anos|C) 4 anos|D) 5 anos","D"],
["O acréscimo associado à promoção do art. 36 é de:","A) 1%|B) 5%|C) 8%|D) 10%","C"],
["A progressão do art. 40 corresponde a:","A) 1%|B) 2%|C) 5%|D) 8%","A"],
["Para progressão por merecimento, o período-base é de:","A) 365 dias|B) 540 dias|C) 730 dias|D) 1.095 dias","C"]
];
document.querySelector("#questions").innerHTML=qs.map((q,i)=>`<article class="q"><h3>${i+1}. ${q[0]}</h3><div class="opts">${q[1].split("|").map(x=>`<div>${x}</div>`).join("")}</div><div class="answer">Gabarito: ${q[2]}</div></article>`).join("");
