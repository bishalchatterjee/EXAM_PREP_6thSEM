package com.bishal.uthree


import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView

class UpperFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val view = inflater.inflate(R.layout.fragment_upper, container, false)
        val txtLowerFrag: TextView = view.findViewById(R.id.txtUpperFrag)
//        txtLowerFrag.setText("Hi From Upper Fragment")
        return view
    }
}