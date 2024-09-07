import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import PublicLayout from '../Layouts/PublicLayout'
import Dashboard from '../Layouts/Dashboard'
import Auth from '../components/Auth'
import AdminAllNews from '../Pages/AdminAllNews'
import AdminAllCategories from '../Pages/AdminAllCategories'
import AdminAddCat from '../Pages/AdminAddCat'
import AdminAddNews from '../Pages/AdminAddNews'
import Main from '../components/Main'
import AllNewsPage from '../Pages/AllNewsPage'
import CategoryNews from '../Pages/CategoryNews'
import DetailNews from '../Pages/DetailNews'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<PublicLayout />}>
                <Route path='/' index element={<Main />}/>
                <Route path='allnews' element={<AllNewsPage />} />
                <Route path='category/:catID' element={<CategoryNews />} />
                <Route path='news/:newsID'    element={<DetailNews />} />
            </Route>
            <Route path='/admin' element={
                <Auth>
                    <Dashboard />
                </Auth>}>
                <Route path='news'  element={<AdminAllNews />} />
                <Route path='categories' element={<AdminAllCategories />} />
                <Route path='addcategory' element={<AdminAddCat />} />
                <Route path='addnews' element={<AdminAddNews />} />
            </Route>            
        </>
    )
)

export default router