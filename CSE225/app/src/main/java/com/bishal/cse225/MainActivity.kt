package com.bishal.cse225

import android.annotation.SuppressLint
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.LinearLayout
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

class MainActivity : AppCompatActivity() {
    @SuppressLint("MissingInflatedId")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val layout = findViewById<LinearLayout>(R.id.layout_main)

        val questionToActivityMap = mapOf(
            "Question 1" to OneActivity::class.java,
            "Question 2" to TwoActivity::class.java,
            "Question 3" to ThreeActivity::class.java,
            "Question 4" to FourActivity::class.java,
            "Question 5" to FiveActivity::class.java,
            "Question 6" to SixActivity::class.java,
            "Question 7" to SevenActivity::class.java,
            "Question 8" to EightActivity::class.java,
            "Question 9" to NineActivity::class.java,
            "Question 10" to TenActivity::class.java,
        )

        for (i in 1..20) {
            val question = "Question $i"
            val button = Button(this).apply {
                text = question
                setOnClickListener {
                    val activityClass = questionToActivityMap[question]
                    if (activityClass != null) {
                        val intent = Intent(this@MainActivity, activityClass).apply {
                            putExtra("QUESTION", question)
                        }
                        startActivity(intent)
                    }
                }
            }
            layout.addView(button)
        }
    }
}