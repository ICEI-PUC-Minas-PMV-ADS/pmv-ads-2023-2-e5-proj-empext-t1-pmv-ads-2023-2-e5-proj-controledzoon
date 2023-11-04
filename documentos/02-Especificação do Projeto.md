# Especificações do Projeto

A especificação de um projeto de software para registro de exames de leishmaniose é uma etapa fundamental para orientar o desenvolvimento da ferramenta. A seguir, apresento uma descrição geral das principais características e requisitos que devem ser considerados na especificação desse projeto:

## Público-Alvo

O público-alvo do software para registro de exames de leishmaniose abrange uma variedade de profissionais e instituições envolvidos na prevenção, diagnóstico, tratamento e controle da doença. Esse público-alvo é diversificado e inclui:

- **Profissionais de Saúde:** Médicos, enfermeiros, técnicos de laboratório, epidemiologistas e outros profissionais de saúde que estão envolvidos na prestação de cuidados médicos, diagnóstico e tratamento de pacientes com leishmaniose.

- **Laboratórios de Saúde:** Laboratórios clínicos e de pesquisa que realizam testes de diagnóstico para leishmaniose, onde os resultados dos exames são registrados e armazenados no software.

- **Autoridades de Saúde Pública:** Funcionários de órgãos de saúde pública em níveis municipal, estadual e nacional, que são responsáveis pela supervisão, monitoramento e controle de doenças infecciosas, incluindo a leishmaniose.

- **Pesquisadores e Acadêmicos:** Profissionais de pesquisa e acadêmicos que estudam a leishmaniose e dependem de dados epidemiológicos para suas pesquisas e estudos científicos.

- **Gestores de Saúde:** Administradores e gestores de unidades de saúde, hospitais e clínicas que buscam melhorar a eficiência operacional e a qualidade dos serviços de saúde relacionados à leishmaniose.

- **Organizações Não Governamentais (ONGs):** Organizações que trabalham em áreas afetadas pela leishmaniose, fornecendo apoio, conscientização e recursos para pacientes e comunidades.

- **Pacientes e suas Famílias:** Embora não sejam usuários diretos do software, os pacientes e suas famílias se beneficiam indiretamente da melhoria no diagnóstico e tratamento proporcionados pela ferramenta.

- **Profissionais de Educação em Saúde:** Professores e educadores em saúde que utilizam o software como uma ferramenta de ensino para conscientizar sobre a leishmaniose e suas medidas preventivas.

- **Agências de Saúde Internacionais:** Organizações internacionais de saúde, como a Organização Mundial da Saúde (OMS) e outras agências que trabalham na prevenção e controle de doenças tropicais, podem usar o software para fins de monitoramento global.

- **Órgãos Governamentais:** Autoridades governamentais em níveis municipal, estadual e nacional que têm responsabilidades na formulação de políticas de saúde e no financiamento de programas de controle da leishmaniose.

É importante observar que o software deve ser projetado com interfaces e funcionalidades adequadas para atender às necessidades específicas de cada segmento desse público-alvo diversificado. Isso inclui considerações de usabilidade, segurança de dados e treinamento para garantir que todos os usuários possam tirar o máximo proveito da ferramenta.









## Arquitetura e Tecnologias

o	Descreva brevemente a arquitetura definida para o projeto e as tecnologias a serem utilizadas. Sugere-se a criação de um diagrama de componentes da solução.

## Project Model Canvas



![Project Canvas Template zooneses](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e5-proj-empext-t1-pmv-ads-2023-2-e5-proj-controledzoon/assets/91230711/a5b9ddd7-ea9a-4c51-9d33-a2ce0cdaf66f)


## Requisitos do Projeto

O objetivo estrutural prático do projeto é definido através dos requisitos funcionais que retratam as intenções de comunicação do site com o usuário e disponibilizam as funções esperadas para utilização da ferramenta, tal como os requisitos não funcionais que representam as características técnicas que a equipe deve utilizar na estrutura da montagem do projeto. A seguir serão apresentados os aspectos.

### Requisitos Funcionais

O quadro a seguir exibe os requisitos funcionais da solução, apontando quais são as prioridades que devem ser atendidas.

| ID    | Descrição                                 | Prioridade |
|-------|-------------------------------------------|------------|
| RF-01 | A aplicação deve permitir gerenciar exames de leishmaniose. | Alta       |
| RF-02 | A aplicação deve permitir gerenciar usuários. | Alta       |
| RF-03 | O Sistema deve permitir o acesso a exames. | Alta       |
| RF-04 | O Sistema deve permitir o cadastro de animais. | Alta       |
| RF-05 | O Sistema deve gerar um relatório sobre os exames. | Baixa      |

### Requisitos não funcionais

O quadro a seguir representam as ferramentas técnicas que devem ser utilizadas no projeto no formato de requisitos não funcionais.

| ID    | Descrição                                           | Prioridade |
|-------|-----------------------------------------------------|------------|
| RNF-01 | O sistema deve ser implementado na linguagem C#, html, CSS e Java Script. | Alta       |
| RNF-02 | As informações de cadastro dos tutores devem ficar disponíveis apenas para os clientes e para a plataforma. | Alta       |
| RNF-03 | O site deve estar disponível para os principais navegadores: Chrome, Firefox, Edge. | Alta       |
| RNF-04 | O sistema deve estar disponível 24 horas por dia, os sete dias da semana. | Alta       |
| RNF-05 | O site deve ser responsivo, compatível com qualquer tipo de aparelho, como Notebook, tablet, celular. | Alta       |

## Restrições

O andamento desse projeto limita-se por deveres visíveis para a sua conclusão. O quadro a seguir exibe quais são essas limitações.

| ID    | Descrição                                 |
|-------|-------------------------------------------|
| RE-01 | O projeto deve ser entregue ao final do semestre, não ultrapassando a data limite de 10/12/2023. |
| RE-02 | O projeto deve ser desenvolvido em HTML, CSS, JAVA SCRIPT e C#. |
| RE-03 | O projeto deve ser realizado pela equipe formada sem interferências externas. |

## Diagrama de Casos de Uso
O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos.
![DIAGRAMA DE CASO DE USO ZOONESES](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e5-proj-empext-t1-pmv-ads-2023-2-e5-proj-controledzoon/assets/91230711/84c07c0b-5d45-4d30-8e61-7ec810d313e4)

## Modelo ER (Projeto Conceitual)
O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.

## Projeto da Base de Dados
O projeto da base de dados corresponde à representação das entidades e relacionamentos identificadas no Modelo ER, no formato de tabelas, com colunas e chaves primárias/estrangeiras necessárias para representar corretamente as restrições de integridade.
