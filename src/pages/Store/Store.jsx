import React from 'react'

import Headstore from './components/Headstore'
import Filter from "./components/Filter";
import Product from "./components/Product";
import SideBarSteal from '../../components/SideBarSteal';

const Store = () => {
    return (
        <>
            <div style={{display:'flex'}}>
                <div style={{width:'20%'}}>
                    <SideBarSteal/>
                </div>
                <div style={{width:'100%'}}>
                    <Headstore />
                    <Filter className='filter'/>
                    <Product />
                </div>
            </div>
        </>
    )
}

export default Store
