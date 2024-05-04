package com.bishal.one

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.ListView

//
//class MainActivity : AppCompatActivity() {
//
//    override fun onCreate(savedInstanceState: Bundle?) {
//        super.onCreate(savedInstanceState)
//        setContentView(R.layout.activity_main)
//
//        val startWorkoutButton = findViewById<Button>(R.id.start_workout_button) // Assuming your button has this id
//
//        startWorkoutButton.setOnClickListener {
//            val workoutDetails = getWorkoutDetails() // Replace with your logic to get workout details
//
//            val intent = Intent(this, WorkoutActivity::class.java)
//            intent.putExtra("workoutDetails", workoutDetails)
//            startActivity(intent)
//        }
//    }
//
//    // Function to get workout details (replace with your implementation)
//    private fun getWorkoutDetails(): String {
//        return "Sample Workout Details"
//    }
//}

class MainActivity : AppCompatActivity() {

    private lateinit var listView: ListView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
//
//        listView = findViewById(R.id.exercise_list_view)
//
//        // Sample exercise data (replace with your actual data source)
//        val exercises = listOf(
//            Exercise("Push-ups", R.drawable.ic_launcher_background),
//            Exercise("Squats", R.drawable.ic_launcher_background),
//            Exercise("Lunges", R.drawable.ic_launcher_background),
//            // Add more exercises...
//        )
//
//        val adapter = ExerciseAdapter(this, exercises)
//        listView.adapter = adapter
    }
}
