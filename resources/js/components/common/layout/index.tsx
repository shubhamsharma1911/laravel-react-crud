import React from "react"


interface Props {
  children: any;
}

const Layout: React.FC<Props> = ({ children}) => {
  return (
    <React.Fragment>
      <div className="mb-3">
        
      </div>
      <div className="container">{children}</div>
      <div className="mt-3 p-2">
        <p style={{ textAlign: "center" }}>Copyright &copy; Techwondoe 2022</p>
      </div>
    </React.Fragment>
  )
}

export default Layout
