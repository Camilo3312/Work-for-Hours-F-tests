import React from 'react';
import './UserInfo.css';

export const UserInfo = () => {
  return (
    <div className='user_info'>
      <img className='admin_user_photo' src="https://cdn.pixabay.com/photo/2021/09/12/08/49/headset-6617715_960_720.png" alt="user_photo" />
      <p className='ellipsis'>Cactus</p>
      <p className='ellipsis'>Fantasmita</p>
      <p className='ellipsis'>FantasmistaCat27@gmail.com</p>
      <p>10</p>
      <select className='cb_state_user'>
        <option value="Habilitado">Habilitado</option>
        <option value="Suspendido 3 Dias" selected>Suspendido 3 Dias</option>
        <option value="Inhabilitado">Inhabilitado</option>
      </select>
      <input type="checkbox" className='cb_confirm_changes'/>
    </div>
  )
}
