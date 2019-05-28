import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Cheatsheets</h1>
    <h2>2018-12-29</h2>
    <p><a href="" target="_blank"></a></p>
    <p><a href="https://gto76.github.io/python-cheatsheet/" target="_blank">Much Python</a></p>
    <p><a href="https://github.com/trimstray/the-book-of-secret-knowledge" target="_blank">Various Linux</a></p>
    <p><a href="https://devhints.io/docker-compose" target="_blank">Docker Compose</a></p>  
    <h1>Business</h1>
    <h2>2018-12-13</h2>
    <p><a href="https://lobste.rs/" target="_blank">lobste.rs</a></p>
    <p><a href="https://barnacl.es/" target="_blank">barnacl.es</a></p>
    <p><a href="https://getlatka.com/companies" target="_blank">Latka SAAS database</a></p>
  </Layout>
)

export default IndexPage;
