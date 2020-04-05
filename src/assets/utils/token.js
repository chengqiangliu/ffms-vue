const Token_Key = 'User-Token';

export function getToken() {
  localStorage.getItem(Token_Key);
};

export function setToken(token) {
  localStorage.setItem(Token_Key, token);
}

export function removeToken() {
  localStorage.removeItem(Token_Key);
}
