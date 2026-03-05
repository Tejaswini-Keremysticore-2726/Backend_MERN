import React from "react";
import { Outlet } from "react-router-dom";
function Adminlayout() {
  return (
    <>
      <div className="flex flex-col ">
        
          <main>
            <Outlet />
          </main>
        </div>
      
    </>
  );
}

export default Adminlayout;
