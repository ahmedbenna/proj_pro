import React from 'react'
import NavClient from './client/NavClient'
import NavGuest from './guest/NavGuest'
import NavProvider from './provider/NavProvider'

export default function Nav() {
    
    return (
        localStorage.getItem('idc') ?
            <NavClient />
            : localStorage.getItem('idp') ?
                <NavProvider />
                :
                <NavGuest />

    )
}