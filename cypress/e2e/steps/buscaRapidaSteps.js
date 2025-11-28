import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import BuscaRapidaPage from '../../pages/buscaRapida.page';

Given('que acesso a página inicial do Portal da Transparência', () => {
    BuscaRapidaPage.acessarHome();
});

When('seleciono a opção {string} no filtro de despesa', (area) => {
    BuscaRapidaPage.selecionarArea(area);
});

When('seleciono o ano {string} no filtro de ano', (ano) => {
    BuscaRapidaPage.selecionarAno(ano);
});

When('clico no botão de pesquisar despesa', () => {
    BuscaRapidaPage.clicarPesquisar();
});

Then('devo ver resultados relacionados à area selecionada', () => {
    cy.get('body').should('contain', 'Despesa'); 
});