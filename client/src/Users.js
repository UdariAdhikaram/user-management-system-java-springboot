import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Axios from 'axios';
import { useEffect, useState } from "react";

const Users = () => { // functional component(Users) - parent component
    const [users, setUsers] = useState([]);
    const [submitted, setSubmited] = useState(false);
    const [isEdit, setisEdit] = useState(false);
    const [selectedUser, setselectedUser] = useState({});


    useEffect(() => {
        getUsersData();
    }, []);

    const getUsersData = () => {
        Axios.get('http://localhost:8080/api/v1/getusers')
            .then(response => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    };

    const addUser = (data) =>{
        setSubmited(true);

        const payload = {
            id: data.id,
            name: data.name,
        }
        Axios.post('http://localhost:8080/api/v1/createuser', payload)
            .then(() => {
                console.log('success')
                getUsersData();
                setSubmited(false);
                isEdit(false);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const updateUser = (data) => {
        setSubmited(true);

        const payload = {
            id: data.id,
            name: data.name,
        }

        Axios.put('http://localhost:8080/api/v1/updateuser', payload)
            .then(() => {
                console.log('success')
                getUsersData();
                setSubmited(false);
                isEdit(false);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const deleteUser = (data) => {
        setSubmited(true);

        Axios.delete(`http://localhost:8080/api/v1/deleteuser/${data.id}`)
            .then(() => {
                console.log('success')
                getUsersData();
                setSubmited(false);
                isEdit(false);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <Box
            sx={{
                width: 'calc(100% - 100px)',
                margin: 'auto',
                marginTop: '100px'
            }}
        >
            <UserForm 
                addUser={addUser}
                updateUser={updateUser}
                submitted={submitted}
                data={selectedUser}
                isEdit={isEdit}
                />
            <UsersTable 
                rows={users}
                selectedUser={data =>{
                    setselectedUser(data);
                    setisEdit(true);
                }}
                deleteUser={data => window.confirm('Are you sure?') && deleteUser(data)} />
        </Box> //child components
    );
}

export default Users;