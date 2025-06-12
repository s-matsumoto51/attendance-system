import axios from "axios";
import { useEffect, useState } from "react";

export const useUsers =()=>{
    const [users,setUsers] = useState([]);
    const [error,setError] = useState(null);

    const fetchUsers = async ()=>{
        try{
            const response = await axios.get("http://localhost:5273/api/users");
            setUsers(response.data)
        }catch(err){
            console.log(err)
            setError(err)
        }
    }

    useEffect(()=>{
        fetchUsers();
    },[]);

    

    return{users,error,fetchUsers}
}

