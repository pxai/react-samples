import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import template from './client/template';
import App from './client/App';

const server = express ();

server.get ("/", (req, res) => {
	const body = renderToString (<App/>);

	res.send (template ({body}));
});

server.listen (3000);
console.log ("Server started on port 3000");
