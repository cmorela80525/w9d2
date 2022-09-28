const React = require('react');

const Show = (props) => { 
    return (
      <div>
          <a href='/logs'>Home</a>
      <h1>Show Page</h1>
      The {props.log.name} is {props.log.color}
      {props.log.shipIsBroken ? ' Ship is broken' : 'Ship is not broken'}
      </div>
    )
  }
  
  module.exports = Show;