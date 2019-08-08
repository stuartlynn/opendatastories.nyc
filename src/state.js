import React, {createContext, useContext, useEffect, useReducer} from 'react';

export const StateContext = createContext();

const initalState = {
  projects: null,
  datsets: null,
  cache_loaded: false,
};


export const parse_dataset_response= (dataset)=>(
  {
    name: dataset.resource.name,
    link: dataset.link,
    permalink: dataset.permalink,
    owner: dataset.owner.display_name,
    owner_id: dataset.owner.id,
    description: dataset.resource.description,
    id: dataset.resource.id
  }
)

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_CACHED_STATE':
      return action.payload;

    case 'SET_DATASETS':
      return {...state, datasets: action.payload}
    default:
      return state;
  }
};

export const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  useEffect(() => {
    if (state.cache_loaded) {
      localStorage.setItem('state', JSON.stringify(state));
    }
  }, [state]);

  useEffect(() => {
    const cachedState = JSON.parse(localStorage.getItem('state'));

    dispatch({
      type: 'LOAD_CACHED_STATE',
      payload: {...initalState, ...cachedState, cache_loaded: true},
    });
  }, []);

  useEffect(()=>{
     console.log('updating state ',state)
  },[state])
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
