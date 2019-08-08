import React from 'react';
import {useStateValue} from '../state';
import {Link} from 'react-router-dom'

export default function DatasetsPage() {
  const [{datasets, cache_loaded},_] = useStateValue();


  return (
    <div className="datasetpage">
      {datasets && (
        <React.Fragment>
            <h1>Datasets</h1>
            <ul>
                {datasets.map(dataset=>
                   <li><Link to={`/datasets/${dataset.id}`} > {dataset.name}</Link></li>
                )}
            </ul>
        </React.Fragment>
      )}
      
      { (!datasets && cache_loaded) && <h1>No dataset by that ID</h1>}
      { (!datasets && !cache_loaded) && <h1>Loading... </h1>}
    </div>
  );
}
