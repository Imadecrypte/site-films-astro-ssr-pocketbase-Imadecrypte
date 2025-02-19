/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jeaprrscnisrbgl")

  collection.name = "films"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jeaprrscnisrbgl")

  collection.name = "film"

  return dao.saveCollection(collection)
})
