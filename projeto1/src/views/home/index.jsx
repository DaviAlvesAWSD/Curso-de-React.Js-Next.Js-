//import logo from './logo.svg';
import { Component } from 'react';

import './styles.css';

//  Meus imports
import { PostsComponent } from '../../components/PostsComponent';
import { loadPosts } from '../../utils/load-posts';
import { ButtonLoadMorePageComponent } from '../../components/ToolsComponent/ButtonLoadMorePageComponent';


// componente de class sem estado
export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10

  };

  /*observações 
  É invocado imediatamente 
  após um componente ser montado (inserido na árvore)*/
  async componentDidMount() {
    await this.loadPosts();

  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });

  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  }


  render() {
    const { posts, page, postsPerPage, allPosts } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    return (
      <section className="container">
        <PostsComponent posts={posts} />

        <div class="button-container">
          <ButtonLoadMorePageComponent
            text="Load more pages"
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          />

        </div>
      </section>

    );
  }
}


/* objeto de estudo
function App() {
  return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        );
} */

/* objeto de estudo
handleTimeout = () => {
  const {posts, counter} = this.state;
        posts[0].title = 'O titulo mudou';

  this.timeoutUpdate = setTimeout(() => {
          this.setState({ posts, counter: counter + 1 });
  }, 1000);
}
        */

/*
componentDidMount() {
          this.setState({
            posts: [
              {
                id: 1,
                title: 'O título 1',
                body: 'O corpo 1'
              },
              {
                id: 2,
                title: 'O título 2',
                body: 'O corpo 2'
              },
              {
                id: 3,
                title: 'O título 3',
                body: 'O corpo 3'
              },

            ]
          });
}
        */

/* Objeto de estudo
  estudo de arrow function

  handlePClick = () => {
          this.setState({ name: 'alfredo' });
    //  const {name} = this.state;
    //  console.log(`<p>clicado ${name}`);
  }

  handleAClick = (event) => {
            event.preventDefault();
          const {counter} = this.state;
          this.setState({counter: counter + 1 });

  }

          */


/* objeto de estudo
    state = {
            // counter: 0,
            posts: [
          {
            id: 1,
          title: 'O título 1',
          body: 'O corpo 1'
      },
          {
            id: 2,
          title: 'O título 2',
          body: 'O corpo 2'
      },
          {
            id: 3,
          title: 'O título 3',
          body: 'O corpo 3'
      },

          ]

  };

          */
