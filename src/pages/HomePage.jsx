import React from 'react'
import SectionOneHome from '../components/SectionOneHome'
import SectionTwoHome from '../components/SectionTwoHome'
import SectionThree from '../components/SectionThree'

const HomePage = () => {
  return (
      <div className='flex px-5 flex-col'>
          <SectionOneHome />
          <SectionTwoHome />
          <SectionThree />
    </div>
  )
}

export default HomePage