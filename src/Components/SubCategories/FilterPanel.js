import React from 'react';
import styled from 'styled-components';

const FilterPanelWrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: #fff;
  box-shadow: 4px 0 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const FilterSection = styled.div`
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f0f0f0;
  height: 10rem;
  overflow: scroll;
`;

const FilterTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
`;

const FilterOptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  transition: background-color 0.2s ease;
  padding: 5px;
  border-radius: 5px;
  
  &:hover {
    background-color: #f1f1f1;
  }
`;

const FilterCheckbox = styled.input`
  margin-right: 12px;
  accent-color: #007bff;
  cursor: pointer;
`;

const FilterPanel = ({ filters, setFilters, filterData }) => {
  const handleCheckboxChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value)
        : [...prevFilters[filterType], value],
    }));
  };

  return (
    <FilterPanelWrapper>
      {Object.keys(filterData).map((filterType) => (
        <FilterSection key={filterType}>
          <FilterTitle>{filterType}</FilterTitle>
          {filterData[filterType].map((option) => (
            <FilterOptionContainer key={option}>
              <FilterCheckbox
                type="checkbox"
                checked={filters[filterType].includes(option)}
                onChange={() => handleCheckboxChange(filterType, option)}
              />
              {option}
            </FilterOptionContainer>
          ))}
        </FilterSection>
      ))}
    </FilterPanelWrapper>
  );
};

export default FilterPanel;
