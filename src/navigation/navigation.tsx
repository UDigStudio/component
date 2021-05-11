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
  <nav className={classNames('transparent', 'z-depth-0')}>
    <div className='nav-wrapper'>
      <a
        href='#'
        className={classNames('logo-text', 'brand-logo', 'h1')}
        style={{
          textShadow: '2px 3px 16px #CDE3FB',
          fontWeight: 700,
        }}
      >
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
