const React = require("react");

const Index = (props) => {
    return (
    
        <div>
          <h1>Index Route</h1>
  
          <nav>
            <a href="/logs/new">Create a New Log</a>
          </nav>
  
          <ul>
            {props.logs.map((log, index) => {
              return (
                <li key={index}>
                    {log.title} <br></br> 
                    {log.entry} <br></br>
                    {log.shipIsBroken ? ' Ship is broken' : 'Ship is not broken'}

                </li>
              )
            })}
          </ul>
        </div>
    
    );
  };

module.exports = Index