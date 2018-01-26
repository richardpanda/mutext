export const receiveAuth = params => ({
  type: Symbol.for('receive auth'),
  data: params
});
