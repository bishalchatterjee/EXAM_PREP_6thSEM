package com.bishal.course


import android.annotation.SuppressLint
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    @SuppressLint("MissingInflatedId")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val textview1 : TextView = findViewById(R.id.courses_CProgramming)
        val textview2 : TextView = findViewById(R.id.courses_JavaProgramming)
        val textview3 : TextView = findViewById(R.id.courses_PythonProgramming)
        val textview4 : TextView = findViewById(R.id.courses_RProgramming)

        textview1.setOnClickListener {
            val intent = Intent(Intent.ACTION_VIEW)
            intent.data = Uri.parse("https://www.geeksforgeeks.org/c-programming-language/")
            startActivity(intent)
        }

        textview2.setOnClickListener {
            val intent = Intent(Intent.ACTION_VIEW)
            intent.data = Uri.parse("https://www.geeksforgeeks.org/java/")
            startActivity(intent)
        }

        textview3.setOnClickListener {
            val intent = Intent(Intent.ACTION_VIEW)
            intent.data = Uri.parse("https://www.geeksforgeeks.org/python-programming-language/")
            startActivity(intent)
        }

        textview4.setOnClickListener {
            val intent = Intent(Intent.ACTION_VIEW)
            intent.data = Uri.parse("https://www.geeksforgeeks.org/r-tutorial/")
            startActivity(intent)
        }
    }
}