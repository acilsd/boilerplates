/*eslint no-console: "off"*/
//CUSTOM LOGGER
export const ping = store => next => action => {
  console.log(`action type: ${action.type}, data: ${action.payload}`);
  return next(action);
};
