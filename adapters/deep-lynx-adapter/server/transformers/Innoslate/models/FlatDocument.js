// Copyright 2020, Battelle Energy Alliance, LLC  ALL RIGHTS RESERVED

class FlatDocument {
    constructor(
        id,
        name,
        number,
        description,
        // created,
        // modified,
        // createdBy,
        // modifiedBy,
        // version
        ) {
            this.id = String(id),
            this.name = name,
            this.number = String(number),
            this.description = description
            //this.created = String(created),
            //this.modified = String(modified),
            //this.createdBy = createdBy,
            //this.modifiedBy = modifiedBy,
            //this.version = String(version),
            this.entities = []
        }
}

module.exports = FlatDocument;
