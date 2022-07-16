migration.up = function(migrator) {

    migrator.dropTable(migrator.table);
    migrator.createTable({
        columns: {
		    "id": "INTEGER PRIMARY KEY AUTOINCREMENT",
		    "name": "TEXT",
		    "gender": "INTEGER"
		}
    });

};

migration.down = function(migrator) {

};
