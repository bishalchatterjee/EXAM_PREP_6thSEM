package com.bishal.one

import android.os.Bundle
import android.os.CountDownTimer
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class WorkoutActivity : AppCompatActivity() {

    private lateinit var countdownTimer: CountDownTimer
    private lateinit var countdownTextView: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_workout)

        countdownTextView = findViewById(R.id.countdown_timer_text)

        val workoutDetails = intent.getStringExtra("workoutDetails")
        // Update UI elements with workoutDetails

        // Initialize and start countdown timer here
        val countdownInMillis = 30000L // Set your desired countdown duration in milliseconds
        countdownTimer = object : CountDownTimer(countdownInMillis, 1000) {
            override fun onTick(millisUntilFinished: Long) {
                val remainingTime = millisUntilFinished / 1000
                countdownTextView.text = remainingTime.toString() // Update TextView with remaining time
            }

            override fun onFinish() {
                // Perform actions when the timer finishes (e.g., show completion message)
            }
        }.start()
    }

    override fun onDestroy() {
        super.onDestroy()
        countdownTimer.cancel() // Cancel timer when activity is destroyed
    }
}