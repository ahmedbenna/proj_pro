import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProviderProtectedRoute() {
    let auth = { 'token': JSON.parse(localStorage.getItem('token')), 'idp': JSON.parse(localStorage.getItem('idp')) }
    // let auth=true
    return (
         auth.idp  ? <Outlet /> : <Navigate to='/loginProvider' />
        // auth.token && auth.idp ? <Outlet /> : <Navigate to='/loginClient' />
    )
}
