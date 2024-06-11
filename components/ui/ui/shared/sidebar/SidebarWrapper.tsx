import React from 'react'
import DesktopNavigation from './nav/DesktopNavigation'
import MobileNavigation from './nav/MobileNavigation'

type Props = React.PropsWithChildren<{}>

function SidebarWrapper({children}: Props) {
  return (
    <div className='w-full h-full p-4 flex flex-col lg:flex-row gap-4'>
      <DesktopNavigation/>
      <MobileNavigation/>
        <main className='h-[calc(100%-80px)] lg:h-full w-full flex gap-4'>
        {children}
        </main>
    </div>
  )
}

export default SidebarWrapper