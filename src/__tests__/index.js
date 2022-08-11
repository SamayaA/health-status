// test(description, work);
import { getHealthStatus } from '../index';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 34 }, 'wounded'],
  [{ name: 'Маг', health: 14 }, 'critical'],
])(('check health status'), (character, expected) => {
  const result = getHealthStatus(character);
  expect(result).toBe(expected);
});
