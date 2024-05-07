import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../redux/action"

const Users = () => {
    const data = useSelector((state) => state.users)
    const users = data.users
    console.log(users)
    const dispatch = useDispatch()
    const handleLoadUsers = () => {
        dispatch(fetchUsers())
    }
    return (
        <>
            <div>
                <button onClick={handleLoadUsers}>Load Users</button>
                {users.map((user) => (
                    <div key={user.id}>{user.name} &emsp;  {user.username} &emsp;   {user.email}</div>
                ))}
            </div>
        </>
    )
}

export default Users