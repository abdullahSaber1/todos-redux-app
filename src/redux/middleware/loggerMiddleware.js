export default (store) => (next) => (action) => {
  console.log('Before Action =>', store.getState().todos);
  console.log('Action', action);
  return next(action);
};
