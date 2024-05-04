package com.bishal.uone

import android.os.Bundle
import android.widget.ScrollView
import androidx.appcompat.app.AppCompatActivity

class ScrollViewActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_scrollview)

        // If you want to manipulate the ScrollView programmatically, you can do so here
        val scrollView = findViewById<ScrollView>(R.id.scrollView)
        // Example: Scroll to the bottom
        scrollView.post {
            scrollView.fullScroll(ScrollView.FOCUS_DOWN)
        }
    }
}
