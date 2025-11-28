# language: pt
Funcionalidade: Busca Rápida de Despesas na Home
  Como um cidadão quero consultar gastos por área e ano
  Para fiscalizar o uso do dinheiro público

  Esquema do Cenário: Consulta de despesas por função e ano
    Dado que acesso a página inicial do Portal da Transparência
    Quando seleciono a opção "<area>" no filtro de despesa
    E seleciono o ano "<ano>" no filtro de ano
    E clico no botão de pesquisar despesa
    Então devo ver resultados relacionados à area selecionada

    Exemplos:
      | area               | ano  |
      | EDUCAÇÃO           | 2025 |
      | SAÚDE              | 2024 |
      | SEGURANÇA PÚBLICA  | 2023 |
      | CULTURA            | 2022 |
      | ASSISTÊNCIA SOCIAL | 2024 |
      | AGRICULTURA        | 2023 |