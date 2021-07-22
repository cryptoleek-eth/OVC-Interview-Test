import { useState, useEffect } from 'react';
import { useActions } from '../hooks/useActions';

const UserSearch: React.FC = () => {

  const [name, setName] = useState('');
  const { fetchUsers, searchUsers } = useActions();

  useEffect(() => {
    searchUsers(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {

  if (event.target.value === '') {
      setName('')
      fetchUsers();
    } else {
      setName(event.target.value)
    }
  };

  return (
    <div>
      <input data-testid="search-input" value={name} onChange={onSearch} />
    </div>
  );
};

export default UserSearch;
