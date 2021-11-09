function confirmar(){
    confirmado = confirm("Deseja abrir a janela?");
    if(!confirmado) return;

    cursos = document.getElementById("cursos");

    y = cursos.selectedIndex;
 
    novaJanela = window.open("", "janela" + cursos.options[y], "fullscreen=yes,width = 600, height = 300");
    novaJanela.document.write("<title>Página do Curso " + cursos.options[y].text + "</title>");
    switch (y) {
        case 1:
            novaJanela.document.writeln("<p>Coordenação: Profº Antonio Cesar de Barros Munari</p>");
            novaJanela.document.writeln("<p>Carga horária Noturno: 2.880 horas</p>");
            novaJanela.document.writeln("<p>Carga horária Diurno: 2.880 horas</p>");
            novaJanela.document.writeln("<p>O tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, especifica, testa, implanta e mantém sistemas computacionais de informação. Esse profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção de projetos, preocupação com a qualidade, usabilidade, robustez, integridade e segurança de programas computacionais são fundamentais à atuação desse profissional.</p>");    
            break;
        case 2:
            novaJanela.document.writeln("<p>Coordenação: Profª Ma. Cécile Chaves Hernandez Garcia</p>");
            novaJanela.document.writeln("<p>Carga horária Noturno: 2.880 horas</p>");
            novaJanela.document.writeln("<p>Esse profissional trabalha na fabricação dos Polímeros, compostos químicos utilizados na fabricação de produtos como o plástico, por exemplo. Avalia o desempenho de equipamentos e processos, interpreta fluxogramas de processos, aplica formulação química de polímeros, tintas e vernizes e desenvolve métodos de análises laboratoriais para caracterização dos materiais poliméricos, além de processos de modelagem. O monitoramento da qualidade e dos processos de reciclagem envolvidos; a identificação e acompanhamento das variáveis relevantes, inclusive as referentes ao meio ambiente, são também funções desse profissional.</p>");
            break;
        case 3:
            novaJanela.document.writeln("<p>Coordenação: Prof. Me. José Itamar Monteiro</p>");
            novaJanela.document.writeln("<p>Carga horária Vespertino: 2.880 horas</p>");
            novaJanela.document.writeln("<p>O tecnólogo em Logística é o profissional especializado em armazenagem, distribuição e transporte. Atuando na área logística de uma empresa, planeja e coordena a movimentação física e de informações sobre as operações multimodais de transporte, para proporcionar fluxo otimizado e de qualidade para peças, matérias-primas e produtos. Ele gerencia redes de distribuição e unidades logísticas, estabelecendo processos de compras, identificando fornecedores, negociando e estabelecendo padrões de recebimento, armazenamento, movimentação e embalagem de materiais, podendo ainda ocupar-se do inventário de estoques, sistemas de abastecimento, programação e monitoramento do fluxo de pedidos.</p>");    
            break;
        case 4:
            novaJanela.document.writeln("<p>Coordenação: Profª Me. Joseli Vergara Marins</p>");
            novaJanela.document.writeln("<p>Carga horária: 2.880 horas</p>");
            novaJanela.document.writeln("<p>O tecnólogo em Sistemas Biomédicos é responsável por planejar, gerenciar, implantar e manter equipamentos clínicos e médico-hospitalares. Supervisiona e coordena equipes de manutenção e otimização do uso de equipamentos eletro-médicos. Assessora a aquisição, executa a instalação, capacita usuários de equipamentos e sistemas biomédicos, além de participar de equipes de pesquisa aplicada. Responsável também pela implantação e controle das normas de segurança dos equipamentosnos serviços de saúde, pode atuar em hospitais, policlínicas, laboratórios, fabricantes e distribuidoras de equipamentos hospitalares.</p>");    
            break;
        case 5:
            novaJanela.document.writeln("<p>Coordenação:Profº Dr. Délvio Venanzi</p>");
            novaJanela.document.writeln("<p>Carga horária: 2.880 horas</p>");
            novaJanela.document.writeln("<p>O Tecnólogo em Gestão da Qualidade será um profissional que planeja, implementa e audita sistemas de gestão da qualidade e produtividade. Realiza mapeamento de processos organizacionais segundo indicadores de qualidade e produtividade. Elabora e analisa documentação e relatórios de qualidade, considerando normas de qualidade estabelecidas. Desenvolve avaliação sistemática dos procedimentos, práticas e rotinas internas e externas de uma organização. Mobiliza pessoas para agir com qualidade em todas as atividades corporativas. Gerencia e mantém o fluxo de informação e comunicação na empresa. Dissemina a cultura da qualidade e produtividade. Capacita pessoas em procedimentos e rotinas destinados a minimizar a produção fora de conformidade. Elabora ferramentas para minimizar a incidência de falhas. Elabora e gerencia estratégias para obtenção de certificações. Desenvolve programa de avaliação de performance produtiva organizacional considerando aspectos quantitativos e qualitativos. Avalia e emite parecer técnico em sua área de formação</p>");    
            break;
			
		case 6:
            novaJanela.document.writeln("<p>Coordenação:Profº Dr. Lauro Carvalho de Oliveira</p>");
            novaJanela.document.writeln("<p>Carga horária: 2.880 horas</p>");
            novaJanela.document.writeln("<p>O tecnólogo em Projetos Mecânicos está habilitado a realizar projetos, com detalhamento técnico de sistemas mecânicos que envolvam máquinas, motores, instalações mecânicas e termo-mecânicas. Tem conhecimento de todos os materiais usuais em construção mecânica e suas aplicações práticas. Está capacitado a atuar na área de organização industrial mecânica, tanto para processos como para produtos industriais. Domina a técnica do projeto de dispositivos e ferramentas de produção mecânica. Pode dedicar-se ao ensino, à pesquisa tecnológica, bem como realizar vistoria, avaliação e laudo técnico, em seu campo profissional.</p>");    
            break;
			
		case 7:
            novaJanela.document.writeln("<p>Coordenação:Profº Me. Amilton Cordeiro de Freitas</p>");
            novaJanela.document.writeln("<p>Carga horária: 2.880 horas</p>");
            novaJanela.document.writeln("<p>O tecnólogo em Fabricação Mecânica atua no segmento de fabricação, envolvendo usinagem, conformação, soldagem, montagem e outros processos mecânicos. Planeja, controla e gerencia os diversos processos, atuando no desenvolvimento e melhoria de produtos, dos processos de fabricação e na gestão de projetos, aliando competências das áreas de gestão, qualidade e controle ambiental. Exerce suas atividades em empresas do ramo metal-mecânico, incluindo indústrias manufatureiras e ferramentarias, podendo ainda atuar em institutos e centros de pesquisa, órgãos governamentais, escritórios de consultoria, dentre outros.</p>");    
            break;
			
		case 8:
            novaJanela.document.writeln("<p>Coordenação:Profº Dr. José Luiz Antunes de Almeida</p>");
            novaJanela.document.writeln("<p>Carga horária: 2.880 horas</p>");
            novaJanela.document.writeln("<p>Participa de equipes de desenvolvimento de novos produtos, novas tecnologias e subsistemas na área automotiva; supervisiona, coordena e orienta equipes na área automotiva; realiza a padronização, mensuração e controle de qualidade nas áreas automotivas de veículos especiais, carga e passeio; Especifica instrumentos e equipamentos para teste de veículos; oferece assistência, assessoria e consultoria referentes a instrumentos e equipamentos usados em testes de veículos de especiais, carga e passeio; Elabora orçamentos referentes à instrumentos e equipamentos usados na industria automotiva; Gerencia e realiza vistorias, perícias, avaliações, arbitramento, laudo e parecer técnico referentemente à áreas afetadas à veículos especiais, carga e de passeio; Supervisiona, coordena e orienta tecnicamente equipes de uma linha de inspeção veicular; É capaz de selecionar e desenvolver novas tecnologias levando-se em conta características técnicas, humanas, econômicas e gerenciais de sistemas automobilístico; Opera e faz manutenção de equipamentos em inspeção veicular; Estuda a viabilização técnico-econômica de uma oficina autorizada ou independente; Supervisiona, coordena e orienta tecnicamente equipes de uma oficina autorizada ou independente.</p>");    
            break;
			
		case 9:
            novaJanela.document.writeln("<p>Coordenação:Profº Me. Samuel Mendes Franco</p>");
            novaJanela.document.writeln("<p>Carga horária: 2.880 horas</p>");
            novaJanela.document.writeln("<p>O aluno aprenderá a transformar ambientes de manufatura convencional em ambientes mais tecnológicos. Estruturado por blocos temáticos direcionados a projetos, o conteúdo do curso é dividido em processos de manufatura, eletrônica e automação e áreas multidisciplinares. O aluno terá uma base de artes para desenho técnico, matemática para cálculos de projetos e gestão de carreira. O inglês para linguagem técnica também é uma disciplina recorrente no curso. Atua como um integrador de tecnologia. Além de projetar e desenvolver projetos de manufatura, o profissional é responsável por agregar novas tecnologias voltadas para a Indústria 4.0. Oferece informações tecnológicas relacionadas às principais técnicas de produção empregadas na indústria mundial, tais como materiais e processos de fabricação, realidade aumentada e virtual, Internet das Coisas, Big Data, entre outros. É responsável por identificar dispositivos e ferramentas disponíveis no mercado. Como empreendedor, pode abrir sua própria consultoria ou empresa. Pode ainda atuar em pesquisas.</p>");    
            break;
			
		case 10:
            novaJanela.document.writeln("<p>Coordenação:Profº Dra. Suellen Signer Bartolomei</p>");
            novaJanela.document.writeln("<p>Carga horária: 2.880 horas</p>");
            novaJanela.document.writeln("<p>O tecnólogo em Processos Metalúrgicos utiliza os fenômenos envolvidos em processos como: tratamentos térmicos, fundição, siderurgia, laminação, forjamento de metais, sinterização e tratamentos de superfície .São atividades inerentes aos egressos deste Curso o planejamento, gestão, controle dos processos e comercialização dos produtos metalúrgicos, através da seleção, dimensionamento de equipamentos e métodos de fabricação. Incluem-se as atividades de laboratórios de ensaios mecânicos e de ensaios metalográficos, com o domínio da interrelação entre microestrutura, propriedades e aplicações dos produtos metálicos. Este profissional possui competências de gestão ambiental, de pessoas e processos industriais. Pode atuar em diversas empresas do ramo metal-mecânico e ainda no ensino superior.</p>");    
            break;
    }
    


    

}