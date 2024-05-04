package com.bishal.utwo

import android.annotation.SuppressLint
import android.app.AlarmManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast

class AlarmActvity : AppCompatActivity() {
    @SuppressLint("MissingInflatedId", "ServiceCast")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_alarm)

        val alarmManager = getSystemService(Context.ALARM_SERVICE) as AlarmManager


        val editText :EditText = findViewById(R.id.text)
        val btn : Button = findViewById(R.id.btn)

        btn.setOnClickListener {
            Toast.makeText(this , "Alarm Set" , Toast.LENGTH_SHORT).show()
            val t = editText.text.toString().toLong()
            val triggeredtime = System.currentTimeMillis() + (t*1000)
            val it = Intent(this , AlarmReceiver::class.java)

            val pendingIntent = PendingIntent.getBroadcast(
                this,
                0,
                it,
                PendingIntent.FLAG_IMMUTABLE or PendingIntent.FLAG_UPDATE_CURRENT
            )

            alarmManager.set(AlarmManager.RTC_WAKEUP , triggeredtime , pendingIntent)
        }


    }
}