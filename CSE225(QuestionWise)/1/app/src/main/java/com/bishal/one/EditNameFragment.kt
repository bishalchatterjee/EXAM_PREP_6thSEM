package com.bishal.one

import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.fragment.app.Fragment

class EditNameFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_edit_name, container, false)

        val saveButton: Button = view.findViewById(R.id.save_name)
        saveButton.setOnClickListener {
            // Handle save operation here
            // For example, get the text from the EditText and save it
            val editText: EditText = view.findViewById(R.id.edit_name)
            val name = editText.text.toString()
            // Log the name
            Log.d("EditNameFragment", "Name entered: $name")
            // Display a Toast message with the entered name
            Toast.makeText(context, "Name saved: $name", Toast.LENGTH_SHORT).show()
        }

        return view
    }
}