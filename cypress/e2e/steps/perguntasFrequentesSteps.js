import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import BuscaRapidaPage from '../../pages/buscaRapida.page';

When('clico no link "Perguntas Frequentes" no menu superior', () => {
    BuscaRapidaPage.clicarPerguntasFrequentes();
});

Then('devo ver a lista de dúvidas frequentes', () => {
    BuscaRapidaPage.verificarPaginaPerguntas();
});
