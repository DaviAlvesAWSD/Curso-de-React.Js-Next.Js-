import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Home } from '.';

import { rest } from 'msw';
import { setupServer, SetupServer } from 'msw/node';


const handlers = [
  rest.get('*jsonplaceholder.typicode.com*', async (req,res,ctx) => {
    return res(ctx.json([
      {
        userId: 1,
        id: 1,
        title: 'title1',
        body: 'body1',
        url: 'img1.jpg'
      },
      {
        userId: 1,
        id: 1,
        title: 'title2',
        body: 'body2',
        url: 'img2.jpg'
      },
      {
        userId: 1,
        id: 1,
        title: 'title3',
        body: 'body3',
        url: 'img3.jpg'
      },
    ])
    );
  }),
];

const server = setupServer(...handlers);

describe('<Home />', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
  });

  it('should render search, posts and load more', async () => {
   render(<Home />);
   const noMorePosts = screen.getByText('Search not found');

   //expect.assertions(3);

   await waitForElementToBeRemoved(noMorePosts);
 

  
   const search = screen.getByPlaceholderText(/type your search/i);
   expect(search).toBeInTheDocument();

   const images = screen.getAllByRole('img', {name: /title/i});
   expect(images).toHaveLength(2);
   
   const button = screen.getByRole('button', {name: /Load more pages/i});
   expect(button).toBeInTheDocument();
  });

  it('should seach  for posts', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('Search not found');

    //expect.assertions(10);

    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText(/type your search/i);

    expect(screen.getByRole('heading', { name: 'title1' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'title2' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title3' })).not.toBeInTheDocument();

  });
  it('should load more posts', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('Search not found');
 
    await waitForElementToBeRemoved(noMorePosts);
    
    const button = screen.getByRole('button', {name: /Load more pages/i});

    userEvent.click(button);
    expect(screen.getByRole('heading', {name: 'title3'})).toBeInTheDocument();
    expect(button).toBeDisabled();
   });
  
});
