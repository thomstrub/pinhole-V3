import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultsMini from '../../resultMiniSection/resultsMini/resultMini';

describe('ResultsMini', () => {
  const name = { variable: 'fStop', readibleName: 'F-Stop' };

  it('renders the result label and value', () => {
    render(
      <ResultsMini
        name={name}
        result={'F-128'}
        isSimpleCalculator={true}
        isDesktop={true}
      />
    );
    expect(screen.getByLabelText(/F-Stop/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue('F-128')).toBeInTheDocument();
  });
});
