import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ClientProtectedRoute() {
    let auth = { 'token': JSON.parse(localStorage.getItem('token')), 'idc': JSON.parse(localStorage.getItem('idc')) }
    return (
        auth.idc && auth.auth ? <Outlet /> : <Navigate to='/loginProvider' />
    )
}
