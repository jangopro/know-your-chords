import { render, screen } from '@testing-library/react';
import Chord from '../Chord';

test('should render', () => {
    render(<Chord chord="A" displayImage selected={false} />);
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByAltText('A')).not.toHaveClass('selected-chord');
});

test('should render', () => {
    render(<Chord chord="A" displayImage selected />);
    expect(screen.getByAltText('A')).toHaveClass('selected-chord');
});

test('should render', () => {
    render(<Chord chord="A" displayImage={false} selected />);
    expect(screen.queryByAltText('A')).not.toBeInTheDocument();
});