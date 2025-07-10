import { useEffect, useState } from 'react';
import { fetchQuizQuestions } from '../Api/triviaApi';
import { useNavigate } from 'react-router-dom';
import QuestionCard from '../Components/QuestionCard';


interface QuizProps {
    amount: number;
    difficulty: string;
    category: number;
}

interface Question {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

const Quiz: React.FC<QuizProps> = ({ amount, difficulty, category }) => {

    const [questions, setQuestions] = useState<Question[]>([]);
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const loadQuestions = async () => {

            const data = await fetchQuizQuestions(amount, difficulty, category);

            if (!data || !Array.isArray(data) || data.length === 0) {

                console.error('No questions found in the fetched data:');

                navigate('/error'); // Navigate to error page if no questions are found
                return;
            }

            setQuestions(data);
        };

        loadQuestions();
    }, [amount, difficulty, category]);

    //Loading 
    if (!questions || questions.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-yellow-100 text-yellow-800 font-semibold text-lg p-6 animate-pulse">
                Loading questions...
            </div>
        );
    }

    //Handle answer and set score
    const handleAnswer = (answer: string) => {
        if (questions[index] && answer === questions[index].correct_answer) {
            setScore((prev) => prev + 1);
        }
        setIndex((prev) => prev + 1);
    };


    //Navigate to score page
    if (index >= questions.length) {
        navigate('/score', { state: { score, total: questions.length } });
        return null;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 via-yellow-200 to-pink-200 p-4">
            <QuestionCard question={questions[index]} handleAnswer={handleAnswer} />
        </div>
    );
};

export default Quiz;
