# language: pt
Funcionalidade: Relatórios da Área de Saúde

  Cenário: Acessar Relatório de Gestão na área de Saúde
    Dado que acesso a página inicial do Portal da Transparência
    Quando clico no botão "Acesse" do card de "Saúde"
    E localizo o card "Relatório de Gestão" na página de detalhes
    Então valido que o arquivo PDF do relatório está disponível