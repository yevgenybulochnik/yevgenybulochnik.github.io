import React from 'react'
import {
  Navbar,
  Button,
  IconName,
  Menu,
  MenuItem,
  Popover,
} from '@blueprintjs/core'
import { Link } from '@reach/router'
import './nav.scss'

const { Heading, Divider, Group } = Navbar

type LinkConfig = {
  to: string;
  name: string;
  icon?: IconName;
}

interface Props {
  branding: string;
  config: LinkConfig[];
}

const Nav: React.FC<Props> = (props) => {
  const {
    branding,
    config,
  } = props

  return (
    <Navbar className='nav'>
      <Group>
        <Heading><strong>{branding}</strong></Heading>
        <Divider/>
      </Group>
      <Group className='nav-tabs-desktop'>
        {config.map((link, i) =>
          <Link key={i} to={link.to}>
            <Button className='bp3-minimal' icon={link.icon}>{link.name}</Button>
          </Link>
        )}
      </Group>
      <Group className='nav-tabs-mobile' align='right'>
        <Popover
          content={
            <Menu>
              {config.map((link, i) =>
                <MenuItem key={i} text={link.name} icon={link.icon} href={link.to}/>
              )}
            </Menu>
          }
        >
          <Button className='nav-button-mobile'>Menu</Button>
        </Popover>
      </Group>
    </Navbar>
  )
}

export default Nav
