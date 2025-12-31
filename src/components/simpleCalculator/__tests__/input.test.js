import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../../input/input';

describe('Input', () => {
  const mockHandleInputChange = jest.fn();
  const mockHandleUnitToggle = jest.fn();
  const name = { variable: 'focalLength', readibleName: 'Focal Length' };
  const value = { inches: '', millimeters: '', unit: 'inches' };

  it('renders input with correct label', () => {
    render(
      <Input
        name={name}
        handleInputChange={mockHandleInputChange}
        value={value}
        handleUnitToggle={mockHandleUnitToggle}
        isDesktop={true}
      />
    );
    expect(screen.getByLabelText(/Focal Length/i)).toBeInTheDocument();
  });

  it('calls handleInputChange on input', () => {
    render(
      <Input
        name={name}
        handleInputChange={mockHandleInputChange}
        value={value}
        handleUnitToggle={mockHandleUnitToggle}
        isDesktop={true}
      />
    );
    const input = screen.getByLabelText(/Focal Length/i);
    fireEvent.change(input, { target: { value: '100' } });
    expect(mockHandleInputChange).toHaveBeenCalled();
  });
});
