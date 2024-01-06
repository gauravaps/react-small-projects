import React from 'react'
import Menu_List from './Menu_List'

const TreeView = ({menus=[]}) => {
  return (
    <div>
      <h1>this is tree view</h1>
      <Menu_List list={menus}/>
  
    </div>
  )
}
 
export default TreeView