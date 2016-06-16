import React from 'react'
import Task from './Task'
import FlipMove from 'react-flip-move'

export default React.createClass({

  render: function() {
    var taskNodes = this.props.data.map(function(task) {
      if (!task.status) {
        return (
           <Task assignee={task.assignee} id={task.id} taskbody={task.body} hex={task.hex}>
           </Task>
        );
      }
     
   }.bind(this));
   return(
     <div className="list col-md-4">
       <h3>Unclaimed Tasks</h3>
       <div className="unclaimed-container">
         <div className="unclaimed taskList">
            <FlipMove enterAnimation="fade" leaveAnimation="fade">
              {taskNodes}
            </FlipMove>
         </div>
       </div>
    </div>
   )
  }
});
