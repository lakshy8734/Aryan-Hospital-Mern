import React from 'react'
import DashboardHeader from 'components/DashboardHeader/DashboardHeader'
import DashboardSidebar from 'components/DashboardSidebar/DashboardSidebar'
import DashboardMain from 'components/DashboardMain/DashboardMain'

function Dashboard() {
  return (
    <div>
        <DashboardHeader/>
        <DashboardSidebar/>
        <DashboardMain/>
      
    </div>
  )
}

export default Dashboard