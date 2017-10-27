import React, { Component } from 'react'
import { PageHeader, Jumbotron } from 'react-bootstrap'
import {SocialIcon} from 'react-social-icons'
import './App.css'

class App extends Component {

  render () {

    return (
      <div className='App'>

        <PageHeader>
          <img src={'/logo.svg'} className='Ecronix-logo' alt='logo' />
        </PageHeader>

        <Jumbotron style={{backgroundColor: 'transparent'}}>
          <img src={'/me.jpg'} className='Me-logo' alt='logo' />
          <h2>Mag. Tarik Huber</h2>
          <br />
          <div style={{padding: 5}}>
            <SocialIcon network='twitter' style={{margin: 5}} url={'https://twitter.com/TarikHuber'} />
            <SocialIcon network='github' style={{margin: 5}} url={'https://github.com/TarikHuber'} />
            <SocialIcon network='facebook' style={{margin: 5}} url={'https://www.facebook.com/TarikHuber'} />
            <SocialIcon network='linkedin' style={{margin: 5}} url={'https://www.linkedin.com/in/tarik-huber-342127128/'} />
            <SocialIcon network='medium' style={{margin: 5}} url={'https://medium.com/@tarikhuber'} />
          </div>

          <SocialIcon network='email' style={{margin: 5}} url={'mailto:huber.tarik@ecronix.com'} />
        </Jumbotron>

      </div>
    )
  }
}

export default App
