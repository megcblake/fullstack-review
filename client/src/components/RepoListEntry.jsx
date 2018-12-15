import React from 'react';

const RepoListEntry = (props) => (
	<tr>
		<td>{props.repo.id}</td>
		<td><a href={props.repo.link}>{props.repo.name}</a></td>
		<td>{props.repo.user.name}</td>
		<td>{props.repo.forks}</td>
	</tr>
)

export default RepoListEntry;