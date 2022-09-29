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
                    <a href={`/logs/${log._id}`}>{log.title}</a> <br></br> 
                    {log.entry} <br></br>
                    {log.shipIsBroken ? ' Ship is broken ' : 'Ship is not broken '} <br></br>
                    <a href={`/logs/${log._id}/edit`}>Edit This Log</a>

                    <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
        <input type="submit" value="Delete" />
      </form>
                </li>
              )
            })}
          </ul>
        </div>
    
    );
  };

module.exports = Index