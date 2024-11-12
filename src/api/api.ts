export const handleClick = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'Hello from Vite' })
    });
    const data = await response.json();
    const statusCode = response.status;
    return {data, statusCode};
  };