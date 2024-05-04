package com.bishal.uone

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import androidx.appcompat.app.AppCompatActivity

class SplashActivity : AppCompatActivity() {

    private val SPLASH_DELAY: Long = 1500 // 1.5 seconds

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_splashscreen)

        // Using a handler to delay loading the MainActivity
        Handler().postDelayed({
            // Start MainActivity after delay
            startActivity(Intent(this@SplashActivity, MainActivity::class.java))
            finish() // Finish SplashActivity
        }, SPLASH_DELAY)
    }
}
