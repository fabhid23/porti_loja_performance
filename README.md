# Porti Loja Performance

Este projeto contém testes de performance para a aplicação Porti Loja.

## Pré-requisitos

Para executar este projeto, você precisará ter as seguintes ferramentas instaladas em sua máquina:

*   **Node.js**: Certifique-se de ter o Node.js (versão 14 ou superior) e o npm (Node Package Manager) instalados. Você pode baixá-los em [nodejs.org](https://nodejs.org/).
*   **k6**: Ferramenta de teste de carga. Siga as instruções de instalação em [k6.io](https://k6.io/docs/getting-started/installation/).

## Configuração do Projeto

Siga os passos abaixo para configurar e executar o projeto:

1.  **Clone o repositório** (se ainda não o fez):

    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd porti_loja_performance
    ```

2.  **Instale as dependências**: Navegue até o diretório raiz do projeto e execute o seguinte comando para instalar todas as dependências necessárias:

    ```bash
    npm install
    ```

## Executando os Testes

Os testes de performance são escritos usando **k6**.

Para executar todos os testes, utilize o seguinte comando:

```bash
k6 run <nome_do_arquivo_de_teste>.js
```

Se você quiser executar um teste específico, você pode usar:

```bash
k6 run tests/login.test.js
```

## Projeto a ser testado

Este projeto de performance tem como alvo a aplicação disponível no seguinte repositório:

*   [projeto_portif_loja](https://github.com/fabhid23/projeto_portif_loja)

Para que os testes de performance funcionem corretamente, você deve ter este projeto rodando localmente. Siga as instruções no `README.md` do repositório `projeto_portif_loja` para configurá-lo e iniciá-lo.

---

**Nota**: Este `README.md` é um modelo. Você pode precisar ajustá-lo com base na ferramenta de teste exata (Playwright, Cypress, Jest, etc.) e em quaisquer outras especificidades do seu projeto.

## Documentação Adicional

*   **Configurações Locais**: Para configurações específicas do ambiente local, consulte `config/config.local.json`.
*   **Variáveis de Ambiente**: As variáveis utilizadas nos testes podem ser encontradas em `utils/variaveis.js`.
*   **Funções de Autenticação**: Funções auxiliares para autenticação estão em `helpers/autenticacao.js`.

---

**Nota**: Este `README.md` é um modelo. Você pode precisar ajustá-lo com base na ferramenta de teste exata (Playwright, Cypress, Jest, etc.) e em quaisquer outras especificidades do seu projeto.