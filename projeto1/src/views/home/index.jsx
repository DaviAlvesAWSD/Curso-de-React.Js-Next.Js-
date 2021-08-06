import { useEffect, useState, useCallback } from 'react';

import './styles.css';

//  Meus imports
import { PostsComponent } from '../../components/PostsComponent';
import { loadPosts } from '../../utils/load-posts';
import { ButtonLoadMorePageComponent } from '../../components/ToolsComponent/ButtonLoadMorePageComponent';
import { ButtonLoadLessPageComponent } from '../../components/ToolsComponent/ButtonLoadLessPageComponent';
import { SearchInputComponent } from '../../components/ToolsComponent/SearchInputComponent';

// usando components funcionais com hooks
export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(2);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;
  const noLessPosts = page < postsPerPage;

  const handleLoadPost = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    console.log(new Date().toLocaleString('pt-br'));
    handleLoadPost(0, postsPerPage);
  }, [handleLoadPost, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const loadLessPosts = () => {
    const prevPage = page - postsPerPage;
    posts.splice(prevPage, 2);

    setPosts(posts);
    setPage(prevPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const filteredPosts = searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && <h1>{searchValue}</h1>}

        <SearchInputComponent searchValue={searchValue} handleChange={handleChange} />
      </div>

      {filteredPosts.length > 0 && <PostsComponent posts={filteredPosts} />}

      {filteredPosts.length === 0 && <p>Search not found</p>}

      <ul className="buttons">
        <div className="button-container">
          {!searchValue && (
            <ButtonLoadLessPageComponent text="Load less pages" onClick={loadLessPosts} disabled={noLessPosts} />
          )}
        </div>
        <div className="button-container">
          {!searchValue && (
            <ButtonLoadMorePageComponent text="Load more pages" onClick={loadMorePosts} disabled={noMorePosts} />
          )}
        </div>
      </ul>
    </section>
  );
};

//=======================================================================================================================================
// usando components de Classe com state
/*
export class Home2 extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: ''
  };

  observações
  É invocado imediatamente
  após um componente ser montado (inserido na árvore)
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

  loadLessPosts = () => {
    const {
      page,
      postsPerPage,
      posts
    } = this.state;

    const prevPage = page - postsPerPage;
    posts.splice(prevPage, 2);

    this.setState({ posts, page: prevPage });
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value })
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    const noLessPosts = page < postsPerPage;

    const filteredPosts = !!searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
      : posts;

    return (
      <section className="container">

        <div className="search-container">
          {!!searchValue && (

            <h1>{searchValue}</h1>

          )}

          <SearchInputComponent searchValue={searchValue} handleChange={this.handleChange} />
        </div>

        {filteredPosts.length > 0 && (
          <PostsComponent posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <p>Search not found</p>
        )}


        <ul className="buttons">
          <div className="button-container">
            {!searchValue && (
              <ButtonLoadLessPageComponent
                text="Load less pages"
                onClick={this.loadLessPosts}
                disabled={noLessPosts}
              />
            )}

          </div>
          <div className="button-container">
            {!searchValue && (
              <ButtonLoadMorePageComponent
                text="Load more pages"
                onClick={this.loadMorePosts}
                disabled={noMorePosts}
              />
            )}

          </div>

        </ul>
      </section>

    );
  }
}

*/

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
