
import { Outlet } from 'react-router-dom';
import Layout from './layout/home.layout';

function App() {
  return (
    <Layout>
      {<Outlet/>}
    </Layout>
  );
}

export default App;
