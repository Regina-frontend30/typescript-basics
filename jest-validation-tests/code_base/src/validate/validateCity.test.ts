import { validateCityName } from "./validateCity";
import { errors } from "../utils/dictionarty";

describe("validateCityName", () => {
  it("возвращает ошибку, если поле пустое", () => {
    const result = validateCityName("");
    expect(result.isValid).toBe(false);
    expect(result.message).toBe(errors.city.required);
  });

  it("возвращает ошибку, если есть экранирование", () => {
    const result = validateCityName('Paris<');
    expect(result.isValid).toBe(false);
    expect(result.message).toBe(errors.city.escape);
  });

  it("пропускает город с дефисами", () => {
    const result = validateCityName("Saint-Louis");
    expect(result.isValid).toBe(true);
    expect(result.message).toBe(errors.city.valid);
  });

  it("пропускает город с восклицательными знаками", () => {
    const result = validateCityName("Ha! Ha!");
    expect(result.isValid).toBe(true);
    expect(result.message).toBe(errors.city.valid);
  });

  it("пропускает название с диакритическими символами", () => {
    const result = validateCityName("Ağrı");
    expect(result.isValid).toBe(true);
    expect(result.message).toBe(errors.city.valid);
  });

  it("пропускает название из одной буквы", () => {
    const result = validateCityName("A");
    expect(result.isValid).toBe(true);
    expect(result.message).toBe(errors.city.valid);
  });
});
