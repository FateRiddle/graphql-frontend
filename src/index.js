import React from 'react'
import ReactDOM from 'react-dom'
import 'tachyons/css/tachyons.min.css'
import './styles/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import gql from 'graphql-tag'

// 1
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { BrowserRouter as Router } from 'react-router-dom'

// 2
const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cja9f9o9x0ar20104mav1zd4d',
})

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

//最简单的使用方式
client
  .query({
    query: gql`
      query AllLinks {
        allLinks {
          id
          url
          description
        }
      }
    `,
  })
  .then(response => console.log(response.data.allLinks))

const render = () => {
  ReactDOM.render(
    //4
    <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>,

    document.getElementById('root')
  )
}

if (module.hot) {
  module.hot.accept('./components/App', render)
}

render()

registerServiceWorker()
