import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = (props) => (
	<div id="list">
	  <div>
	    <h4> Repo List Component </h4>
	    There are {props.repos.length} repos.
	  </div>
	  <table>
	  	<thead>
	  		<tr>
		  		<th><b>Repo ID</b></th>
		  		<th><b>Repo Name</b></th>
		  		<th><b>Username</b></th>
		  		<th><b>Forks Count</b></th>
	  		</tr>
	  	</thead>
	  	<tbody>
			  {props.repos.map(repo => (
			  	<RepoListEntry repo={repo} key={repo.id} />
			  ))}
	  	</tbody>
	  </table>
	</div>
)

export default RepoList;