import { Link } from 'react-router-dom';
import Landing from './Landing';

const App = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to="landing">Landing</Link>
    </div>
  );
};

export default App;
