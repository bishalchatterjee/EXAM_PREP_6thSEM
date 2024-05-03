// Implement a Node.js application to connect with MongoDB to create a database and add house collection with the fields - Hno, rooms, furniture, and rent and Add multiple documents with student data. Finally, Sort(in ascending order) the studnet details with marks and display them in the console window.

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydatabase';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
    if (err) {
        console.error('Failed to connect to MongoDB:', err);
        return;
    }
    
    console.log('Connected successfully to MongoDB');

    const db = client.db(dbName);

    // Create house collection
    const houseCollection = db.collection('house');

    // Insert multiple documents with student data
    const students = [
        { Hno: 'A101', rooms: 3, furniture: 'Sofa', rent: 1000 },
        { Hno: 'B202', rooms: 2, furniture: 'Bed', rent: 800 },
        { Hno: 'C303', rooms: 4, furniture: 'Table', rent: 1200 }
    ];

    houseCollection.insertMany(students, function(err, result) {
        if (err) {
            console.error('Failed to insert documents:', err);
            return;
        }

        console.log('Inserted', result.insertedCount, 'documents');

        // Sort student details by marks in ascending order
        houseCollection.find().sort({ marks: 1 }).toArray(function(err, docs) {
            if (err) {
                console.error('Failed to retrieve documents:', err);
                return;
            }

            console.log('Sorted student details:', docs);

            // Close the connection
            client.close();
        });
    });
});