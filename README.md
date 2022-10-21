# arcgis-rest-js-node-16-bug

This demo shows a potential bug in arcgis-rest-js 4.x. The `addItemData` function is unable to upload the file data even though there is no error thrown.

To run this project, you need to setup the environment variables using the `.env` file. Rename the `.env-example` file to `.env` and provide an ArcGIS Online credential.

Then you can `volta run yarn` and `volta run node index.js` to run the script. There should be no error for both requests but the item created will not contain any file. If you try to download the item, it shows a `Item does not have a file.` error page.