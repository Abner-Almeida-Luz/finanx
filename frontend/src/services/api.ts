const API_URL = 'http://localhost:8080';

export async function getHealth() {
  const response = await fetch(`${API_URL}/actuator/health`);

  if (!response.ok) {
    throw new Error(`Erro HTTP: ${response.status}`);
  }

  return response.json();
}
