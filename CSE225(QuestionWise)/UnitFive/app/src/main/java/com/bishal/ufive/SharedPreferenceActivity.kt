package com.bishal.ufive

import android.annotation.SuppressLint
import android.content.Context
import android.content.SharedPreferences
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import androidx.appcompat.app.AppCompatActivity


class SharedPreferenceActivity : AppCompatActivity() {

    private lateinit var sharedPreferences: SharedPreferences

    @SuppressLint("MissingInflatedId")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_sharedpreference)

        val editTextName = findViewById<EditText>(R.id.editTextName)
        val editTextEmail = findViewById<EditText>(R.id.editTextEmail)
        val buttonSave = findViewById<Button>(R.id.buttonSave)

        sharedPreferences = getSharedPreferences("MySharedPref", Context.MODE_PRIVATE)

        // Load saved data
        val savedName = sharedPreferences.getString("name", "")
        val savedEmail = sharedPreferences.getString("email", "")

        // Set saved data to EditText fields
        editTextName.setText(savedName)
        editTextEmail.setText(savedEmail)

        buttonSave.setOnClickListener {
            val name = editTextName.text.toString()
            val email = editTextEmail.text.toString()

            val editor: SharedPreferences.Editor = sharedPreferences.edit()
            editor.putString("name", name)
            editor.putString("email", email)
            editor.apply()
        }
    }
}