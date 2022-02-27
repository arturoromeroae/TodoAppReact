import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import './EmptyTodos.css'

const EmptyTodos = () => {
  return (
    <div>
      <h2 className='tituloEmpty'>No tienes Todo's 😥</h2>
      <Player
        autoplay
        loop
        src= 'https://assets4.lottiefiles.com/private_files/lf30_bn5winlb.json'
        className='animationContainer'
      />
    </div>
  )
}

export { EmptyTodos }