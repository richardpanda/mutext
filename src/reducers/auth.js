const initialState = {
  accessToken: '',
  tokenType: '',
  expiresIn: -1,
  scope: ''
};

export default (state = initialState, { type, data }) => {
  switch (type) {
    case Symbol.for('receive auth'):
      return {
        accessToken: data.access_token,
        tokenType: data.token_type,
        expiresIn: data.expires_in,
        scope: data.scope
      };
    default:
      return state;
  }
};
