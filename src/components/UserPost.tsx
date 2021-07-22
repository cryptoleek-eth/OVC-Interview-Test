import { useTypedSelector } from '../hooks/useTypedSelector';

const UserPost: React.FC = () => {

  const { author, data, error, loading } = useTypedSelector(
    (state) => state.posts
  );

  return (
    <div>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}

      {!error && !loading && data.length > 0 &&
        <div>
          <h1>User Posts @ {author} </h1>
          {data.map((post) => <div key={post.id} >
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>)}
        </div>
      }
    </div>
  );
};

export default UserPost;
