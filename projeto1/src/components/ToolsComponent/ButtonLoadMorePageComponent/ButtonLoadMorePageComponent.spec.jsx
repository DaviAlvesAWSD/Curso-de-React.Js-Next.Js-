
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ButtonLoadMorePageComponent } from '.';

describe('<ButtonLoadMorePageComponent />', () => {
  it('should render the button with the text "Load more"', () => {
    render(<ButtonLoadMorePageComponent text="Load more" />);
    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
    //expect(button).toHaveAttribute('class', 'buttonMore');
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<ButtonLoadMorePageComponent text="Load more" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    userEvent.click(button);
    //fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);

    //expect(button).toBeInTheDocument();
    //expect(button).toHaveAttribute('class', 'buttonMore');
  });

  it('should be disabled when disabled is true', () => {
    render(<ButtonLoadMorePageComponent text="Load more" disabled={true} />);
    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
    //expect(button).toHaveAttribute('class', 'buttonMore');
  });

  it('should be enabled when disabled is false', () => {
    render(<ButtonLoadMorePageComponent text="Load more" disabled={false} />);
    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeEnabled();
    //expect(button).toHaveAttribute('class', 'buttonMore');
  });
  it('should match snapshot', () => {
    const { container } = render(<ButtonLoadMorePageComponent text="Load more" disabled={false} />);

    expect(container.firstChild).toMatchSnapshot();
  });

});