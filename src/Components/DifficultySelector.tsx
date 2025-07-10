import React from "react";

interface DifficultySelectorProps {
    difficulty: string;
    setDifficulty: (value: string) => void;
}

const difficulties = [
    { id: 1, name: "Easy" },
    { id: 2, name: "Medium" },
    { id: 3, name: "Hard" },
];

const DifficultySelector: React.FC<DifficultySelectorProps> = ({
    difficulty,
    setDifficulty,
}) => (
    <div>
        <label>Difficulty Level: </label>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            {difficulties.map((difficulty) => (
                <option key={difficulty.id} value={difficulty.id}>
                    {difficulty.name}
                </option>
            ))}
        </select>
    </div>  
);

export default DifficultySelector;
