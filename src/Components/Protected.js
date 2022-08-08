import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Protected(props) {
    const {component} = props;
    const navigate = useNavigate();
    useEffect(()=>
        {
            let token = localStorage.getItem("token");
            console.log(token)
            if(!token)
            navigate("/login")
        }

    )
  return (
    <div>
      Protected
    </div>
  )
}

export default Protected

