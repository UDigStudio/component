import classNames from 'classnames'
import * as React from 'react'
import './navigation.css'
export interface NavigationProps {
  logo: React.ReactNode
  rightNav?: React.ReactNode | React.ReactNode[]
}

export const Navigation: React.FunctionComponent<NavigationProps> = ({
  logo,
  rightNav
}: NavigationProps) => (
  <nav className='transparent z-depth-0'>
    <div className='nav-wrapper'>
      <a href='#' className={classNames('logo-text', 'brand-logo')}>
        {logo}
      </a>
      <ul id='nav-mobile' className='right hide-on-med-and-down'>
        {rightNav && Array.isArray(rightNav) ? (
          rightNav.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>{rightNav}</li>
        )}
      </ul>
    </div>
  </nav>
)
