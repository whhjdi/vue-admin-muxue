export const saveToLocal = store => {
  if (localStorage.state) {
    store.replaceState(JSON.stringify(localStorage.state));
  }
  store.subscribe((mutation, state) => {
    localStorage.state = JSON.stringify(state);
  });
};
