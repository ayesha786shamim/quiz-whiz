import React from 'react';
interface CategorySelectorProps {
    category: number;
    setCategory: (value: number) => void; //update the category Id
}

const categories = [
    { id: 9, name: 'General Knowledge' },
    { id: 10, name: 'Entertainment: Books' },
    { id: 11, name: 'Entertainment: Film' },
    { id: 12, name: 'Entertainment: Music' },
    { id: 14, name: 'Entertainment: Television' },
    { id: 27, name: 'Animals' },
    { id: 28, name: 'Vehicles' },
    { id: 30, name: 'Science: Gadgets' },
    { id: 17, name: 'Science & Nature' },
    { id: 18, name: 'Science: Computers' },
    { id: 21, name: 'Sports' },
    { id: 23, name: 'History' },
    { id: 25, name: 'Art' },
    { id: 26, name: 'Celebrities' },
];

const CategorySelector: React.FC<CategorySelectorProps> = ({ category, setCategory }) => (
    <div>

        <label>Category: </label>

        <select value={category} onChange={(e) => setCategory(Number(e.target.value))}>

            {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
            ))}
        </select>
    </div>
);

export default CategorySelector;
