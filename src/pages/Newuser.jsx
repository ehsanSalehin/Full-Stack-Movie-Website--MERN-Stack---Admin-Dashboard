import "./newuser.css"

export default function Newuser() {
  return (
    <div className="newusers">
        <div className="h1 newUsrTitle"></div>
        <form className="newUserForm">
            <div className="newUserItem">
                <label>Username</label>
                <input type="text" placeholder="john" />
            </div>
            <div className="newUserItem">
                <label>Full name</label>
                <input type="text" placeholder="john smith" />
            </div>
            <div className="newUserItem">
                <label>Email</label>
                <input type="text" placeholder="john@gmail.com" /></div>
                <div className="newUserItem">
                <label>Password</label>
                <input type="text" placeholder="Password" />
            
            </div>

            <div className="newUserItem">
                <label>Phone</label>
                <input type="text" placeholder="70555555" />
            </div>

            <div className="newUserItem">
                <label>Address</label>
                <input type="text" placeholder="st. john's | canada" />
            </div>

            <div className="newUserItem">
                <label>Gender</label>
                <div className="newusergender">
                <input type="radio" name="gender" id="male" value="male"/>
                <label for=",male">Male</label>
                <input type="radio" name="gender" id="female" value="female"/>
                <label for="female">Female</label>
                <input type="radio" name="gender" id="others" value="others"/>
                <label for="others">Others</label></div>
            </div>
            <div className="newUserItem">
                <label>Active</label>
                <select className="newUserSelect" name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <button className="newUserB">Create</button>

            </div>
        </form>
    </div>
  )
}
