import React, { Component } from 'react'
import Link from './Link'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class LinkList extends Component {
  render() {
    const { data } = this.props
    console.log(data)
    // 1
    if (data && data.loading) {
      return <div>Loading</div>
    }

    // 2
    if (data && data.error) {
      return <div>Error</div>
    }

    // 3
    const linksToRender = data.allLinks

    return <div>{linksToRender.map(link => <Link key={link.id} link={link} />)}</div>
  }
}

const ALL_LINKS_QUERY = gql`
  query {
    allLinks {
      id
      createdAt
      url
      description
    }
  }
`
export default graphql(ALL_LINKS_QUERY)(LinkList)
