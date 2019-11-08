import React from "react";

export default ({login, password, expectedLogin, expectedPassword}) => (
	<div>
		{login === expectedLogin && password === expectedPassword && (
			<span>Success</span>
		)}
	</div>
);