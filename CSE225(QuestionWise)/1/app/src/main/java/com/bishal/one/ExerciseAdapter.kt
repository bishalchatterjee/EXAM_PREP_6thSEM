package com.bishal.one

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.ImageView
import android.widget.ListAdapter
import android.widget.TextView

class ExerciseAdapter(context: Context, private val exercises: List<Exercise>) : BaseAdapter(),
    ListAdapter {

    private val inflater = LayoutInflater.from(context)

    override fun getCount(): Int = exercises.size

    override fun getItem(position: Int): Exercise = exercises[position]

    override fun getItemId(position: Int): Long = position.toLong()

    override fun getView(position: Int, convertView: View?, parent: ViewGroup?): View {
        val view: View = convertView ?: inflater.inflate(R.layout.exercise_list_item, parent, false)
        val exercise = getItem(position)

        val titleTextView = view.findViewById<TextView>(R.id.exercise_title_text_view)
        val iconImageView = view.findViewById<ImageView>(R.id.exercise_icon_image_view)

        titleTextView.text = exercise.title
        iconImageView.setImageResource(exercise.iconResourceId)

        return view
    }
}
