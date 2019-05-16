async function getIpAddress () {
	const data = await fetch ("https://api6.ipify.org?format=json"),
		result = await data.json ();

	return result;
}

async function main () {
	console.log ("Ready?");
	const result = await getIpAddress ();
	console.log ("Finished: ", result.ip);
}


main ();

// Ready?
// Finished: ip