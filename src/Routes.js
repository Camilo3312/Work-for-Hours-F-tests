import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Chat } from 'Modules/Main/Chat/Chat'
import { Index } from 'Modules/Main/Index/Index'
import { Login } from 'Modules/Main/Login/Login'
import { Registry } from 'Modules/Main/Registry/Registry'
import { Users } from 'Modules/Admin/Users/Users'
import { Profile } from 'Modules/Main/Profile/Profile'
import { InfoService } from 'Modules/Main/InfoService/InfoService'
import { AddService } from 'Modules/Main/AddService/AddService'
import { EditService } from 'Modules/Main/EditService/EditService'
import { Claim } from 'Modules/Main/Claim/Claim'
import { Dashboard } from 'Modules/Main/Dashboard/Dashboard'
import { Publications } from 'Components/Layout/Publications/Publications'
import { Saved } from 'Components/Layout/Saved/Saved'
import { UserProvider } from 'Context/UserContext'
import { SearchService } from 'Modules/Main/SearchService/SearchService'

export const AllRoutes = () => {
  
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/registry' element={<Registry />} />
          <Route path='/infoservice' element={<InfoService />} />
          <Route path='/service/add' element={<AddService />} />
          <Route path='/service/edit' element={<EditService />} />
          <Route path='/dashboard/*' element={<Dashboard />} >
            <Route path='publications' element={<Publications />} />
            <Route path='saved' element={<Saved />} />
          </Route>
          <Route path='/claim' element={<Claim />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/search/q/:question' element={<SearchService />} />
          <Route path='/AdminUsers' element={<Users />} />
          <Route path='*' element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </UserProvider>

  )
}