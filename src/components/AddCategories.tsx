import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  ObjectHTMLAttributes,
  SetStateAction,
  useState,
} from 'react';

interface Arg {
  setCategoria: React.Dispatch<React.SetStateAction<string[]>>;
}

const AddCategories = (setCategorias: Arg) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setInputValue(target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategorias.setCategoria((cats) => [inputValue, ...cats]);
    }
    setInputValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} value={inputValue} />
    </form>
  );
};

export default AddCategories;
