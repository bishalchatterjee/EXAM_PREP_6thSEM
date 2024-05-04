package com.bishal.unitfour

import android.annotation.SuppressLint
import android.content.Context
import android.graphics.Canvas
import android.graphics.Paint
import android.graphics.Path
import android.util.AttributeSet
import android.view.View

@SuppressLint("ViewConstructor")
class CustomViewDrawing @JvmOverloads constructor(
    context : Context,
    attrs : AttributeSet? = null,
    defStyleAttr : Int = 0
) : View(context , attrs, defStyleAttr){
    lateinit var pant : Paint
    lateinit var canvas : Canvas
    lateinit var path : Path

}