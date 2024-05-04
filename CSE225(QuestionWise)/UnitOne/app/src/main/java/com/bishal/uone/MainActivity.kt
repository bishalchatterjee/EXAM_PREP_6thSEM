package com.bishal.uone

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Example: Start the ScrollViewActivity
//        val intent = Intent(this, ScrollViewActivity::class.java)
//        startActivity(intent)

        // Example: Start the ToolbarActivity
        val intent = Intent(this, CustomtoastActivity::class.java)
        startActivity(intent)
    }
}