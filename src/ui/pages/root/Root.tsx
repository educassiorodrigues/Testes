import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function Root() {
  const navigate = useNavigate() 
  useEffect(() => {
    navigate('/cassio')
  }, [])
  
  return (
    <div className="">
      <Outlet />
    </div>
  )
}