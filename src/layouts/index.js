import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import LeftSidebar from './../components/left-sidebar'
import RightSidebar from './../components/right-sidebar'
import Footer from './../components/footer'
import './index.scss'

const Layout = ({ children, data }) => (
  <div id="page">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="pl" />
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    <div className="container-fluid" id="page-content">
      <div className="row">
        <div className="col-xl-2">
          <LeftSidebar />
        </div>
        <div className="col">
          <main id="main">{children()}</main>
        </div>
        <div className="col-xl-auto">
          <RightSidebar />
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
