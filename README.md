## Unsweetener

A web app built with React and Express using the USDA APIs to find out which sweeteners (both artifical and natural) have been added to food and drinks. Being hosted on Netlify, the server uses lambdas to make the outgoing API requests.

### Getting Started

This repo contains both the client and server files, as well as Netlify commands in the root.  
To start quickly, from the root directory:

1. Run `npm run init:all` to install the packages for both the client & server
2. Run `npm run build` to build the netlify functions locally
3. Run `npm start` as usual.

### Data

Currently, there is no database for this app. All data is retrieved directly from the USDA APIs, manipulated as necessary, then returned to the client.

This isn't exactly ideal since it doesn't allow for mutation of the data itself to fit the needs of this app, on top of the fact that the USDA holds much more data than needed for these purposes.

One of the next-ups is to build a database using the exported USDA data ((found here))[https://fdc.nal.usda.gov/download-datasets.html].
