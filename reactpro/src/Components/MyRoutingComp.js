import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyImgesComp from './MyImgesComp';
import FavColorComp from './FavColorComp';
import PageNotFound from './PageNotFound';
import UserFormComp from './UserFormComp';
import ClassComp from './ClassComp';
import MyCssComp from './MyCssComp';
import NavComp from './NavComp';
import FooterComp from './FooterComp';
import ImageCarousel from '../Task/ChangeAnother';
import ReactHooksComp from './Hooks/ReactHooksComp';
import UseStateHookComp from './Hooks/UseStateHookComp'
import UseEffectHookComp from './Hooks/UseEffectHookComp'
import Dashboard from '../CRUD/Dashboard';
import Addproduct from '../CRUD/Addproduct';
import Editproduct from '../CRUD/Editproduct';
import MyCarouselComp from './MyCarouselComp';
import LoginComp from './LoginComp';



function MyRoutingComp() {
    return (
        <div className='container'>
            <BrowserRouter>
                <div className='card border-primary'>
                    <div className='card-header border-primary'>
                        <NavComp />

                    </div>
                    <div className='card-body border-info'>
                        <Routes>
                        <Route path='' element={<LoginComp />}></Route>
                            <Route path='' element={<MyImgesComp />}></Route>
                            <Route path='fav' element={<FavColorComp />}></Route>
                            <Route path='form/' element={<UserFormComp />}></Route>
                            <Route path='classcomp' element={<ClassComp />}>
                                <Route path='mycss' element={<MyCssComp />} ></Route>
                            </Route> 
                            <Route path='ImageCarousel' element={<ImageCarousel />}></Route>
                            <Route path='ReactHooks' element={<ReactHooksComp />} >
                                <Route path='StateHooks' element={<UseStateHookComp />}></Route>
                                    <Route path='EffectHooks' element={<UseEffectHookComp />}>                  
                                </Route>
                             </Route>
                            <Route path='Dashboard' element={<Dashboard />}></Route>
                            <Route path='Addproduct' element={<Addproduct />}></Route>
                            <Route path='Editproduct/:id' element={<Editproduct />}></Route>
                            <Route path='Carousel' element={<MyCarouselComp />}></Route>
                            <Route path='/*' element={<PageNotFound />}></Route>

                        </Routes>
                    </div>
                    <div className='card-footer border-primary'>
                        <FooterComp />
                    </div>
                </div>
            </BrowserRouter>





            {/* <BrowserRouter>
                <Routes>
                    <Route path='' element={<MyImgesComp />}></Route>
                    <Route path='fav' element={<FavColorComp />}></Route>
                    <Route path='form/' element={<UserFormComp />}></Route>
                    <Route path='/*' element={<PageNotFound />}></Route> 
                </Routes>
            </BrowserRouter> */}
            {/* <h2>My Routing Component</h2> */}
        </div>
    )
}

export default MyRoutingComp
