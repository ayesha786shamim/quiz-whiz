import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DifficultySelector from '../Components/DifficultySelector';
import CategorySelector from '../Components/CategorySelector';

interface HomeProps {
    setAmount: (value: number) => void;
    setDifficulty: (value: string) => void;
    setCategory: (value: number) => void;
}

const Home: React.FC<HomeProps> = ({ setDifficulty, setCategory, setAmount}) => {

    const [DifficultyLevel, setDifficultyLevel] = useState('easy');
    const [CategoryOption, setCategoryOption] = useState(9);
    const [AmountOption, setAmountOption] = useState(5);
    const navigate = useNavigate();

    const handleStart = () => {
        setDifficulty(DifficultyLevel);
        setCategory(CategoryOption);
        setAmount(AmountOption);
        navigate('/quiz');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-500 via-yellow-300 to-blue-400 p-6 text-white font-mono">
            <div className="bg-white text-gray-800 shadow-xl rounded-3xl p-8 w-full max-w-md space-y-6">
                <h1 className="text-3xl font-semibold text-center text-pink-600"> Ready to Test Your Brain? </h1>

                <p className="text-center text-gray-600">Select your preferences to begin!</p>

                <div className="space-y-4">
                    <label className="block">
                        <span className="block mb-1 font-semibold text-blue-600">Number of Questions:</span>
                        <input
                            type="number"
                            min="1"
                            max="10"
                            value={AmountOption}
                            onChange={(e) => setAmountOption(Number(e.target.value))}
                            className="w-full px-4 py-2 rounded-lg border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </label>

                    <div className="border-t pt-4 border-dashed border-pink-300">
                        <DifficultySelector difficulty={DifficultyLevel} setDifficulty={setDifficultyLevel} />
                    </div>

                    <div className="border-t pt-4 border-dashed border-yellow-300">
                        <CategorySelector category={CategoryOption} setCategory={setCategoryOption} />
                    </div>

                    <button
                        onClick={handleStart}
                        className="w-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
                    >
                        🚀 Start Quiz
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;

