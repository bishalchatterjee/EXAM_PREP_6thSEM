package com.bishal.uthree

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity

class StaticFragmentActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_staticfragment)

        if (savedInstanceState == null) {
            supportFragmentManager.beginTransaction()
                .add(R.id.fragUpper, UpperFragment())
                .add(R.id.fragLower, LowerFragment())
                .commit()
        }
    }
}