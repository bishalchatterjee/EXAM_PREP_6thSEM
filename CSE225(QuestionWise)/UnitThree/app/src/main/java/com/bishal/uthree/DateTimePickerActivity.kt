package com.bishal.uthree


import android.annotation.SuppressLint
import android.app.DatePickerDialog
import android.app.TimePickerDialog
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import java.util.Calendar

class DateTimePickerActivity : AppCompatActivity() {

    private lateinit var txtDate: EditText
    private lateinit var txtTime: EditText
    private lateinit var btnDatePicker: Button
    private lateinit var btnTimePicker: Button

    @SuppressLint("SetTextI18n")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_datetimepicker)

        txtDate = findViewById(R.id.edt1)
        txtTime = findViewById(R.id.edt2)
        btnDatePicker = findViewById(R.id.btn1)
        btnTimePicker = findViewById(R.id.btn2)

        btnDatePicker.setOnClickListener {
            // Get current date
            val c = Calendar.getInstance()
            val mYear = c.get(Calendar.YEAR)
            val mMonth = c.get(Calendar.MONTH)
            val mDay = c.get(Calendar.DAY_OF_MONTH)

            val datePickerDialog = DatePickerDialog(
                this,
                { view, year, monthOfYear, dayOfMonth ->
                    txtDate.setText("$dayOfMonth-${monthOfYear + 1}-$year")
                },
                mYear,
                mMonth,
                mDay
            )

            datePickerDialog.show()
        }

        btnTimePicker.setOnClickListener {
            // Get current time
            val c = Calendar.getInstance()
            val mHour = c.get(Calendar.HOUR_OF_DAY)
            val mMinute = c.get(Calendar.MINUTE)

            val timePickerDialog = TimePickerDialog(
                this,
                { view, hourOfDay, minute ->
                    txtTime.setText("$hourOfDay:$minute")
                },
                mHour,
                mMinute,
                true
            )

            timePickerDialog.show()
        }
    }
}



