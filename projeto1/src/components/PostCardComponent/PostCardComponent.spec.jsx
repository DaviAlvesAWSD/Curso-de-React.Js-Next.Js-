import { PostCardComponent } from '.';
import { render, screen } from '@testing-library/react';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCardComponent />', () => {
  it('should render PostCardComponent correctly', () => {
    render(<PostCardComponent {...props} />);

    expect(screen.getByRole('img', { name: 'title 1' })).toHaveAttribute('src', 'img/img.png');

    expect(screen.getByRole('heading', { name: 'title 1' })).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCardComponent {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
