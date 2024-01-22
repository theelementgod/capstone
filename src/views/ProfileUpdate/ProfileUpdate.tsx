import { getDatabase, get, ref, child, update } from "firebase/database"
import Nav from "../../components/Nav/Nav"
import { useEffect, useState } from "react"

const ProfileUpdate = () => {

    interface IUser {
        username: string
    }

    const [user, setUser] = useState<IUser>({
        username: ''
    })

    const db = getDatabase()

    const dbRef = ref(db)
    get(child(dbRef, `users/${user.username}`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val())
        }else{
            console.log("No data available")
        }
    }).catch((error) => {
        console.error(error)
    })

    useEffect(() => {
        const fetchData = async () => {
          try {
            const snapshot = await get(child(dbRef, `users/${user.username}`));
            if (snapshot.exists()) {
              console.log(snapshot.val());
            } else {
              console.log("No data available");
            }
          } catch (error) {
            console.error(error);
          }
        };
    
        // Fetch data when the component mounts or when 'user.username' changes
        fetchData();
      }, [user.username, dbRef]);

    const createUserProfile = (username: string) => {
        const db = getDatabase()
        const myUser = {
          username: username,
        }
        update(ref(db, `users/${username}`), myUser)
      }

    const handleClick = () => {
        if (user.username.trim() !== '') {
            createUserProfile(user.username)
            console.log('Profile updated successfully')
        }else{
            console.log('Username cannot be empty')
        }
    }

    return (
        <>
            <Nav/>
            <div className="mx-auto text-center">
            <h2>Update info</h2>
            <input 
                onChange={((event) => {
                    setUser({...user, username: event.target.value})})}
                className='m-2' 
                type="text" 
                placeholder={`${user.username}`}
            />
            <button onClick={handleClick}>Submit</button>

            </div>
        </>
    )
}
export default ProfileUpdate