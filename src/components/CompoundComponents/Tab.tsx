import { ReactNode } from "react"

interface TabsProps {
  label: string
  children: ReactNode
}

const Tab: React.FC<TabsProps> = ({ label, children }) => {
  return (
    <>
      <em>{label}</em>
      <span>{children}</span>
    </>
  )
}

export default Tab
