import React, { useState } from 'react'
import menus from './data'

const Testtree = () => {
    const[displayCurrentChildren,setDisplayCurrentChildren]=useState({})
    const handelTOngel=(getchildrenitem)=>{
        setDisplayCurrentChildren({...displayCurrentChildren,[getchildrenitem]:!displayCurrentChildren[getchildrenitem],})
    }
  return (
    <div>
                {menus.map((item)=>{
                    return(
                        <>
                        <p>{item.label}</p>
                        {item && item.children && item.children.length?(
                        <span onClick={()=>handelTOngel(item.label)}>
                            {
                            displayCurrentChildren[item.label]?'-':'+'
                            }

                        </span>):null}
                        {item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
              <div>
                {item.children.map((childItem, index) => (
                  <p key={index}>{childItem.label}</p>
                ))}
              </div>
            ) : null}
                        </>
                    )
                })}
                

    </div>
  )
}

export default Testtree