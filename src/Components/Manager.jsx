import {React, useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const [url, seturl] = useState('');
  const [user, setuser] = useState('');
  const [password, setpassword] = useState('');
  const [flag, setflag] = useState(0);
  const [passwords, setpasswords] = useState([]);

  useEffect(() => {
    let newp = JSON.parse(localStorage.getItem('passwords'));
    if(newp){
      setpasswords(newp);
    }
  }, [])
  

  const changeurl = (e)=>{
    seturl(e.target.value);
  }
  const changeuser = (e)=>{
    setuser(e.target.value);
  }
  const changepass = (e)=>{
    setpassword(e.target.value);
  }
  const changeFlag = ()=>{
    let f = !flag;
    setflag(f);
  }
  const Submit = ()=>{
    let newp = [...passwords];
    newp.push({URL: url, User: user, Password: password, Id: uuidv4()});
    setpasswords(newp);
    localStorage.setItem('passwords', JSON.stringify(newp));
    seturl('');
    setuser('');
    setpassword('');
  }
  const deleteItem = (id)=>{
    let c = confirm("Do you really want to delete?");
    if(c){
      let newp = passwords.filter((e)=> e.Id !== id);
      setpasswords(newp);
      localStorage.setItem('passwords', JSON.stringify(newp));
    }
  }
  const editItem = (id)=>{
      let c = passwords.filter((e)=>e.Id === id)[0];
      let newp = passwords.filter((e)=> e.Id !== id);
      seturl(c.URL);
      setuser(c.User);
      setpassword(c.Password);
      setpasswords(newp);
  }
  const copyItem = (text, str)=>{
    toast.success(`${str} copied successful`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  }
  return (
    <>
    <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={true}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    transition= "Bounce"
    />
    <ToastContainer />
    <div className="flex flex-col justify-around my-3  py-4 gap-5">
        <div className="websiteLink">
            <input type="text" className="w-full rounded-full outline-none border-2 border-green-500 py-1 px-2" placeholder='Enter Website URL' value={url} onChange={changeurl}/>
        </div>
        <div className="userAndPassword flex justify-between gap-4">
            <input type="text" className="rounded-full outline-none border-2 border-green-500 py-1 px-2 w-[50%]" placeholder='Enter Username' value={user} onChange={changeuser}/>
            <div className='w-[50%] relative'>
                <input type={(!flag)?"password":"text"} className="w-full rounded-full outline-none border-2 border-green-500 py-1 px-2" placeholder='Enter Password' value={password} onChange={changepass}/>
                <button className="eye absolute top-[50%] translate-y-[-40%] right-2" onClick={changeFlag}>{(!flag)?<span className="material-symbols-outlined">visibility
                </span>: <span className="material-symbols-outlined">visibility_off
                </span>}</button>
            </div>
        </div>
        <button className="save bg-green-500 max-w-max mx-auto px-4 py-2 rounded-full flex justify-around items-center gap-2" onClick={Submit}>
          <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover">
          </lord-icon>
          Save</button>
    </div>
    <div className=''>
      <h1 className='font-bold text-xl text-green-600 mb-2'>Your Passwords:</h1>
      {(passwords.length == 0) && <div>No Passwords to show</div>}
      {(passwords.length != 0) && <table className="table-auto w-full text-center rounded-md overflow-hidden">
        <thead className="bg-green-600">
          <tr>
            <th className='py-1'>Website URL</th>
            <th className='py-1'>User Name</th>
            <th className='py-1'>Password</th>
            <th className='py-1'>Actions</th>
          </tr>
        </thead>
        <tbody className='bg-green-200'>
          {passwords.map((e)=>{
            return <tr key={e.User} className='border-b border-black'>
              <td className='py-2'>
                <div className="flex justify-center items-center gap-1">
                  <span><a href={"https://" + e.URL} target='_blank'>{e.URL}</a></span>
                  <div className='cursor-pointer' onClick={()=>{copyItem(e.URL, "Url")}}>
                    <lord-icon src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover"
                     style = {{"height": "25px", "width":"25px", "paddingTop":"7px"}}>
                    </lord-icon>
                  </div>
                </div>
              </td>
              <td className='py-2'>
                <div className="flex justify-center items-center gap-1">
                  <span>{e.User}</span>
                  <div className='cursor-pointer' onClick={()=>{copyItem(e.User, "User Name")}}>
                    <lord-icon src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover"
                     style = {{"height": "25px", "width":"25px", "paddingTop":"7px"}}>
                    </lord-icon>
                  </div>
                </div>
              </td>
              <td className='py-2'>
                <div className="flex justify-center items-center gap-1">
                  <span>{e.Password}</span>
                  <div className='cursor-pointer' onClick={()=>{copyItem(e.Password, "Password")}}>
                    <lord-icon src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover"
                     style = {{"height": "25px", "width":"25px", "paddingTop":"6px"}}>
                    </lord-icon>
                  </div>
                </div>
              </td>
              <td className='py-2'>
                <div className="flex justify-center items-center gap-2">
                  <div className='cursor-pointer' onClick={()=>{editItem(e.Id)}}>
                    <lord-icon src="https://cdn.lordicon.com/gwlusjdu.json" trigger="hover"
                     style = {{"height": "20px", "width":"20px", "paddingTop":"6px"}}>
                    </lord-icon>
                  </div>
                  <div className='cursor-pointer' onClick={()=>{deleteItem(e.Id)}}>
                    <lord-icon src="https://cdn.lordicon.com/skkahier.json" trigger="hover"
                     style = {{"height": "20px", "width":"20px", "paddingTop":"6px"}}>
                    </lord-icon>
                  </div>
                </div>
              </td>
            </tr>
          })}
        </tbody>
      </table>}
    </div>
    </>
  )
}

export default Manager
