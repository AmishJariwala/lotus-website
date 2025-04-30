// API utility functions

/**
 * Get a fallback response based on the user's message
 */
function getFallbackResponse(message: string): string {
  const lowerCaseInput = message.toLowerCase();

  if (lowerCaseInput.includes('hello') || lowerCaseInput.includes('hi')) {
    return "Hello! How can I help with your fitness journey today?";
  } else if (lowerCaseInput.includes('workout') || lowerCaseInput.includes('exercise')) {
    return "I can help you plan workouts! What type of exercise are you interested in? Strength training, cardio, or something else?";
  } else if (lowerCaseInput.includes('diet') || lowerCaseInput.includes('food') || lowerCaseInput.includes('eat')) {
    return "Nutrition is key to fitness success! I can help track your meals and suggest balanced options based on your goals.";
  } else if (lowerCaseInput.includes('weight') || lowerCaseInput.includes('lose') || lowerCaseInput.includes('gain')) {
    return "Weight management is about consistency. I can help track your progress and adjust your plan as needed.";
  } else if (lowerCaseInput.includes('goal')) {
    return "Setting clear fitness goals is important! What specific goals are you working toward?";
  } else if (lowerCaseInput.includes('muscle') || lowerCaseInput.includes('strength')) {
    return "Building muscle requires consistent strength training and proper nutrition. I recommend focusing on compound exercises like squats, deadlifts, and bench press.";
  } else if (lowerCaseInput.includes('cardio') || lowerCaseInput.includes('run')) {
    return "Cardio is great for heart health and calorie burning. Try mixing high-intensity intervals with steady-state cardio for optimal results.";
  } else if (lowerCaseInput.includes('protein') || lowerCaseInput.includes('supplement')) {
    return "Protein is essential for muscle recovery. Aim for 0.8-1g per pound of body weight daily, from a mix of whole foods and supplements if needed.";
  } else if (lowerCaseInput.includes('motivation') || lowerCaseInput.includes('stuck')) {
    return "Staying motivated can be challenging! Try setting small, achievable goals and celebrate your wins. Remember why you started and visualize your success.";
  }

  return "I'm here to support your fitness journey! You can ask me about workouts, nutrition, or tracking your progress.";
}

/**
 * Call the AI API to get a response to a user message
 */
export async function callAI(message: string): Promise<string> {
  // Debug log - function called
  console.log('🔍 callAI function called with message:', message);

  // Try to call the API first, fall back to predefined responses if it fails
  try {
    // Use a direct approach with the API URL
    const BASE_URL = import.meta.env.VITE_API_URL || 'https://2fl5484vo7.execute-api.us-east-1.amazonaws.com/prod/';
    const API_URL = `${BASE_URL}chat`; // Add the 'chat' endpoint
    console.log('🌐 Calling AI API at:', API_URL);

    // Prepare request body with the format the API expects
    const requestBody = {
      message,
      context: "You are Lotus, an AI fitness coach. Keep responses concise and focused on helping with fitness goals, workouts, nutrition, and motivation. Provide practical advice that's easy to follow."
    };
    console.log('📤 Request body:', requestBody);

    // Get API key from environment variables
    const API_KEY = import.meta.env.VITE_API_KEY;

    // Make a simple POST request with authentication
    console.log('🔄 Sending request to API...');
    const response = await fetch(API_URL, {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-api-key': API_KEY || '', // Add API key for authentication
      },
      body: JSON.stringify(requestBody),
    });

    console.log('📥 Response received. Status:', response.status, response.statusText);
    console.log('📥 Response headers:', Object.fromEntries([...response.headers.entries()]));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API error:', response.status, response.statusText, errorText);
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    // Get the response text first
    const responseText = await response.text();
    console.log('📄 Raw API response text:', responseText);

    // Try to parse it as JSON
    try {
      const data = JSON.parse(responseText);
      console.log('🔍 Parsed API response:', data);

      // Try to extract the response from various formats
      console.log('🔍 Extracting response from data...');

      if (data.message) {
        console.log('✅ Found message field:', data.message);
        return data.message;
      } else if (data.response) {
        console.log('✅ Found response field:', data.response);
        return data.response;
      } else if (data.reply) {
        console.log('✅ Found reply field:', data.reply);
        return data.reply;
      } else if (data.body) {
        console.log('🔍 Found body field, attempting to parse...');
        // Try to parse the body if it's a string
        try {
          const bodyData = typeof data.body === 'string' ? JSON.parse(data.body) : data.body;
          console.log('🔍 Parsed body data:', bodyData);

          if (bodyData.message) {
            console.log('✅ Found message in body:', bodyData.message);
            return bodyData.message;
          }
        } catch (e) {
          console.error('❌ Error parsing body:', e);
        }
      } else if (typeof data === 'string') {
        console.log('✅ Data is a string, returning directly:', data);
        return data;
      }

      // If we couldn't extract a specific field, return the whole response as a string
      console.log('⚠️ Could not extract specific field, returning stringified data');
      return JSON.stringify(data);
    } catch (e) {
      // If it's not valid JSON, just return the text
      console.log('⚠️ Response is not valid JSON, returning as text');
      console.log('📄 Raw text being returned:', responseText);
      return responseText;
    }
  } catch (error) {
    console.error('❌ Error calling AI API:', error);

    // Fallback to predefined responses if API calls fail
    console.log('🔄 Falling back to predefined responses');
    const fallbackResponse = getFallbackResponse(message);
    console.log('✅ Using fallback response:', fallbackResponse);
    return fallbackResponse;
  }
}
