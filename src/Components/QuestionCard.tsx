// import React from 'react';

// interface Question {
//     question: string;
//     correct_answer: string;
//     incorrect_answers: string[];
// }

// interface QuestionCardProps {
//     question: Question;
//     handleAnswer: (answer: string) => void;
// }

// const QuestionCard: React.FC<QuestionCardProps> = ({ question, handleAnswer }) => {

//     const answers = [...question.incorrect_answers, question.correct_answer];

//     return (
//         <div>
//             <h5>{question.question}</h5>

//             <h2>Choose the correct answer:</h2>

//             {answers.map((answer, idx) => (
//                 <div key={idx} style={{ marginBottom: '8px' }}>
//                     <button onClick={() => handleAnswer(answer)}>{answer}</button>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default QuestionCard;

import React from 'react';

interface Question {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

interface QuestionCardProps {
    question: Question;
    handleAnswer: (answer: string) => void;
}

const shuffle = (arr: string[]): string[] =>
    [...arr].sort(() => Math.random() - 0.5);

const QuestionCard: React.FC<QuestionCardProps> = ({ question, handleAnswer }) => {
    const answers = shuffle([...question.incorrect_answers, question.correct_answer]);

    return (
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 space-y-6 text-gray-800 font-mono">
            <div>
                <h2
                    className="text-xl font-semibold text-indigo-600 mb-2"
                    dangerouslySetInnerHTML={{ __html: question.question }}
                />
                <p className="text-sm text-gray-500">Choose the correct answer:</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {answers.map((answer, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleAnswer(answer)}
                        className="w-full bg-gray-100 text-gray-800 font-medium py-3 rounded-xl border border-gray-300 hover:bg-gray-200 transition duration-200"
                        dangerouslySetInnerHTML={{ __html: answer }}
                    />
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;
