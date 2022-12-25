import React from 'react'
import {Routes , Route } from 'react-router-dom'
import Timesheet from '../pages/Timesheet'
import Dashboard from './Dashboard'

const Content = () => {
    return(
        
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/timesheet' element={<Timesheet />} />
            </Routes>
    )
}

export default Content