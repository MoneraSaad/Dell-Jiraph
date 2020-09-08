import React, { useState } from 'react';
import './UserList.css'


export default props => {

    const { user, setUsers } = props;

    const [edit, setEdit] = useState(false)


    return (


        <form id={user.id} className="TableBody" onSubmit={(e => onSave(e, user.id))} >

            <input name="name" disabled={!edit} type="text" defaultValue={user.name} ></input>
            <input disabled={!edit} type="email" name='email' defaultValue={user.email}></input>
            <select disabled={!edit} type="text" name='role' defaultValue={user.role}>
                <option value="Admin">Admin</option>
                <option value="QA manager">QA manager</option>
                <option value="TOP manager">TOP manager</option>
            </select>

            <div className="item">
                <input disabled={!edit} className={edit ? 'inset' : ''} name='password' type="password" placeholder='Password'></input>
            </div>
            <div className="item">
                {!edit ?
                    <button className="edit__Btn" onClick={e => { onEdit(e, user.id) }}>Edit</button>
                    :
                    <button className="save__Btn" type='submit'>Save</button>
                }
                <button onClick={e => { deleteUser(e, user.id) }}>Delete</button>
            </div>
        </form>



    )


    function onSave(e, id) {
        e.preventDefault()
        setEdit(false)

        let { name, email, password, role } = e.target.elements;

        name = name.value;
        email = email.value;
        role = role.value;
        password = password.value;

        e.target.elements.password.value = '';


        fetch('/api/users/editUser', {
            method: 'PUT',
            body: JSON.stringify({ id, name, email, role, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.success = true) {
                    alert('update sucsses');
                }
                else if (data.success = false) {
                    alert(data.error)
                }
            })


    }


    function onEdit(e) {
        e.preventDefault();
        setEdit(true)

    }


    function deleteUser(e, id) {
        e.preventDefault();
        if (!window.confirm('Are you sure you want to delete this User?')) {
            alert("Not Deleted")
            return;
        }
        fetch('/api/users/deleteUser', {
            method: 'Delete',
            body: JSON.stringify({ id }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.success = true) {
                    setUsers(data.info.table);
                    return alert('Deleted sucsses')
                }
                else if (data.success = false) {
                    alert(data.error)
                }

            })

    }
}