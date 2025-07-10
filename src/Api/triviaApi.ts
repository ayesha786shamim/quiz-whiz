export const fetchQuizQuestions = async (
  amount: number,
  difficulty: string,
  category: number
) => {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${category}&type=multiple`
  );
  const data = await res.json();
  return data.results;
};


// export const fetchQuizQuestions = async (
//   amount: number,
//   difficulty: string,
//   category: number
// ) => {
//   const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${category}&type=multiple`;
//   console.log('[DEBUG] Fetching quiz questions from:', url);

//   try {
//     const res = await fetch(url);

//     console.log('[DEBUG] Response status:', res.status);

//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }

//     const data = await res.json();
//     console.log('[DEBUG] Fetched data:', data);

//     if (!data.results || !Array.isArray(data.results)) {
//       throw new Error('Invalid API response format.');
//     }

//     if (data.results.length === 0) {
//       throw new Error('No questions found.');
//     }

//     return data.results;
//   } catch (error) {
//     console.error('[ERROR] fetchQuizQuestions failed:', error);
//     throw error;
//   }
// };

