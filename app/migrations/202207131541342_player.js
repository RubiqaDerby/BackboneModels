migration.up = function(migrator) {

    migrator.createTable({
        columns: {
		    "name": "TEXT",
		    "gender": "INTEGER"
		}
    });

};

migration.down = function(migrator) {

};
