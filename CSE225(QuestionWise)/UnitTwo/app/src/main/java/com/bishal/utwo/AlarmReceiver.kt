package com.bishal.utwo

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.media.MediaPlayer
import android.provider.Settings

class AlarmReceiver : BroadcastReceiver() {
    var mp: MediaPlayer? = null

    override fun onReceive(context: Context, intent: Intent) {
        mp = MediaPlayer.create(context, R.raw.alarm)
        mp?.isLooping = true
        mp?.start()
    }
}