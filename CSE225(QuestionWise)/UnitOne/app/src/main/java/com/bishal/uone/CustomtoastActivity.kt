package com.bishal.uone

import android.annotation.SuppressLint
import android.os.Bundle
import android.view.Gravity
import android.widget.Button
import android.widget.LinearLayout
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class CustomtoastActivity : AppCompatActivity() {

    @SuppressLint("MissingInflatedId")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_customtoast)

        //getting the View object as defined in the custom_toast.xml file
        val linearLayout = findViewById<LinearLayout>(R.id.linearLayout)
        val customToast = layoutInflater.inflate(R.layout.custom_toast, linearLayout)

        val button = findViewById<Button>(R.id.button)
        button.setOnClickListener(){
            val myToast = Toast(applicationContext)
            myToast.duration = Toast.LENGTH_LONG
            myToast.setGravity(Gravity.CENTER_VERTICAL, 0, 0)
            myToast.view = customToast //setting the view of custom toast layout
            myToast.show()
        }
    }
}