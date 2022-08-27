import './asset/app.scss';
import { Header } from './component';
import { Routes, Route,  BrowserRouter as Router } from 'react-router-dom';
import routers from './pages/router';
import Sidebar from './component/Sidebar';

function App() {
  return (

    <div className="App">
      <Header/>
      <div style={{display: 'flex', justifyItems:'column'}}>
      <Router>
        <Sidebar></Sidebar>
        <Routes>
          {routers.map(router =>
            <Route
              {...router}
              key={router.key}
              element={router.element()}
            />)}
        </Routes>
       
      </Router>
      </div>
    </div>
  );
}

export default App;
