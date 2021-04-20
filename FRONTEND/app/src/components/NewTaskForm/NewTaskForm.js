

const NewTaskForm = () => {
    return (
        <form>
            <label>Task</label>
            <input type="text" name="task-desc"/>
            <label>Type of Task</label>
            <input type="text" name="task-type"/>
            <label>Location</label>
            <input type="text" name="task-location"/>
            <label>Estimated duration</label>
            <input type="text" name="task-duration"/>
            <label>Deadline</label>
            <input type="text" name="task-deadline"/>
            <label>Notes</label>
            <input type="text" name="task-notes"/>
            <label>Assigned</label>
            <input type="checkbox"></input>
            <label>Completed</label>
            <input type="checkbox"></input>

            <label>Task setter</label>
            <input type="text" name="task-setter"/>

            <input type="submit"/>
        </form>
    )
}

export default NewTaskForm