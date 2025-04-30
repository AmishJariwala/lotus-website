// Proxy API utility to handle CORS issues

/**
 * Call the AI API through a proxy to avoid CORS issues
 */
export async function callProxyApi(message: string): Promise<string> {
  try {
    // Use a proxy service to avoid CORS issues
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/https://2fl5484vo7.execute-api.us-east-1.amazonaws.com/prod/';
    console.log('Calling API through proxy at:', PROXY_URL);

    // Make a simple POST request with just the message
    const response = await fetch(PROXY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Proxy API error:', response.status, response.statusText, errorText);
      throw new Error(`Proxy API error: ${response.status} ${response.statusText}`);
    }

    // Get the response text first
    const responseText = await response.text();
    console.log('Raw proxy API response:', responseText);
    
    // Try to parse it as JSON
    try {
      const data = JSON.parse(responseText);
      console.log('Parsed proxy API response:', data);
      
      // Try to extract the response from various formats
      if (data.message) {
        return data.message;
      } else if (data.response) {
        return data.response;
      } else if (data.reply) {
        return data.reply;
      } else if (data.body) {
        // Try to parse the body if it's a string
        try {
          const bodyData = typeof data.body === 'string' ? JSON.parse(data.body) : data.body;
          if (bodyData.message) {
            return bodyData.message;
          }
        } catch (e) {
          console.error('Error parsing body:', e);
        }
      } else if (typeof data === 'string') {
        return data;
      }
      
      // If we couldn't extract a specific field, return the whole response as a string
      return JSON.stringify(data);
    } catch (e) {
      // If it's not valid JSON, just return the text
      console.log('Response is not JSON, returning as text');
      return responseText;
    }
  } catch (error) {
    console.error('Error calling proxy API:', error);
    throw error;
  }
}
