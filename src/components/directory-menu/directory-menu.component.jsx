import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import MenuItem from '../menu-item/menu-item.component'
import { selectSections } from '../../redux/directory/directory.selectors'

import './directory-menu.style.scss'

const DirectoryMenu = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProperties }) => {
        return <MenuItem key={id} {...otherSectionProperties} />
      })}
    </div>
  )
}
const mapStateToProps = createStructuredSelector({ sections: selectSections })
export default connect(mapStateToProps)(DirectoryMenu)
