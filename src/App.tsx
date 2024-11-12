import { Button, Center, Code, Stack, Anchor } from '@mantine/core';
import { useState } from 'react';
import { handleClick } from './api/api';

function App() {

  const [responseData, setResponseData] = useState('');
  const [statusCode, setStatusCode] = useState('');

  const handleClickButton = async () => {
    const { data, statusCode } = await handleClick();
    const hyperlink = `${import.meta.env.VITE_API_URL}`;

    setStatusCode(JSON.stringify(statusCode));
    setResponseData(JSON.stringify(data));
  };

  return (
    <>
      <Center h={800}>
        <Stack w={300}>
          <Button variant="filled" size="lg" onClick={handleClickButton}>Send POST-query
          </Button>
          <Code block style={{ height: '50px', textAlign: 'center', fontSize: '14px' }}>{responseData}</Code>
          <Code block style={{ height: '50px', textAlign: 'center', fontSize: '14px' }}>{statusCode}</Code>
          <Anchor href={import.meta.env.VITE_API_URL} target="_blank">{import.meta.env.VITE_API_URL}</Anchor>
        </Stack>
      </Center>
    </>
  )
}

export default App
