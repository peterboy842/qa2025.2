import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import BuscaRapidaPage from '../../pages/buscaRapida.page';

When('clico no botão "Acesse" do card de "Transportes"', () => {
    BuscaRapidaPage.clicarBotaoTransportes();
});

When('clico no card "Gerenciamento da Frota de Aeronaves"', () => {
    BuscaRapidaPage.clicarGerenciamentoAeronaves();
});

Then('devo ser redirecionado para a página de frota de aeronaves', () => {
    BuscaRapidaPage.verificarPaginaAeronaves();
});
