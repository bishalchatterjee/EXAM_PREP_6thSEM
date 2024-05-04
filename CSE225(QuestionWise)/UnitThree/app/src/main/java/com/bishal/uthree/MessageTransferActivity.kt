package com.bishal.uthree

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

class MessageTransferActivity : AppCompatActivity(),Communicator {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_messagetransfer)

        val uf = UpperFragment()
        supportFragmentManager.beginTransaction().replace(R.id.fc,uf)
    }

    override fun passData(editTextArgs: String) {
        val bundle= Bundle()
        bundle.putString("message", editTextArgs)
        val transaction = this.supportFragmentManager.beginTransaction()
        val fragment1= DownFragment()
        fragment1.arguments =bundle
        transaction.replace(R.id.fc, fragment1).commit()
    }
}