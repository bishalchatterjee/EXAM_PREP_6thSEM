package com.bishal.uthree

import android.annotation.SuppressLint
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText


class UpFragment : Fragment() {
    private lateinit var communicator: Communicator
    @SuppressLint("MissingInflatedId")
    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup
        ?,
        savedInstanceState: Bundle?): View?
    {
        val view= inflater.inflate(R.layout.fragment_up, container, false)
        val btn: Button = view.findViewById(R.id.btnSend)
        val editText: EditText = view.findViewById(R.id.editText)
        communicator = activity as Communicator
        btn.setOnClickListener {
            communicator.passData(editText.text.toString())
        }
        return view
    }
}

