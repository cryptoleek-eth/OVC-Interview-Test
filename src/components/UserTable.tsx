import { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const UserTable: React.FC = () => {

  const { fetchUsers, fetchPosts } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.users
  );

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectTableRow = async (userId: number, name: string) => {
    await fetchPosts(userId, name);
  }

  return (
    <div>
      <div>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}

        {!error && !loading &&
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
          {data.map((user) => <tr key={user.id} onClick={() => {
            onSelectTableRow(user.id, user.name)}
          }>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.city}</td>
              <td>{user.company}</td>
            </tr>)}
          </tbody>
        </table>
        }
      </div>
    </div>
  );
};

export default UserTable;
