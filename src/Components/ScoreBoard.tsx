import React from 'react';
import { useNavigate } from 'react-router-dom'; 

interface ScoreBoardProps {
    score: number;
    total: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, total }) => {
    const navigate = useNavigate();


    const handlePlayAgain = () => {
        navigate('/'); 
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-500 via-yellow-300 to-blue-400 p-6 text-white font-mono">
            <div className="bg-white text-gray-800 shadow-xl rounded-3xl p-8 w-full max-w-md space-y-6">
                <h1 className="text-3xl font-bold text-center text-pink-600">🎉 Quiz Completed!</h1>

                <p className="text-center text-indigo-600 text-xl font-semibold">
                    Your Score: {score} / {total}
                </p>

                <p className="text-center text-gray-600">Thanks for playing the Trivia Quiz!</p>

                <button
                    onClick={handlePlayAgain}
                    className="w-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
                >
                    🔄 Play Again
                </button>
            </div>
        </div>
    );
};

export default ScoreBoard;
