import React from 'react';

const RepoListEntry = (props) => (
	<tr>
		<td>{props.repo.id}</td>
		<td>{props.repo.name}</td>
		<td>{props.repo.user.name}</td>
		<td>{props.repo.forks}</td>
	</tr>
)

export default RepoListEntry;