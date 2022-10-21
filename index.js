require('dotenv').config()

const { ArcGISIdentityManager } = require('@esri/arcgis-rest-request')
const { createItem, addItemData } = require('@esri/arcgis-rest-portal')
const fs = require('fs')

async function main () {
  const userSession = new ArcGISIdentityManager({
    username: process.env.AGO_USERNAME,
    password: process.env.AGO_PASSWORD
  })

  const res = await createItem({
    authentication: userSession,
    item: {
      title: `Add Item Data Test`,
      type: 'CSV',
      public: true,
      filename: `three-features.csv`,
    }
  })

  const file = fs.createReadStream('./three-features.csv')

  await addItemData({
    authentication: userSession,
    id: res.id,
    data: file
  })
}

main()