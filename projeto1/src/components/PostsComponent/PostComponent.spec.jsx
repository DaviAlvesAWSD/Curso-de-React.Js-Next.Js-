import { render, screen } from '@testing-library/react';

import { PostsComponent } from '.';

const props = {
  posts: [
    {
      id: 1,
      title: 'title 1',
      body: 'body 1',
      cover: 'img/img1.png',
    },
    {
      id: 2,
      title: 'title 2',
      body: 'body 2',
      cover: 'img/img2.png',
    },
    {
      id: 3,
      title: 'title 3',
      body: 'body 3',
      cover: 'img/img3.png',
    },
  ],
};

describe('<PostComponent />', () => {
  it('Should render posts', () => {
    render(<PostsComponent {...props} />);

    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText(/body/i)).toHaveLength(3);
    expect(screen.getByRole('img', { name: 'title 3' })).toHaveAttribute('src', 'img/img3.png');
  });

  it('Should not render posts', () => {
    render(<PostsComponent />);

    expect(screen.queryByRole('heading', { name: /title/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('img', { name: /title/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/body/i)).not.toBeInTheDocument();
    expect(screen.queryByRole('img', { name: /title/i })).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostsComponent {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
