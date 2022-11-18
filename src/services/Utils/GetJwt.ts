export function GetJwt() : HeadersInit {
  let token = localStorage.getItem('token');
  if( token )
    return { 
      'Authorization' : `Bearer ${token}`,
    };
  else
    return { 
    }
}