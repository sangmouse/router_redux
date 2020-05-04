import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

const menus = [
    {
        name: 'Trang chủ',
        to : "/",
        exact : true
    },
    {
        name: 'Giới thiệu',
        to : "/about",
        exact : false
    },
    {
        name: 'Liên hệ',
        to : "/contact",
        exact : false
    },
    {
        name: 'Sản phẩm',
        to : "/products",
        exact : false
    },
    {
        name: 'Đăng nhập',
        to : "/login",
        exact : false
    }
]

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children = {({match}) => {
            var active = match ? 'active abc' : ''
            return (
                <li className={`my-li ${active}`}>
                    <Link className="nav-link" to={to}>
                        {label}
                    </Link>
                </li>
            )
        }}
        />
    )
}

class Menu extends Component {

    showMenu = (menus) => {
        var result = null
        if(menus.length > 0){
            result = menus.map((menu, index) => {
                return (
                    <MenuLink 
                        label={menu.name} 
                        to={menu.to} 
                        activeOnlyWhenExact={menu.exact} 
                        key={index}
                    />
                )
            })
            
        }

        return result
    }
    
    render() {
        
        return (
            
            < nav className = "navbar navbar-expand-sm navbar-light bg-light" >

                <div className="collapse navbar-collapse" id="collapsibleNavId">

                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        
                        {this.showMenu(menus)}
                    </ul>

                </div>

            </nav>
        )
    }

    

}

export default Menu;

