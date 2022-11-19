export const LogOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}