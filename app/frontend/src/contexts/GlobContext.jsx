/* eslint-disable react/prop-types */
import { createContext } from "react"

export const GlobProvider = createContext()

export default function GlobContext({ children }) {
  return (
    <GlobProvider.Provider value={{}}>
      {children}
    </GlobProvider.Provider>
  )
}