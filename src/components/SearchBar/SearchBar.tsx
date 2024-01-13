// SearchBar.tsx
import React from 'react';
import styled from 'styled-components';
import { fonts } from '../../../styles/theme';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 8px;
  padding-right: 24px;
  width: 1440px;
  @media (max-width: 1920px) {
    padding-right: 20px;
    width: 1080px;
  }
  height: 64px;
  margin-top: 92px;
`;

const Input = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 12px;
  padding-left: 24px;
  ${fonts.H500}
  @media (max-width: 1920px) {
    padding-left: 16px;
    ${fonts.H400}
  }
`;

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 32px;
  @media (max-width: 1920px) {
    font-size: 28px;
  }
`;

type SearchBarProps = {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: (value: string) => void;
  };

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, value, onChange, onSearch }) => {
  const [searchValue, setSearchValue] = React.useState('');

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <SearchBarContainer>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
      <SearchButton onClick={handleSearch}>
        <StyledIcon icon={faMagnifyingGlass} />
      </SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
