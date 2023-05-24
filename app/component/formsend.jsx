"use client"

function Formsend() {
    return (
        <div className="formsend" id="formapi">
            <h1 className="text-3xl text-white">Form</h1>
            <div>
                <form className="formemail" action="https://formsubmit.co/78be1319d7866fec3a47f6493a2e85f7" method="POST">
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <textarea type="text" name="message" placeholder="Message" required />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Formsend