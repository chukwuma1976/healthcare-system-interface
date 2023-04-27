import React, {useState, useEffect} from 'react'

function Providers() {
    const [providers, setProviders] = useState([])
    useEffect(()=>{
        fetch('/providers')
        .then(res=>res.json())
        .then(setProviders)
    }, [])
    const providerList = providers.map(provider =>
        <p key={provider.id}>{provider.last_name}, {provider.first_name} || {provider.type_of_provider} || Department: {provider.department}</p>)

  return (
    <div>
        <h1>Providers</h1>
        {providerList}
    </div>
  )
}

export default Providers