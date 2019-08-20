# Upload to GS using signed urls

File upload using `multipart` adds a request boundary which causes the file to not be exactly the same as expected on upload.
This example shows that you can upload a file without request boundary by creating a read stream and piping that data to the request.
