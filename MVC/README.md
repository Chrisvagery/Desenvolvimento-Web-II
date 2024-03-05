Lista de Contatos usando o Padrão MVC em JavaScript

Este projeto de lista de contatos foi desenvolvido como uma aplicação de exemplo para demonstrar a implementação do padrão MVC (Model-View-Controller) em JavaScript. Ele fornece uma maneira simples e organizada de gerenciar uma lista de contatos, permitindo aos usuários adicionar e remover contatos de forma interativa.

 A motivação por trás deste projeto é fornecer uma compreensão clara e prática de como aplicar o padrão de arquitetura MVC em um contexto de desenvolvimento web. O padrão MVC é amplamente utilizado na indústria de software devido à sua capacidade de separar os dados, a lógica de apresentação e a lógica de controle em componentes distintos, resultando em um código mais modular, escalável e fácil de manter.

Funcionalidades
Adição de contatos com validação de campos (nome, telefone e email).
Remoção de contatos da lista.
Armazenamento local dos contatos utilizando o Local Storage do navegador.

Componentes
Modelo (Model)
O Modelo é responsável por gerenciar os dados da aplicação. Neste projeto, a classe ContactModel é utilizada para adicionar, remover e armazenar os contatos.

Visualização (View)
A Visualização é responsável pela apresentação dos dados aos usuários e pela interação com eles. A classe ContactView lida com a renderização da lista de contatos na interface do usuário e a captura de eventos como adicionar e remover contatos.

Controlador (Controller)
O Controlador é responsável por mediar a interação entre o Modelo e a Visualização. A classe ContactController conecta o Modelo e a Visualização, gerenciando as ações do usuário e atualizando a interface de acordo com as mudanças nos dados.