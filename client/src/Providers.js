import React, {useState, useEffect} from 'react'
import ShowProviderPatients from './ShowProviderPatients'

function Providers() {
    const [providers, setProviders] = useState([])
    useEffect(()=>{
        fetch('/providers')
        .then(res=>res.json())
        .then(setProviders)
    }, [])
    const providerList = providers.map(provider => <ShowProviderPatients key={provider.id} provider={provider} />)

  return (
    <div class="container-sm">
        <h1>Providers</h1>
        <h3>Click a provider to see their patient list</h3>
        {providerList}
    </div>
  )
}

export default Providers