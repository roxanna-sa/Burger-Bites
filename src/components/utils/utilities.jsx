const Utilities = () => {
   // Leer la data del mesero desde la sesión
   const getNameOfUserInSession = () => {
    const user = localStorage.getItem('user');
    if (user == null) {
      alert('No user data found');
      return;
    }

    const userData = JSON.parse(user);

    return userData.name;
  };

  return { getNameOfUserInSession };
}

export default Utilities;