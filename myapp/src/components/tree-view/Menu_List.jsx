import React from 'react'
import Menu_Item from './Menu_Item'

const Menu_List = ({list=[]}) => {
  return (
    <div>
        {list && list.length?list.map((listitem)=> <Menu_Item item={listitem}/>):null}
    </div>
  )
}

export default Menu_List