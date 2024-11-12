export const handleClick = async () => {
    const response = await fetch('http://127.0.0.1:8000/', {
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