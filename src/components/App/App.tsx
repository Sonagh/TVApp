import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import routes from '@/routes/routes';
import Nav from "@/layouts/Nav/Nav";

function App() {
  return (
      <Router>
          <div className="app">
              <Nav />
              <main className="main">
                  <Routes>
                      {routes.map((route, index) => (
                          <Route key={index} path={route.path} element={route.element}/>
                      ))}
                  </Routes>
              </main>
          </div>
      </Router>
  )
}

export default App
