import React, { useState } from 'react';

const Dropdown = ({ options, onChange, label }) => {
  const [selectedOption, setSelectedOption] = useState(label ? { label: label, value: '' } : null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-select" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.label : 'Select'}
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option) => (
            <div
              key={option.value}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;