class BuscaRapidaPage {

    get dropdownArea() {
        return cy.get('#tipo-despesa');
    }

    get dropdownAno() {
        return cy.get('#ano-despesa');
    }

    get botaoPesquisar() {
        return cy.get('#search-despesa');
    }

    get botaoAcesseSaude() {
        return cy.get('a[href*="/despesas/saude"]').first();
    }

    get linkRelatorioGestao() {
        return cy.contains('Relatório de Gestão').closest('a');
    }

    get botaoAcesseObras() {
        return cy.get('a[href*="/obras/"]').first();
    }

    get linkPainelObrasBanner() {
        return cy.contains('Painel de Obras - Governo da Paraíba');
    }

    get botaoAcesseTransportes() {
        return cy.get('a[href*="/despesas/transportes"]').first();
    }

    get linkGerenciamentoAeronaves() {
        return cy.get('a[href*="/gerenciamento-da-frota-de-aeronaves"]').first();
    }

    get botaoAcesseRREO() {
        return cy.contains('.tile-default', 'RREO').find('a').first();
    }

    get linkPerguntasFrequentes() {
        return cy.contains('Perguntas Frequentes');
    }

    acessarHome() {
        cy.visit('/');
    }

    selecionarArea(areaTexto) {
        this.dropdownArea.select(areaTexto);
    }

    selecionarAno(anoTexto) {
        this.dropdownAno.select(anoTexto);
    }

    clicarPesquisar() {
        this.botaoPesquisar.click();
    }

    clicarBotaoSaude() {
        this.botaoAcesseSaude.click();
    }

    verificarPaginaSaude() {
        cy.url().should('include', '/despesas/saude');
    }

    clicarRelatorioGestao() {
        this.linkRelatorioGestao.then(($link) => {
            const urlPdf = $link.prop('href');
            cy.request(urlPdf).then((resposta) => {
                expect(resposta.status).to.eq(200);
                expect(resposta.headers['content-type']).to.include('application/pdf');
            });
        });
    }

    clicarBotaoObras() {
        this.botaoAcesseObras.click();
    }

    verificarPaginaObras() {
        cy.url().should('include', '/obras');
    }

    clicarPainelObras() {
        this.linkPainelObrasBanner.closest('a').invoke('removeAttr', 'target').click();
    }

    clicarBotaoTransportes() {
        this.botaoAcesseTransportes.click();
    }

    clicarGerenciamentoAeronaves() {
        this.linkGerenciamentoAeronaves.click();
    }

    verificarPaginaAeronaves() {
        cy.url().should('include', '/gerenciamento-da-frota-de-aeronaves');
        cy.contains('Gerenciamento da Frota de Aeronaves').should('be.visible');
    }

    clicarBotaoRREO() {
        this.botaoAcesseRREO.invoke('removeAttr', 'target').click();
    }

    verificarPaginaRREO() {
        cy.url().should('include', 'siaf.cge');
    }

    clicarPerguntasFrequentes() {
        this.linkPerguntasFrequentes.click();
    }

    verificarPaginaPerguntas() {
        cy.url().should('include', '/perguntas-frequentes');
        cy.get('body').should('contain', 'Perguntas');
    }
}

export default new BuscaRapidaPage();
