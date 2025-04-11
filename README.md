# Linktree Clone em Angular

Este projeto é um clone simples da popular ferramenta **Linktree**, desenvolvido com o framework **Angular** (versão 17.3). Seu objetivo é agrupar diversos links importantes em um único lugar, facilitando o compartilhamento em redes sociais e outras plataformas.

## Funcionalidades

- **Foto de Perfil:** Exibição da foto do usuário.
- **Apresentação:** Texto breve de introdução ou descrição do usuário/entidade.
- **Botões de Redes Sociais:** Botões clicáveis para plataformas sociais e links relevantes.
- **Dados dinâmicos via JSON:** Os links e informações dos botões são carregados a partir de um arquivo JSON de mock.

## Tecnologias Utilizadas

- **Angular**: Framework moderno para construção de aplicações web.
- **HTML**: Linguagem de marcação utilizada na estrutura da aplicação.
- **CSS/SCSS**: Folhas de estilo para o layout e design.
- **JSON**: Utilizado como mock para simular dados dinâmicos.

## Como Executar

Este projeto utiliza Angular 17 (não AngularJS 1.x), e portanto já oferece suporte completo via Angular CLI. Siga os passos abaixo para executar localmente.

### Requisitos

- **Node.js**: Versão 22.13.1 ou superior
- **Angular CLI**: Versão 17.3.9 ou superior

### Clonando o Repositório

```bash
git clone https://github.com/LucasDouradoDEV/linktree-clone-angularjs
cd linktree-clone-angularjs
```

### Instalando Dependências

```bash
npm install
# ou
npm i
```

### Executando a Aplicação

```bash
npm run start
# ou
ng serve
```
A aplicação estará disponível em http://localhost:4200 por padrão.

### Observações
- Os dados utilizados (foto de perfil, apresentação, links) são apenas para fins de demonstração. Em uma aplicação real, recomenda-se o consumo de uma API ou banco de dados.
- Este projeto é uma implementação básica e pode ser expandido com autenticação, integração com backend, personalização de layout, entre outros.