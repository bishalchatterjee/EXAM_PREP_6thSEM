const mongoose = require("mongoose");

// Connection URL
const url = "mongodb://localhost:27017/";

// Database Name
const dbName = "new1";

// Connect to MongoDB
mongoose
  .connect(url + dbName, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected successfully to server");

    // Define the student schema
    const studentSchema = new mongoose.Schema({
      regno: Number,
      name: String,
      marks: Number,
    });

    // Create the student model
    const Student = mongoose.model("Student", studentSchema);

    // Insert 6 documents in 'students' collection
    const students = [
      { regno: 1, name: "John Doe", marks: 85 },
      { regno: 2, name: "Jane Smith", marks: 75 },
      { regno: 3, name: "Alice Johnson", marks: 90 },
      { regno: 4, name: "Bob Williams", marks: 80 },
      { regno: 5, name: "Eve Brown", marks: 95 },
      { regno: 6, name: "Mike Davis", marks: 70 },
    ];

    Student.insertMany(students)
      .then((result) => {
        console.log(`${result.insertedCount} documents inserted`);

        // Update the marks of the student with regno 2
        Student.updateOne({ regno: 2 }, { $set: { marks: 85 } })
          .then((result) => {
            console.log(`${result.modifiedCount} document updated`);

            // Find students with marks greater than 80
            Student.find({ marks: { $gt: 80 } })
              .then((docs) => {
                console.log("Students with marks greater than 80:");
                console.log(docs);
                mongoose.connection.close();
              })
              .catch((err) => {
                throw err;
              });
          })
          .catch((err) => {
            throw err;
          });
      })
      .catch((err) => {
        throw err;
      });
  })
  .catch((err) => {
    throw err;
  });
