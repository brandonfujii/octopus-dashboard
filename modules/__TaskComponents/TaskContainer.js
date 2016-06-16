import React from 'react'
import Unclaimed from './Unclaimed'
import Claimed from './Claimed'
 
export default React.createClass({
	mixins: [ReactFireMixin],
	componentWillMount() {
		// var config = {
		// 	apiKey: process.env.FIREBASE_SECRET,
		// 	databaseUrl: "https://project-8176285242747878312.firebaseio.com"
		// }

		// firebase.initializeApp(config)
		// var storage = firebase.database()
		// var teamsRef = storage.ref('teams')
		// var newobj = {
		// 	name: "Brandon"
		// }
		// teamsRef.set(newobj)
		var FirebaseRef = new Firebase("https://nuvention.firebaseio.com/teams");
		this.bindAsArray(FirebaseRef, "teams");
	},
	getInitialState() {
   		return {teams: []};
  	},
	render() {
		return (
			<div className="TaskContainer clearfix">
        		<Unclaimed data={this.state.teams}></Unclaimed>
				<Claimed data={this.state.teams}></Claimed>      
			</div>
		)
	}
});
