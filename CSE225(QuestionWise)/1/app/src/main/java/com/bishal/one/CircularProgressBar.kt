package com.bishal.one

import android.content.Context
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.Paint
import android.util.AttributeSet
import android.view.View

class CircularProgressBar(context: Context, attrs: AttributeSet?) : View(context, attrs) {

    private var progress = 50f
    private var maxProgress = 100f
    private var progressColor = Color.GREEN
    private var backgroundColor = Color.GRAY
    private var strokeWidth = 8f

    init {
        val typedArray = context.obtainStyledAttributes(attrs, R.styleable.CircularProgressBar)
        progressColor = typedArray.getColor(R.styleable.CircularProgressBar_progressColor, Color.GREEN)
        backgroundColor = typedArray.getColor(R.styleable.CircularProgressBar_backgroundColor, Color.GRAY)
        strokeWidth = typedArray.getDimension(R.styleable.CircularProgressBar_strokeWidth, 8f)
        typedArray.recycle()
    }

    override fun onDraw(canvas: Canvas) {
        super.onDraw(canvas)

        val paint = Paint().apply {
            style = Paint.Style.STROKE
            strokeWidth = this@CircularProgressBar.strokeWidth
            strokeCap = Paint.Cap.ROUND
            isAntiAlias = true
        }

        val centerX = width / 2f
        val centerY = height / 2f
        val radius = centerX - strokeWidth / 2

        // Draw background circle
        paint.color = backgroundColor
        canvas.drawCircle(centerX, centerY, radius, paint)

        // Draw progress arc
        paint.color = progressColor
        val sweepAngle = (progress / maxProgress) * 360f
        canvas.drawArc(centerX - radius, centerY - radius, centerX + radius, centerY + radius, -90f, sweepAngle, false, paint)
    }

    fun setProgress(progress: Float) {
        this.progress = progress.coerceIn(0f, maxProgress)
        invalidate() // Trigger redraw
    }

    fun getMaxProgress(): Float {
        return maxProgress
    }

    fun setMaxProgress(maxProgress: Float) {
        this.maxProgress = maxProgress
        invalidate()
    }

    fun getProgressColor(): Int {
        return progressColor
    }

    fun setProgressColor(progressColor: Int) {
        this.progressColor = progressColor
        invalidate()
    }

    fun getBackgroundColor(): Int {
        return backgroundColor
    }

    override fun setBackgroundColor(backgroundColor: Int) {
        this.backgroundColor = backgroundColor
        invalidate()
    }

    fun getStrokeWidth(): Float {
        return strokeWidth
    }

    fun setStrokeWidth(strokeWidth: Float) {
        this.strokeWidth = strokeWidth
        invalidate()
    }
}