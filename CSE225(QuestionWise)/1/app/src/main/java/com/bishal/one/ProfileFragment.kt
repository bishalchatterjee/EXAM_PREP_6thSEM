package com.bishal.one

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentManager

class ProfileFragment : Fragment() {

    private lateinit var fragmentManager: FragmentManager

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.fragment_profile, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        fragmentManager = childFragmentManager

        // Replace with the default fragment
        fragmentManager.beginTransaction()
            .replace(R.id.fragment_container, EditNameFragment())
            .commit()
    }

    fun switchToEditName() {
        fragmentManager.beginTransaction()
            .replace(R.id.fragment_container, EditNameFragment())
            .addToBackStack(null)
            .commit()
    }

    fun switchToEditEmail() {
        fragmentManager.beginTransaction()
            .replace(R.id.fragment_container, EditEmailFragment())
            .addToBackStack(null)
            .commit()
    }

    // Add similar methods for other sections
}