export const GetJwt = (): HeadersInit => {
  let token = localStorage.getItem('token');
  if (token)
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  else
    return {
      'Content-Type': 'application/json'
    }
}