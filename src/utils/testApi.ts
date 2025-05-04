// Simple test functions to check if the API is working

/**
 * Test the API through a proxy to avoid CORS issues
 */
export async function testProxyApi() {
  try {
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/https://2fl5484vo7.execute-api.us-east-1.amazonaws.com/prod/';
    console.log('Testing API through proxy at:', PROXY_URL);

    // Try a simple POST request through the proxy
    const response = await fetch(PROXY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: JSON.stringify({
        message: "Hello, can you help me with a workout plan?"
      }),
    });

    console.log('Proxy response status:', response.status);
    console.log('Proxy response headers:', response.headers);

    const text = await response.text();
    console.log('Proxy response text:', text);

    try {
      const data = JSON.parse(text);
      console.log('Parsed proxy response:', data);
      return { success: true, data };
    } catch (e) {
      console.error('Error parsing proxy response:', e);
      return { success: false, error: 'Failed to parse proxy response', text };
    }
  } catch (error) {
    console.error('Proxy API test failed:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function testApi() {
  try {
    const API_URL = 'https://2fl5484vo7.execute-api.us-east-1.amazonaws.com/prod/';
    console.log('Testing API at:', API_URL);

    // Try a simple POST request with mode: 'cors' and credentials: 'omit'
    const response = await fetch(API_URL, {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        message: "Hello, can you help me with a workout plan?"
      }),
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);

    const text = await response.text();
    console.log('Response text:', text);

    try {
      const data = JSON.parse(text);
      console.log('Parsed response:', data);
      return { success: true, data };
    } catch (e) {
      console.error('Error parsing response:', e);
      return { success: false, error: 'Failed to parse response', text };
    }
  } catch (error) {
    console.error('API test failed:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
