import './App.css';
import Header from './components/Header/Header';
import JobLists from './components/Jobs/JobLists';
import JobDetails from './components/Job-details/JobDetails';
import { Routes, Route, Navigate } from "react-router-dom";
import { createContext } from 'react';
import { useState } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return(
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Header/>
        <div className='dark-light-mode'>
          <div className="light-mode"></div>
          <label className='switch'>
            <input type="checkbox"/>
            <span className='slider' onClick={toggleTheme}/>
          </label>        
          <div className="dark-mode"></div>
        </div>        
        <Routes>
          <Route path='/DevJobs-App-project/' element={<Navigate to='/DevJobs-App-project/jobs'/>} />
          <Route path='/DevJobs-App-project/jobs' element={<JobLists/>} />
          <Route path='/jobs/:position' element={<JobDetails/>} />
        </Routes>        
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
