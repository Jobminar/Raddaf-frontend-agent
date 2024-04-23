import React, { createContext, useEffect, useState } from 'react'
export const Data=createContext()
const Total = ({children}) => {
  const [admin, setAdmin] = useState([]);
  


  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const response = await fetch("https://raddaf-be.onrender.com/admin/allAdmins");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.msg === "Success" && Array.isArray(data.result)) {
          setAdmin(data.result);
        } else {
          console.log("No admin data found");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        
      } 
    };

    fetchAdmin();
  }, []); 
 
   
  return (
    <div>
      <Data.Provider value={{admin}}>
        {children}
      </Data.Provider>
    </div>
  )
}

export default Total
