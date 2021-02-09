import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('')
    const [day, setDayTime] = useState('')
    const [remainder, setReminder] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!text){
            alert('Please Add Task')
            return
        }
        onAdd({text, day, remainder})

        setText('')
        setDayTime('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit = {onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task'
                value= {text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text' placeholder='Add Day and Time'
                value= {day} onChange={(e) => setDayTime(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox'
                checked = {remainder}
                value= {remainder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input className = 'btn btn-block' type='submit' value='Save Task'/>
        </form>
    )
}

export default AddTask
