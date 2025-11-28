# Integrantes
Pedro Américo Marra,
Victor Eduardo Machado da Silva Barbosa,
Hilton luan Barros

# Projeto de Automação de Testes - Portal da Transparência PB

Este repositório contém o projeto de automação de testes **VA02 DE QA - P5**, focado na validação de funcionalidades do **Portal da Transparência do Governo da Paraíba**.

O projeto utiliza a arquitetura **BDD (Behavior Driven Development)** para descrever cenários de teste em linguagem natural e **Page Objects** para organização do código.

## Tecnologias Utilizadas

* **[Cypress](https://www.cypress.io/)** (Framework de Testes E2E)
* **[Cucumber](https://cucumber.io/)** (Especificação de Cenários em Gherkin)
* **Javascript** (Linguagem de Programação)
* **Node.js** (Ambiente de Execução)

## Estrutura do Projeto

O projeto segue o padrão **Page Object Model (POM)** com a seguinte estrutura de pastas:

```text
├── cypress
│   ├── e2e
│   │   ├── features       # Arquivos .feature (Gherkin - Cenários de Teste)
│   │   └── steps          # Step Definitions (Implementação dos passos)
│   ├── pages              # Page Objects (Elementos e Ações das páginas)
│   ├── fixtures           # Massas de dados estáticas (opcional)
│   └── support            # Configurações globais e comandos customizados
├── cypress.config.js      # Configuração do Cypress e Plugins (Esbuild)
├── package.json           # Dependências e Scripts
└── README.md              # Documentação do Projeto
```

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (Versão LTS recomendada)
* Git

## Como Executar o Projeto

### 1. Instalação das Dependências

Clone o repositório e instale as bibliotecas necessárias listadas no `package.json`:

```bash
npm install
```

### 2. Abrindo o Test Runner (Modo Interativo)

Para abrir a interface do Cypress e ver os testes rodando em tempo real:

```bash
npx cypress open
```
1. Escolha a opção **E2E Testing**.
2. Selecione o navegador (Chrome/Electron).
3. Clique no arquivo `.feature` desejado (ex: `buscaRapida.feature`) para iniciar a execução.

### 3. Rodando em Modo Headless (Sem interface gráfica)

Para rodar todos os testes no terminal (útil para CI/CD):

```bash
npx cypress run
```

## Cenários Automatizados

Atualmente, o projeto cobre o seguinte fluxo principal no **Portal da Transparência da Paraíba**:

### Busca Rápida de Despesas (Home)
Valida a funcionalidade de filtro rápido na página inicial, garantindo que o cidadão consiga consultar gastos filtrando por:
* **Área/Função** (Ex: Educação, Saúde, Segurança)
* **Ano do Exercício** (Ex: 2025, 2024, etc.)

Foram implementados **6 cenários de teste** utilizando *Scenario Outline* para variação de dados.

## Autores / Grupo

* **Nome do Aluno 1**
* **Nome do Aluno 2**
* **Nome do Aluno 3**

---
*Projeto desenvolvido para a disciplina de Quality Assurance (QA).*