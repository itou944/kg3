import { useMutation, useQueryClient } from '@tanstack/react-query';

const fetchAIResponse = async ({ keyGunId, message }) => {
  try {
    const response = await fetch('/api/ai-response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ keyGunId, message }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const useAIResponse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchAIResponse,
    onSuccess: (data, variables) => {
      queryClient.setQueryData(['aiResponse', variables.keyGunId], data.content);
    },
    onError: (error) => {
      console.error('Error in AI response mutation:', error);
      // You could also set some state here to display the error to the user
    }
  });
};