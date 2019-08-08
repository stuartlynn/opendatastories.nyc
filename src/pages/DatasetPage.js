import React from 'react';
import {useStateValue} from '../state';

export default function DatasetPage({match}) {
  const {datasetID} = match.params;
  const [{datasets, cache_loaded},_] = useStateValue();

  const dataset = datasets ? datasets.find(d => d.id === datasetID) : null;

  console.log('match ', match);
  console.log('dataset', dataset);

  return (
    <div className="datasetpage">
      {dataset && (
        <React.Fragment>
            <h1><a target="_blank" href={dataset.link}>{dataset.name}</a></h1>
            <p>{dataset.description}</p>
        </React.Fragment>
      )}
      
      { (!dataset && cache_loaded) && <h1>No dataset by that ID</h1>}
      { (!dataset && !cache_loaded) && <h1>Loading... </h1>}
    </div>
  );
}
