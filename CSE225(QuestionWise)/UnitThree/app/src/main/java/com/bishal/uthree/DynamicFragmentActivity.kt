package com.bishal.uthree

import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentManager
import androidx.fragment.app.FragmentTransaction
import android.os.Bundle
import android.widget.Button

class DynamicFragmentActivity : AppCompatActivity() {

    private val Root_Frag = "root_fagment"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_dynamicfragment)

        val btnMessages: Button = findViewById(R.id.btnMessages)
        val btnStatus: Button = findViewById(R.id.btnStatus)
        val btnCalls: Button = findViewById(R.id.btnCalls)

        // default frag
        loadFrag(FirstFragment(), 0)

        btnMessages.setOnClickListener {
            loadFrag(FirstFragment(), 0)
        }

        btnStatus.setOnClickListener {
            loadFrag(SecondFragment(), 1)
        }

        btnCalls.setOnClickListener {
            loadFrag(ThirdFragment(), 1)
        }
    }

    // flag 0 for add, 1 for replace
    fun loadFrag(fragment_name: Fragment, flag: Int) {
        val fm: FragmentManager = supportFragmentManager
        val ft: FragmentTransaction = fm.beginTransaction()

        if (flag == 0) {
            ft.add(R.id.FL, fragment_name)
            fm.popBackStack(Root_Frag, FragmentManager.POP_BACK_STACK_INCLUSIVE)
            ft.addToBackStack(Root_Frag)
        } else {
            ft.replace(R.id.FL, fragment_name)
            ft.addToBackStack(null)
        }

        ft.commit()
    }
}