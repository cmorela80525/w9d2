const React = require('react');

const Show = (props) => { 
    return (
      <div>
          <a href='/logs'>Home</a>
      <h1>Show Page</h1>
      {props.log.title} <br></br>
      {props.log.entry} <br></br>
      {props.log.shipIsBroken ? ' Ship is broken' : 'Ship is not broken'}
      </div>
    )
  }
  
  module.exports = Show;