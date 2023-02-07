import { Link } from 'react-router-dom';
import Landing from './Landing';

const App = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to="landing">Landing</Link>
      <Link to="surveys">Dashboard</Link>
      <Link to="surveynew">New Survey</Link>
    </div>
  );
};

export default App;
