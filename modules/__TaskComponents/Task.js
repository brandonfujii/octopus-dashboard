import React from 'react'
import Draggable, {DraggableCore} from 'react-draggable';

export default React.createClass({
   componentDidMount() {
    var assignee = document.getElementsByClassName("assignee");

    for (var i = 0; i < assignee.length; i++) {
      if (assignee[i].id) {
        assignee[i].style.display = '';
      }
      else {
        assignee[i].style.display = 'none';
      }
    }
  },
  rawMarkup() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },
  hasClass(element, cls) {
    return element.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(element.className);
  },
  handleStart(e) {
    var targetElem = e.target
    while ( targetElem != null ) {
      if ( this.hasClass(targetElem, "Task") ) {
        targetElem.style.position = 'absolute'
        targetElem.style.zIndex = 10000
      }
      targetElem = targetElem.parentNode
    }
  },
  render() {
    return(
      <Draggable onStart={this.handleStart}>
        <div id={this.props.id} className="Task" data-color={this.props.hex}>
        		<div className="tag">{this.props.id}</div>
        		<div className="body"> {this.props.taskbody}</div>
            <div id={this.props.assignee} className="assignee"><div className="mask"><img src='img/slackatar.png'></img></div><div className="assigneeName">{this.props.assignee}</div></div>
        </div>
      </Draggable>
    );
  }
});
