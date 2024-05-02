package com.bishal.one

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.provider.Settings
import android.widget.Toast

class AirplaneModeChange : BroadcastReceiver() {

    override fun onReceive(context: Context, intent: Intent) {
        if (isAirplaneModeOn(context)) {
            Toast.makeText(context, "Airplane mode is ON", Toast.LENGTH_LONG).show()
        } else {
            Toast.makeText(context, "Airplane mode is OFF", Toast.LENGTH_LONG).show()
        }
    }

    private fun isAirplaneModeOn(context: Context): Boolean {
        return Settings.System.getInt(context.contentResolver, Settings.Global.AIRPLANE_MODE_ON, 0) != 0
    }
}