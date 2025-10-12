"use client"
import React from 'react'
import { createContext,useState,useContext } from 'react'
const SidebarContext=createContext()
export const useSidebarContext = () => useContext(SidebarContext);
const Context = ({children}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <SidebarContext.Provider  value={{sidebarOpen,setSidebarOpen}} >
      {children}
    </SidebarContext.Provider>
  )
}

export default Context
