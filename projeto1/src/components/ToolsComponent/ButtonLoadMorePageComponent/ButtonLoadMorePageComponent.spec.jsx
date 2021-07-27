import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ButtonLoadMorePageComponent } from '.';

describe('<ButtonLoadMorePageComponent />', () => {
  it('should render the button with the text "Load more"', () => {
    const fn = jest.fn();
    render(<ButtonLoadMorePageComponent text="Load more" disabled={false} onClick={fn} />);

    expect.assertions(1);

    const button = screen.getByRole('button', { name: /Load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<ButtonLoadMorePageComponent text="Load more" disabled={false} onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });

    userEvent.click(button);
    //fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);

    //expect(button).toBeInTheDocument();
    //expect(button).toHaveAttribute('class', 'buttonMore');
  });

  it('should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<ButtonLoadMorePageComponent text="Load more" disabled={true} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
    //expect(button).toHaveAttribute('class', 'buttonMore');
  });

  it('should be enabled when disabled is false', () => {
    const fn = jest.fn();
    render(<ButtonLoadMorePageComponent text="Load more" onClick={fn} disabled={false} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeEnabled();
    //expect(button).toHaveAttribute('class', 'buttonMore');
  });
  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<ButtonLoadMorePageComponent text="Load more" disabled={false} onClick={fn} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
