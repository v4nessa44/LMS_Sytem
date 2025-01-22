import React from 'react'
import './CertificationCompletion.css'
import { Button } from '../../components/Button/Button'
import { Box } from 'lucide-react'


const CertificationCompletion = () => {
  return (
      <div className='mt-20 cert-box'>
              <img src='../assets/course-testimonial-two.jpg'/>
          <Button className="text-[50px] h-30 mb-3" >Download</Button>
    </div>
  )
}

export default CertificationCompletion