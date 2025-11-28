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
}

export default new BuscaRapidaPage();