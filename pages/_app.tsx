import { useEffect, useState } from 'react'
import { initGA, logPageView } from '../lib/analytics'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    const [hasInitialized, setHasInitialized] = useState(false)
    useEffect(() => {
        if (!hasInitialized) {
            initGA()
            setHasInitialized(true)
        }
        logPageView()
    })
    return <Component {...pageProps} />
}

export default MyApp
