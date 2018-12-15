import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = (props) => (
	<div id="list">
	  <div>
	    <h4> Repo List Component </h4>
	    There are {props.repos.length} repos.
	  </div>
	  <table>
	  	<tbody>
			  {props.repos.map(repo => (
			  	<RepoListEntry repo={repo} key={repo.id} />
			  ))}
	  	</tbody>
	  </table>
	</div>
)

export default RepoList;