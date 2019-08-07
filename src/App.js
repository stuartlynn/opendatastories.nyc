import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import DatasetPage from './pages/DatasetPage'
import ProjectPage from './pages/ProjectPage'

function App() {
  const [datasets, setDatasets] = useState(null)
  const [error, setError] = useState(null)

  useEffect(()=>{
     const domain = "data.cityofnewyork.us"
     const base= "http://api.us.socrata.com/api/catalog/v1?"
     fetch(`${base}domains=${domain}&search_context=${domain}&limit=2700`)
     .then(res=>res.json())
     .then((res)=>{
        setDatasets(res.results)
     }).catch((err)=> console.log(err))
  },[])

  return (
    <div className="App">
        <Route path='/' exact={true} component={HomePage} /> 
        <Route path='/dataset/:datasetID' component={DatasetPage} /> 
        <Route path='/project/:projectID' component={ProjectPage} /> 
    </div>
  );
}

export default App;
