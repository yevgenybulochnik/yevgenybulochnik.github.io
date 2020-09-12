import React from 'react'
import { Navbar, Button, IconName } from '@blueprintjs/core'
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
      <Group>
        {config.map((link, i) =>
          <Link key={i} to={link.to}>
            <Button className='bp3-minimal' icon={link.icon}>{link.name}</Button>
          </Link>
        )}
      </Group>
    </Navbar>
  )
}

export default Nav
