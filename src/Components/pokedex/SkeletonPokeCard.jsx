import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'




const SkeletonPokeCard = ({ card }) => {
  return (

    Array(card).fill(0).map((_, i) => (<div className='card-skeleton'>
      <div className='skeleton-container' key={i}>
        <div className='card-skeleton__img' >
          <Skeleton height={280} width={280} circle />
        </div>
        <div className='card-skeleton__body'>
          <h1 className='card-skeleton__body-h1'><Skeleton width={250} /></h1>
        </div>
        <div className='card-skeleton__type'>
          <h2><Skeleton width={55} height={36} borderRadius={20} /></h2>
          <h2><Skeleton width={55} height={36} borderRadius={20} /></h2>
        </div>
      </div>
    </div>
    ))

  )
}

export default SkeletonPokeCard