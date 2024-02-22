import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Store = ({userInfo}) => {
  return (
    <>
    <Header userInfo={userInfo}/>
    <section className="min-h-screen">
        <main className="py-5">
            <div className="flex items-center justify-center">
                <h1 className='text-5xl font-bold'>Our Store</h1>
            </div>
            <div className="flex items-center justify-center px-32 py-4">
                <p className='text-center '>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, iste laudantium. Rem libero nisi sapiente, accusantium laborum perspiciatis repellendus iusto consectetur dolores voluptatum magni illum reiciendis tempora debitis culpa. Tenetur!
                </p>
            </div>
            
        </main>
    </section>
    <Footer />
    </>
  )
}

export default Store