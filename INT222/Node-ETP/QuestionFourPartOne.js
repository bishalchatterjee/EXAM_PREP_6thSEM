//Implement a Node.js application to connect with MongoDB to Create a database and add car collection with the fileds Model, Company, Mileage, Color, Owner. Add Multiple documents with Employee data. Finally, Query the above collection to find employees with more than a specific salary and display it in the console window.

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'carDatabase';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function(err) {
    if (err) {
        console.log('Error connecting to MongoDB:', err);
        return;
    }
    
    console.log('Connected successfully to MongoDB');

    const db = client.db(dbName);

    // Create car collection
    const carCollection = db.collection('cars');

    // Add multiple documents to car collection
    const cars = [
        { Model: 'Model1', Company: 'Company1', Mileage: 10000, Color: 'Red', Owner: 'Owner1' },
        { Model: 'Model2', Company: 'Company2', Mileage: 20000, Color: 'Blue', Owner: 'Owner2' },
        { Model: 'Model3', Company: 'Company3', Mileage: 30000, Color: 'Green', Owner: 'Owner3' }
    ];

    carCollection.insertMany(cars, function(err, result) {
        if (err) {
            console.log('Error inserting documents:', err);
            return;
        }

        console.log('Inserted', result.insertedCount, 'documents into car collection');

        // Query the car collection to find employees with more than a specific salary
        const specificSalary = 50000;
        const query = { Salary: { $gt: specificSalary } };

        carCollection.find(query).toArray(function(err, employees) {
            if (err) {
                console.log('Error querying car collection:', err);
                return;
            }

            console.log('Employees with salary greater than', specificSalary, ':', employees);
        });
    });
});