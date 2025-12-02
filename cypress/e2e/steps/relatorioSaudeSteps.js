import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import BuscaRapidaPage from '../../pages/buscaRapida.page'; 

When('clico no botão "Acesse" do card de "Saúde"', () => {
    BuscaRapidaPage.clicarBotaoSaude();
});

When('localizo o card "Relatório de Gestão" na página de detalhes', () => {
    BuscaRapidaPage.verificarPaginaSaude();
});

Then('valido que o arquivo PDF do relatório está disponível', () => {
    BuscaRapidaPage.clicarRelatorioGestao(); 
});
