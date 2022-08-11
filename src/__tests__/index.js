// test(description, work);
import { getHealthStatus } from '../index';

test('check Health', () => {
  const character = {
    name: 'Маг',
    health: 90,
  };
  expect(getHealthStatus(character)).toBe('healthy');
  character.health = 34;
  expect(getHealthStatus(character)).toBe('wounded');
  character.health = 14;
  expect(getHealthStatus(character)).toBe('critical');
});
