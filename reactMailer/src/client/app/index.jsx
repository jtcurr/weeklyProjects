import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
	render () {
		return (
			<div>
      <h1>React Mailer</h1>
      
      <form>
        <input type='text' placeholder='Enter email address' /><br></br>
        <input type='text' placeholder='Enter message' />
      </form>
      </div>
		)
	}
}
render(<App/>, document.getElementById('app'));