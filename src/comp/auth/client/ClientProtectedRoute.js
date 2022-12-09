import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ClientProtectedRoute() {
    // let auth = { 'token': JSON.parse(localStorage.getItem('token')), 'idc': JSON.parse(localStorage.getItem('idc')) }
    let auth=true
    return (
         auth ? <Outlet /> : <Navigate to='/loginClient' />
        // auth.token && auth.idc ? <Outlet /> : <Navigate to='/loginClient' />
    )
}
