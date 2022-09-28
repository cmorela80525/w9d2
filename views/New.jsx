const React = require('react')

const New = (props) => {
    return(
       <div>
           <h1>New Log Page</h1>
           
            <form action="/logs" method='POST'>
                <label>Title:</label>
                <input type="text" name="title"></input><br/>
                <label>Entry::</label>
                <input type="text" name="entry"></input><br/>
                <label>Ship is Broken:</label>
                <input type="checkbox" name="shipIsBroken"></input><br/>
                <input type="submit" name="" value="Create Log"></input>
            </form>
        </div>
    )
}


module.exports = New