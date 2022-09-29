const React = require("react");

const Edit = (props) => {
    return (
    
        <form action={`/logs/${props.log._id}?_method=PUT`} method="POST">
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" defaultValue={props.log.title} /> <br />
          <label htmlFor="entry">Entry:</label>
          <input type="text" name="entry" defaultValue={props.log.entry} /> <br />
          <label htmlFor="shipIsBroken">Ship Is Broken:</label>
          {props.log.shipIsBroken ? (
            <input type="checkbox" name="shipIsBroken" defaultChecked />
          ) : (
            <input type="checkbox" name="readyToEat" />
          )}
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      
    );
  };
  
  module.exports = Edit;