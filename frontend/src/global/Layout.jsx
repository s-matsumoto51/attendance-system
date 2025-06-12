import { Route, Routes, useLocation } from "react-router-dom";
import UsersList from "../pages/UsersList";
import { UserAttend } from "../pages/UserAttend";
import { UserForm } from "../pages/UserForm";
import { Login } from "../pages/Login";
import { Header } from "../Header";

export const Layout =({ users, fetchUsers, endUrl, setEndUrl })=> {
  const location = useLocation();
  const showHeader = location.pathname !== '/';

  return (
    <>
      {showHeader && <Header endUrl={endUrl} />}
      <Routes>
        <Route path='/' element={<Login users={users} setEndUrl={setEndUrl} />} />
        <Route path='/users' element={<UsersList users={users} fetchUsers={fetchUsers} />} />
        <Route path={`/attend/:email`} element={<UserAttend users={users} fetchUsers={fetchUsers} />} />
        <Route path='/userform' element={<UserForm fetchUsers={fetchUsers} />} />
      </Routes>
    </>
  );
}
