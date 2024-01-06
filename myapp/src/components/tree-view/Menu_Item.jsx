import React, { useState } from 'react'
import Menu_List from './Menu_List'
import {FaMinus, FaPlus} from 'react-icons/fa'


const Menu_Item = ({item}) => {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
    const handleToggleChildren=(gettabelitem)=>{
        setDisplayCurrentChildren({...displayCurrentChildren,[gettabelitem]:!displayCurrentChildren[gettabelitem]})

    }

  return (
    <div>
                <li>
      
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {
                displayCurrentChildren[item.label] ? '-' : '+'
            }
          </span>
        ) : null}
              {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
        <Menu_List list={item.children} />
      ) : null}

        </li>
      
                
        
                

    </div>
  )
}

export default Menu_Item