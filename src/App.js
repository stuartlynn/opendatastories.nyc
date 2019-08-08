import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import DatasetPage from './pages/DatasetPage'
import DatasetsPage from './pages/DatasetsPage'
import ProjectPage from './pages/ProjectPage'
import ProjectsPage from './pages/ProjectsPage'
import SubmitProjectPage from './pages/SubmitProjectPage'
import {useStateValue, parse_dataset_response} from './state'

function App() {
  const [error, setError] = useState(null)
  const [{projects, datasets},dispatch] = useStateValue()

  useEffect(()=>{
     const domain = "data.cityofnewyork.us"
     const base= "http://api.us.socrata.com/api/catalog/v1?"
     fetch(`${base}domains=${domain}&search_context=${domain}&limit=2700`)
     .then(res=>res.json())
     .then((res)=>{
        dispatch({
           type: "SET_DATASETS",
           payload: res.results.map(parse_dataset_response)
        })
     }).catch((err)=> console.log(err))
  },[])

  return (
    <div className="App">
        <Route path='/' exact={true} component={HomePage} /> 
        <Route path='/datasets/:datasetID' component={DatasetPage} /> 
        <Route path='/datasets' exact={true} component={DatasetsPage} /> 
        <Route path='/submit' exact={true} component={SubmitProjectPage} />
        <Route path='/projects/:projectID' component={ProjectPage} /> 
        <Route path='/projects/'  exact={true} component={ProjectsPage} /> 
    </div>
  );
}

export default App;
