//Create a database db1 in Mongodb, Create a new collection Collection1 in db1, Insert 5 documents in Collection1, Sort all documents in Collection 1, Show all documents in collection 1

const mongoose = require('mongoose');

// Connection URL
const url = 'mongodb://localhost:27017/';

// Database Name
const dbName = 'db2';

// Connect to the MongoDB server
mongoose.connect(url + dbName, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected successfully to the database');

        // Create a new collection
        const collectionSchema = new mongoose.Schema({
            name: String
        });

        const Collection2 = mongoose.model('Collection2', collectionSchema);

        // Insert 5 documents into the collection
        const documents = [
            { name: 'Document 1' },
            { name: 'Document 2' },
            { name: 'Document 3' },
            { name: 'Document 4' },
            { name: 'Document 5' }
        ];

        Collection2.insertMany(documents)
            .then(result => {
                console.log('Inserted', result.insertedCount, 'documents');

                // Sort all documents in the collection in ascending order
                Collection2.find().sort({ name: 1 }).exec()
                    .then(docs => {
                        console.log('Sorted documents:', docs);

                        // Show all documents in the collection
                        Collection2.find().exec()
                            .then(docs => {
                                console.log('All documents:', docs);

                                // Close the connection
                                mongoose.connection.close();
                            })
                            .catch(err => {
                                console.error('Failed to retrieve documents:', err);
                            });
                    })
                    .catch(err => {
                        console.error('Failed to retrieve documents:', err);
                    });
            })
            .catch(err => {
                console.error('Failed to insert documents:', err);
            });
    })
    .catch(err => {
        console.error('Failed to connect to the database:', err);
    });
