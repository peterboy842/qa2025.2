import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import BuscaRapidaPage from '../../pages/buscaRapida.page';

When('clico no botão "Acesse" do card de "Obras"', () => {
    BuscaRapidaPage.clicarBotaoObras();
});

Then('clico no banner "Painel de Obras" para acessar o sistema', () => {
    BuscaRapidaPage.verificarPaginaObras();
    BuscaRapidaPage.clicarPainelObras();
});
