package com.bishal.unitfour


import android.content.Context
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.Paint
import android.util.AttributeSet
import android.view.View
import java.lang.NullPointerException

class MyDrawingView @JvmOverloads constructor(
    context : Context,
    attrs : AttributeSet? = null,
    defStyleAttr : Int = 0
) : View(context , attrs, defStyleAttr){

   private val paint = Paint()  // first step

    override fun onDraw(canvas : Canvas) {
        super.onDraw(canvas)
        canvas.drawColor(Color.BLUE)     // Draw Background Color
        paint.color = Color.RED
        canvas.drawRect(100f , 100f , 500f , 500f , paint)
        paint.color = Color.GRAY
    }
}