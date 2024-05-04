package com.bishal.uone

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.appcompat.widget.Toolbar

class ToolbarActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_toolbar)

        // Find the toolbar view
        val toolbar: Toolbar = findViewById(R.id.toolbar)

        // Set the toolbar as the ActionBar
        setSupportActionBar(toolbar)

        // Example: Customize the toolbar
        supportActionBar?.apply {
            title = "Toolbar"
            subtitle = "Support"
            setDisplayHomeAsUpEnabled(true) // Show back button
            // Add more customization as needed
        }
    }
}
