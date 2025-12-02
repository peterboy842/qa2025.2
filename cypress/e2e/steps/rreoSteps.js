import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import BuscaRapidaPage from '../../pages/buscaRapida.page';

When('clico no botão "Acesse" do card de "RREO"', () => {
    BuscaRapidaPage.clicarBotaoRREO();
});

Then('devo ser redirecionado para a página de relatórios RREO', () => {
    BuscaRapidaPage.verificarPaginaRREO();
});
