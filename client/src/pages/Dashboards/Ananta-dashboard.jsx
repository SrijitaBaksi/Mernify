import React from 'react'
import { useAuth } from '../../context/AuthContext';

const Ananta = () => {

  const {user} = useAuth();

  console.log(user);
  return (
    <div>
      hello this is Ananta's dashboard
    </div>
  )
}

export default Ananta;
