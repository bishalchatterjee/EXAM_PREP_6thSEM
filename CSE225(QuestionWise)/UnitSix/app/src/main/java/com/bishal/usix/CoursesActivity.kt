package com.bishal.usix

import android.annotation.SuppressLint
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class CoursesActivity : AppCompatActivity() {

    @SuppressLint("MissingInflatedId")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_courses)

        val cProgramming = findViewById<TextView>(R.id.courses_CProgramming)
        val javaProgramming = findViewById<TextView>(R.id.courses_JavaProgramming)
        val pythonProgramming = findViewById<TextView>(R.id.courses_PythonProgramming)
        val rProgramming = findViewById<TextView>(R.id.courses_RProgramming)

        cProgramming.setOnClickListener {
            val url = "https://www.geeksforgeeks.org/c-programming-language/"
            val intent = Intent(Intent.ACTION_VIEW)
            intent.data = Uri.parse(url)
            startActivity(intent)
        }

        javaProgramming.setOnClickListener {
            val url = "https://www.geeksforgeeks.org/java/"
            val intent = Intent(Intent.ACTION_VIEW)
            intent.data = Uri.parse(url)
            startActivity(intent)
        }

        pythonProgramming.setOnClickListener {
            val url = "https://www.geeksforgeeks.org/python-programming-language/"
            val intent = Intent(Intent.ACTION_VIEW)
            intent.data = Uri.parse(url)
            startActivity(intent)
        }

        rProgramming.setOnClickListener {
            val url = "https://www.geeksforgeeks.org/r-tutorial/"
            val intent = Intent(Intent.ACTION_VIEW)
            intent.data = Uri.parse(url)
            startActivity(intent)
        }
    }
}