export function getHealthStatus(data) {
  if (data.health > 50) {
    return 'healthy';
  }
  if (data.health >= 15 && data.health <= 50) {
    return 'wounded';
  }
  return 'critical';
}
