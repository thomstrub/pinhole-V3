import React from 'react';
import { render, screen } from '@testing-library/react';
import SimpleCalculator from '../simpleCalculator';

describe('SimpleCalculator', () => {
  const mockHandleInputChange = jest.fn();
  const mockHandleUnitToggle = jest.fn();
  const inputs = {
    focalLength: { inches: '', millimeters: '', unit: 'inches' },
    diameter: { inches: '', millimeters: '', unit: 'millimeters' }
  };
  const results = { fStop: 'F-128' };

  it('renders input fields for focal length and diameter', () => {
    render(
      <SimpleCalculator
        handleInputChange={mockHandleInputChange}
        inputs={inputs}
        results={results}
        handleUnitToggle={mockHandleUnitToggle}
        isDesktop={true}
      />
    );
    expect(screen.getByLabelText(/Focal Length/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Pinhole Diameter/i)).toBeInTheDocument();
  });

  it('renders the f-stop result', () => {
    render(
      <SimpleCalculator
        handleInputChange={mockHandleInputChange}
        inputs={inputs}
        results={results}
        handleUnitToggle={mockHandleUnitToggle}
        isDesktop={true}
      />
    );
    expect(screen.getByLabelText(/F-Stop/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue('F-128')).toBeInTheDocument();
  });
});
