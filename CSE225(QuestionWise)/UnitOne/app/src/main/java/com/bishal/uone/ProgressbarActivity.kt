package com.bishal.uone

import android.annotation.SuppressLint
import android.os.Bundle
import android.os.Handler
import android.view.View
import android.widget.Button
import android.widget.ProgressBar
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class ProgressbarActivity : AppCompatActivity() {

    var isStarted = false
    var progressStatus = 0
    var handler: Handler? = null

    @SuppressLint("MissingInflatedId")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_progressbar)

        handler = Handler(Handler.Callback {
            if (isStarted) {
                if(progressStatus!=100)
                    progressStatus++
                else
                    Toast.makeText(this, "Progress Completed", Toast.LENGTH_SHORT).show()
            }
            val progressBarHorizontal = findViewById<ProgressBar>(R.id.progressBarHorizontal)
            progressBarHorizontal.progress = progressStatus
            val textViewHorizontalProgress = findViewById<TextView>(R.id.textViewHorizontalProgress)
            textViewHorizontalProgress.text = "${progressStatus}/${progressBarHorizontal.max}"
            handler?.sendEmptyMessageDelayed(0, 100)

            true
        })

        handler?.sendEmptyMessage(0)

        val btnProgressBarHorizontal = findViewById<Button>(R.id.btnProgressBarHorizontal)
        btnProgressBarHorizontal.setOnClickListener {
            isStarted = !isStarted
        }
    }
}