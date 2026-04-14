import { GoldTitle, GrayTitle, Sectionlabel } from '@/components/reusePara'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div>
      <section className='pt-30 sm:pt-32 flex flex-col gap-14'>
        <GoldTitle>Welcome to Our Website</GoldTitle>
      <GrayTitle>Welcome to Prepzo</GrayTitle>
      <Sectionlabel>Welcome to Prepzo</Sectionlabel>
      </section>

    </div>
  )
}

export default page