import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({setCategories, categories}) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue( e.target.value );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( inputValue.trim().length > 2 && !categories.includes(inputValue) ) {
      setCategories( cats => [inputValue, ...cats] )
      setInputValue( '' );
    }
  };

  return (
    <form onSubmit={ handleSubmit }>
        <input type="text" 
        value={inputValue}
        onChange={ handleInputChange }
        />
    </form>
  )
}

AddCategory.prototype = {
  setCategories: PropTypes.func.isRequired,
}
