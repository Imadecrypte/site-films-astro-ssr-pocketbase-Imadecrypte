/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jeaprrscnisrbgl")

  // remove
  collection.schema.removeField("vaz5k0cd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oygne2du",
    "name": "date_sortie",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x9cwksuo",
    "name": "langue",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jeaprrscnisrbgl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vaz5k0cd",
    "name": "date_sortie",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("oygne2du")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x9cwksuo",
    "name": "lange",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
