

const Form = () => {
    return (
        <form>
            <label>Your name</label>
            <input type="text" name="user-name"/>
            <label>Email address</label>
            <input type="text" name="user-email"/>
            <label>Phone number</label>
            <input type="text" name="user-phonenumber"/>
            <label>Subject</label>
            <input type="text" name="subject"/>
            <label>Message</label>
            <input type="text" name="message"/>
            <input type="submit" />

        </form>
    )
}

export default Form
