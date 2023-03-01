import React from 'react'
import {Link} from 'react-router-dom'
const Dashboard = () => {
  return (
    <div class="fixed-action-btn">
    <Link to='/survey/new' class="btn-floating btn-large red">
      <i class="large material-icons">+</i>
    </Link>
  </div>
  )
}

export default Dashboard