// 1. Importamos os nossos novos componentes estilizados
import { SearchContainer, SearchIcon, StyledInput } from './SearchInput.styles';

type SearchInputProps = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
};

const SearchInput = ({ value, onChange, placeholder }: SearchInputProps) => {

    return (
        <SearchContainer>
            <SearchIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </SearchIcon>
            <StyledInput
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </SearchContainer>
    );
};

export default SearchInput;
