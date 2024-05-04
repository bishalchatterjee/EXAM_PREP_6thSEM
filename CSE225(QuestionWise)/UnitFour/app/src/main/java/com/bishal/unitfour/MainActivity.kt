package com.bishal.unitfour

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.bishal.unitfour.MyDrawingView

class MainActivity : AppCompatActivity() {
    lateinit var customDrawing : MyDrawingView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        customDrawing = MyDrawingView(this)
        setContentView(customDrawing)
    }
}