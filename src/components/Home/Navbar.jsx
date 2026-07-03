import React from 'react'
import NavbarBaza from '../Bazalar/NavbarBaza'


const Navbar = () => {
  return (
    <div>
        <ul>

            {
                NavbarBaza.map((e)=>{
                    return <li> <a href={e.link}> {e.nomi} </a></li>
                })
            }

        </ul>
    </div>
  )
}

export default Navbar