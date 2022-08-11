import { FC, KeyboardEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

import styles from './Search.module.scss';

const Search: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';
  const [text, setText] = useState(search);

  const onSearch = (search: string) => {
    if (search === '') {
      searchParams.delete('search');
    } else {
      searchParams.set('search', search);
    }

    setSearchParams(searchParams);
  };

  const onKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(text);
    }
  };

  const onButtonClick = () => {
    onSearch(text);
  };

  return (
    <div className={styles.search}>
      <TextField 
        label='Поиск' 
        variant='outlined' 
        size='small' 
        className={styles.input} 
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyUp={onKeyUp}
      />

      <Button 
        variant='contained' 
        size='small' 
        className={styles.button} 
        onClick={onButtonClick}
      >
        Поиск
      </Button>
    </div>
  );
};

export default Search;
