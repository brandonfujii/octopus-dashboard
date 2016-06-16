import React from 'react'
import Task from './Task'
import FlipMove from 'react-flip-move'

export default React.createClass({

  render() {
    var taskNodes = this.props.data.map(function(task) {
      if (task.status == "Claimed") {
        return (
           <Task assignee={task.assignee} id={task.id} taskbody={task.body} hex={task.hex}>
           </Task>
        );
      }
   }.bind(this));
   return(
     <div className="list col-md-4">
       <h3>Claimed Tasks</h3>
       <div className="claimed-container">
         <div className="claimed taskList">
            <FlipMove enterAnimation="fade" leaveAnimation="fade">
              {taskNodes}
            </FlipMove>
         </div>
       </div>
     </div>
   )
  }
});