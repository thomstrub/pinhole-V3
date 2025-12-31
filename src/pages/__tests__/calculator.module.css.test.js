import * as styles from '../calculator.module.css';

describe('calculator.module.css import', () => {
  it('should import an object with a root class', () => {
    expect(styles).toBeDefined();
    expect(typeof styles).toBe('object');
    expect(styles.root).toBeDefined();
    expect(typeof styles.root).toBe('string');
  });
});
