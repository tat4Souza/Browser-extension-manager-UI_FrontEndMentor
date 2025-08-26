# Frontend Mentor - Solução para UI de gerenciamento de extensões

Essa é a minha solução para [Browser extensions manager UI challenge no Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp).

- [Resumo](#resumo) - visão geral do projeto
  - [O Desafio](#o-desafio) - objetivos da UI de gerenciamento
  - [Vídeo](#vídeo) - demonstração da UI funcionando
- [Meu processo](#meu-processo) - como desenvolvi o projeto
  - [Feito com:](#feito-com) - tecnologias e bibliotecas usadas
  - [O que aprendi?](#o-que-aprendi) - principais aprendizados e desafios
  - [Continuar em Desenvolvimento](#continuar-em-desenvolvimento) - metas de melhorias futuras
- [Autor](#autor) - link dos meus perfis

## 📝 Resumo

&nbsp;&nbsp;&nbsp;O projeto tem como objetivo o desenvolvimento de uma UI que permita a administração das extensões de navegador que estão ativas e inativas, possibilitando, também, a remoção de qualquer uma delas.

## 🎯 O Desafio

Usuários devem ser capazes de:

- Alternar as extensões entre os estados de inativo e ativo
- Filtrar extensões ativas e inativas
- Remover extensões da lista
- Selecionar o tema de cor
- Visualizar o layout adequado dependendo do tamanho de tela do dispositivo
- Ver estados de hover e focus em todos os elementos interativos

## 🎥 Vídeo

<a href="https://youtu.be/Xaln8cSK0ic" target="_blank">
  <img src="./public/images/Browser Extension Manager - thumbnail.png" alt="Gerenciador de Extensões funcionando" />
</a>

## ⚙️ Meu Processo

&nbsp;&nbsp;&nbsp;Na criação do projeto, usei o template proporcionado pelo create-react-app. Usei o React para criar um único componente reutilizável para todos os botões presentes na tela e também para fazer um componente único para as extensões em si. No processo do desafio, pude me aprofundar um pouco mais em temáticas de cor diferente para uma mesma UI. Fazer os estilos de todos os estados do botão foi mais cansativo, já que não era do meu costume fazer alterações tão distintas para cada modo interativo. Eu decidi mudar levemente a cor principal e algumas das cores do modo escuro, mas apenas por satisfação pessoal. Outra adição que inclui, foi um modal que confirma se o usuário realmente deseja remover a extensão, pois achei que seria conveniente e uma boa oportunidade para treinar algo nesse sentido.

## 🛠️ Feito com:

- [React](https://reactjs.org/) - Biblioteca JS
- [Framer Motion](https://www.npmjs.com/package/framer-motion) - Animações para componentes React
- [Classnames](https://www.npmjs.com/package/classnames) - Manipulação condicional de classes CSS
- [Prime Icons](https://primeng.org/icons) - Biblioteca de ícones personalizados
- CSS3 | Flexbox | Grid - Layout e estilização responsiva
- Desktop-first workflow

## 📚 O que aprendi?

&nbsp;&nbsp;&nbsp;Na minha perspectiva, esse projeto foi muito interessante para compreender melhor a dinâmica de dados passados de componentes pais para filhos no React. Um problema que enfrentei durante o desenvolvimento foi justamente relacionado a como passar esses dados da forma necessária para que os filtros se atualizassem corretamente. Um dos erros que cometi e que me ajudou a entender mais o React foi: atualizar os filtros a partir do array com os dados originais ao invés do array que foi modificado, seja pela própria filtragem ou pela remoção de alguma extensão.

## 🚀 Continuar em desenvolvimento

&nbsp;&nbsp;&nbsp;Para programas fututos, gostaria de continuar explorando essa relação entre dados, componentes pais e filhos no React; mas também, pretendo achar alguma forma mais eficiente de fazer a estilização de temas de cor, pois achei essa parte uma das mais cansativas no projeto como um todo.

## 👩‍💻 Autor

- GitHub - [Taís Souza](https://github.com/tat4Souza)
- Frontend Mentor - [@tat4Souza](https://www.frontendmentor.io/profile/tat4Souza)
- Linkedin - [Taís Souza](https://www.linkedin.com/in/tais-f-souza/)
