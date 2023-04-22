import React from 'react'
import EclecticMusic from './EclecticMusic'
import { UserProvider } from './User'

function App() {
    return (
        <UserProvider>
            <HealthCareSystemInterface />
        </UserProvider>
    )
}

export default App
