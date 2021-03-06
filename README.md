# Curso-de-React.Js-Next.Js-
repositorio feito para acompanhar a minha evolução durante o curso de React.Js + Next.Js completo do básico  ao avançado


# Diario de bordo

Diario com o intuito de catalogar o meu progesso no curso

# Dia 20/07/21

- Sessao 1 Introdução
  - ambiente configurado
  
- Sessao 2 React(Basico)
  - Introdução à seção
  - Ambiente de desenvolvimento no windos
  - npx create-react-app 1 e 2 (criando a aplicação e entendendo seus arquivos)
  - Exemplo de npm run build e do que se trata
  - React single page
  - Componentes funcionais e componentes de classe
  - Componentes de classe com estado(stateful)

# Dia 21/07/21

- Sessao 2 React(Basico)
  - State com arrays e objetos
  - Licecyle methods(metodos de ciclo de vida) - parte 1
  - Licecyle methods(metodos de ciclo de vida) - parte 2
  - Buscando dados externos com fetch(Data fetching)
  - Props e organização dos componentes - Parte 1
  - Props e organização dos componentes - Parte 2
  - Props e organização dos componentes - Parte 3

  Ilustração: 

  ![atualizacao-21-07-2021-23h02](https://user-images.githubusercontent.com/75328283/126581715-7762cd42-f0cb-46a7-886a-ee740f50a289.png)

# Dia 22/07/2021

obs: hoje eu explorei um pouco mais a biblioteca do react e adicionei uma função de voltar a paginação 
- Sessao 2 React(Basico)
  - Trabalho com inputs de texto
  - Fluxo de dados, componentes e state bs props
  - Decidir onde o estado vivo é importante (React Developer Tools)
  - Eventos Sinteticos do React (SyntheticEvent)
  - Configurando o Git e SSh Keys no Windos
  - Deploy do nosso projeto na Netlify
    obs: tive muitos problemas para conseguir fazer esse deploy, pois demorei para perceber que no curso ele transforma a pasta do projeto em um repositorio do git, enquanto eu    estava tendando da deploy nesse reposiorio que eu já tinha feito antes que por conta do git ignore não tinha a pasta build. 
  
  - Deploy https://gallant-leavitt-cb42a0.netlify.app/ :

  ![image](https://user-images.githubusercontent.com/75328283/126730507-3e1adb83-625a-4a11-b737-d412b58f872d.png)


# Dia 23/07/2021
- Sessao 2 React(Basico)
  -  Migrando para React Hooks
  -  Mais sobre this.setState em classes

# Dia 26/07/2021
- Sessao 2 React(Basico)
  - Indrodução à testes com jest e Testing Library - parte 1
  - Indrodução à testes com jest e Testing Library - parte 2
  - Indrodução à testes com jest e Testing Library - parte 3
  - Indrodução à testes com jest e Testing Library - parte 4
    - realizei os testes nos components (menos na home, pois é o conteudo da proxima sessão), e criei uma snapshot para cada teste de componente
   
   Ilustração:
   ![Test spec PostCardComponent](https://user-images.githubusercontent.com/75328283/127071199-d65368c2-66eb-46b3-863d-8d224062f234.png)
 
 # Dia 27/07/2021
- Sessao 2 React(Basico)
  - Eslint, prettier, editorconfig e props-types
    - comando: npx eslint --init
    - comando: npx eslint src/**/*.jsx --fix
    - comando: npm test -- --watchAll="false" "--coverage"
    - comando: npm i -D prettier eslint-config-prettier eslint-plugin-prettier  

  - ERRATA : defaultProps e destructuring

obs(Hoje tive muita dificuldade com as configurações, queria ter começado a outra sessão ainda hoje, mas por conta dos erros que tive que corrigir não consegui, porem consegui terminar a segunda seção 2 (React o básico))

# Dia 02/08/2021

- Inicio da seção 20: JavaScript Essencial - Bônus;
  - Arrays Arrays - Atribuição via desestruturação (destructuring assignment)
  - Objetos - Atribuição via desestruturação (destructuring assignment)
  - Funções
  - Array filter
  - Arry Map
  - Array Reduce

# Dia 03/08/2021

- seção 20: JavaScript Essencial - Bônus
  - Filter + map + reduce
  - Foreach
  - Classes
  - Metodos estáticos
  - Promises
  
# Dia 04/08/2021

- seção 20: JavaScript Essencial - Bônus
  - Async / Await
  - Fetch API
  - Fetch API e Axios

# Dia 06/08/2021

- seção 3: Mock Service Worker e testes para Home 
  - Configurando Mock Service Worker para iniciar os teste
  - Testando os componentes renderizados pelo template <Home />
  - Testando a busca por posts
  - Testando o botão "Load more posts"

# Dia 09/08/2021

- Seção 4: Reack Hooks e Padrões (Teoria)
  -  Configuração do projeto (eslint, prettier, editorconfig e prop-types)
      - comando: npm i -D prettier eslint-config-prettier eslint-plugin-prettier
      - comando: npx eslint src/**/*.jsx --fix
      -  comando: npm i prop-types  
  - useState - React Hook (Parte 1)
  
  ![useState - React Hook (Parte 1)](https://user-images.githubusercontent.com/75328283/128793675-b3c37e6d-ba71-4357-9f2e-70dcfd41387a.png)

#Dia 10/08/2021
- Seção 4: Reack Hooks e Padrões (Teoria)
  - useStae - React Hook(Parte2)
  - useEffect - React Hook
  - Regras dos hooks
  - useCallback - React Hook
   
  ![React Hooks (Parte 2)](https://user-images.githubusercontent.com/75328283/128950385-c07321f7-bdc9-4e86-b58f-5091d8b38110.png)

#Dia 12/08/2021
- Seção 4: Reack Hooks e Padrões (Teoria)
  - useMemo - React Hook
  - useRef - React Hook
  
  ![React Hooks (Parte 3)](https://user-images.githubusercontent.com/75328283/129284869-14d3d6dd-90ba-450c-9e22-a2e6f65fe427.png)

#Dia 14/08/2021
- Seção 4: Reack Hooks e Padrões (Teoria)
  - useContext Parte 1 - React Hook
  - useContext Parte 2 - React Hook
  
  ![React Hooks (Parte 4)](https://user-images.githubusercontent.com/75328283/129460006-357bbc47-504c-435a-aa07-6f7834573948.png)

#Dia 17/08/2021
- Seção 4: Reack Hooks e Padrões (Teoria)
  - useReducer - React Hook
  
  ![React Hooks (Parte 5)](https://user-images.githubusercontent.com/75328283/129796069-1c075f51-fccd-407f-8d12-f7072628332f.png)

#Dia 18/08/2021
- Seção 4: Reack Hooks e Padrões (Teoria)
  - useReducer+useContext - React Hook
  
  ![useState - React Hook (Parte 6)](https://user-images.githubusercontent.com/75328283/129980025-d5c9492a-d43b-4b75-af40-9a24e144b4b8.png)

#Dia 23/08/21
- Seção 4: Reack Hooks e Padrões (Teoria)
  - Criando meu próprio Hook - React Hook
  
  ![React Hooks - criando Hook (Parte 7)](https://user-images.githubusercontent.com/75328283/130509176-201676d2-4152-4cd9-b289-51efba6cacbb.png)



  
