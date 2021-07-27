import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ButtonLoadLessPageComponent } from '.';

describe('<ButtonLoadLessPageComponent />', () => {
  it('should render the button with the text "Load less"', () => {
    const fn = jest.fn();
    render(<ButtonLoadLessPageComponent text="Load less" disabled={false} onClick={fn} />);

    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load less/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<ButtonLoadLessPageComponent text="Load less" disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load less/i });

    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<ButtonLoadLessPageComponent text="Load less" disabled={true} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load less/i });
    expect(button).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    const fn = jest.fn();
    render(<ButtonLoadLessPageComponent text="Load less" disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load less/i });
    expect(button).toBeEnabled();
  });
  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<ButtonLoadLessPageComponent text="Load less" disabled={false} onClick={fn} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
