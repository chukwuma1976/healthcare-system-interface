import React from 'react'
import HealthCareSystemInterface from './HealthCareSystemInterface'
import { UserProvider } from './User'

function App() {
    return (
        <UserProvider>
            <HealthCareSystemInterface />
        </UserProvider>
    )
}

export default App
