const fs = require('fs')
const path = require('path')
const mime = require('mime-types')
const request = require('request')

const url = 'signed_url' // get a signed url. Make sure the filename and content type match
const filePath = 'package.json' // file to upload using signed url

const contentType = mime.contentType(path.extname(filePath))
const requestOptions = {
	method: 'PUT',
	url: url,
	headers: { 'content-type': contentType }
}

function requestCallback(error, response, body) {
	if (error) {
		console.log('error', error)
	} else {
		console.log('body', body, response)
		console.log('File uploaded successfully')
	}
}

fs.createReadStream(filePath).pipe(request.put(requestOptions, requestCallback))
