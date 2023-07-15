import React from 'react'
import Features from '../components/Landing/Features'
import Hero from '../components/Landing/Hero'

const Landing = () => {
    return (
        <section>
            <div className='container mx-auto'>
                <Hero />
                <Features />
            </div>
        </section>
    )
}

export default Landing