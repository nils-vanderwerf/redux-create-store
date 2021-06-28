function createStore() {
  let state;
  // state is now accessible to dispatch

  function dispatch(action){
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  }

  function render() {
    let container = document.getElementById('container');
    container.textContent = store.getState().count;
  };

  return dispatch
  return getState
}

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
};

let store = createStore(reducer);
store.dispatch({ type: '@@INIT'});



function render() {
  let container = document.getElementById('container');
  container.textContent = state.count;
};

dispatch({ type: '@@INIT' })
let button = document.getElementById('button');

button.addEventListener('click', () => {
    store.dispatch({ type: 'INCREASE_COUNT' });
})
