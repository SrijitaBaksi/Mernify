import React from 'react'
import {useNavigate} from 'react-router-dom';

const SriNavbar = () => {
    const navigate = useNavigate();
    const stacks=['react','express','node','mongodb'];


  return (
    <div className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">Mernify</div>
        <div className="space-x-4">
            {
                stacks.map(stack=>(
                    <button key={stack} onClick={()=>navigate(`/srijita-dashboard/${stack}/intro`)}>{stack}</button>
                ))
            }
        </div>  
      
    </div>
  )
}

export default SriNavbar
