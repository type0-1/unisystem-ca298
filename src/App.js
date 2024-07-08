import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home'
import AllDegrees from './pages/alldegrees'
import AllCohorts from './pages/allcohorts'
import AllModules from './pages/allmodules'
import CreateDegree from './pages/createdegree'
import CreateCohort from './pages/createcohort'
import CreateModule from './pages/createmodule'
import CreateStudent from './pages/createstudent'
import ShowSingleDegree from './pages/singledegree'
import ShowSingleCohort from './pages/singlecohort'
import ShowSingleModule from './pages/singlemodule';
import ShowSingleStudent from './pages/singlestudent'

import ShowDeliveredTo from './pages/deliveredto'
import SetStudentGrade from './pages/selectstudentgrade'

import Navbar from './components/navbar'

import './App.css';

function App() {
  return (
    <div>
    <Router>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/degrees" element={<AllDegrees/>}></Route>
          <Route path="/degrees/:shortcode" element={<ShowSingleDegree/>}></Route>
          <Route path="/createdegree" element={<CreateDegree apiUrl={`http://127.0.0.1:8000/api/degree/`}/>}></Route>
          <Route path="/cohorts" element={<AllCohorts/>}></Route>
          <Route path="/cohorts/:id" element={<ShowSingleCohort/>}></Route>
          <Route path="/delivered_to/:id" element={<ShowDeliveredTo/>}></Route>
          <Route path="/createcohort" element={<CreateCohort apiUrl={`http://127.0.0.1:8000/api/cohort/`}/>}></Route>
          <Route path="/modules" element={<AllModules/>}></Route>
          <Route path="/modules/:code" element={<ShowSingleModule/>}></Route>
          <Route path="/createmodule" element={<CreateModule apiUrl={`http://127.0.0.1:8000/api/module/`}/>}></Route>
          <Route path="/student/:student_id" element={<ShowSingleStudent/>}></Route>
          <Route path="/createstudent" element={<CreateStudent apiUrl={`http://127.0.0.1:8000/api/cohort/`}/>}></Route>
          <Route path="/setgrade" element={<SetStudentGrade/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
