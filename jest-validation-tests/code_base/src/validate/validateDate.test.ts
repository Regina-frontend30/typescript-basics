import { validateDate } from './validateDate';

describe('validateDate', () => {
  it('валидирует корректную дату', () => {
    expect(validateDate('25.12.2025').isValid).toBe(true);
  });

  it('не пропускает буквы', () => {
    expect(validateDate('aa.bb.cccc').isValid).toBe(false);
  });

  it('не пропускает спецсимволы', () => {
    expect(validateDate('12@12@2025').isValid).toBe(false);
  });

  it('выдаёт ошибку, если дата раньше текущей', () => {
    expect(validateDate('01.01.2000').isValid).toBe(false);
  });
});
