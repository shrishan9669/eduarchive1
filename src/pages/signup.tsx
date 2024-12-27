// import { useNavigate } from "react-router-dom"
// import { FaRegEye } from "react-icons/fa";
// import { FaRegEyeSlash } from "react-icons/fa";
// import { useState } from "react";
// import axios from "axios";
// import Loader from "../components/loader";
// export default function Signup(){
//     const[email,setEmail] = useState('');
//     const[password,setPassword] = useState('')
//     const[buffer,setBuf] = useState(false)
//     const[mssg,setMsg] = useState(''); 
//     const [state,setState] = useState('password');
//     const nav = useNavigate();
//     return (
//         <div className="w-screen h-[640px] bg-slate-200 flex justify-center items-center shadow-lg">
//             {/* left div */}
         
             
//                 <div className="flex flex-col  w-[60%] rounded-md shadow-lg bg-white p-10">
//                     <h1 className="font-bold mb-10 text-3xl font-sans">Create an account</h1>
//                     <div className="flex flex-col gap-7">
//                         <div className="flex gap-20  items-center">
//                         <label htmlFor="email" className="w-[10%] text-slate-500 text-lg">Email</label>
//                         <input
//                         onChange={(e)=>{
//                             setEmail(e.target.value);
//                         }}
//                         required type="text" id="email" className="p-2 w-[70%] rounded-md border border-green-800"/>
//                         </div>
               
//                         <div className="flex gap-20  items-center ">
//                         <label htmlFor="password" className="w-[10%]  text-lg text-slate-500">Password</label>
//                         <div className="flex items-center gap-2 w-[79%]">
//                         <input
//                         onChange={(e)=>{
//                             setPassword(e.target.value)
//                         }}
//                         required type={state} id="password" className="p-2 w-[88.6%] rounded-md border border-green-800"/>
//                         {state=='password'  ?  <FaRegEye onClick={()=>{
//                             setState('text');
//                          }} className="cursor-pointer text-xl"/>:<FaRegEyeSlash onClick={()=>{
//                             setState('password')
//                          }} className="cursor-pointer text-xl" />}
                        
//                         </div>
                       
//                         </div>
                        

//                         <div className="flex gap-20  items-center">
//                            <div className="w-[10%]"></div>
//                            <div className="w-[70%]">
//                               <button
//                               onClick={async()=>{
//                                setBuf(true)
//                                 try{
//                                     const user = await axios({
//                                         url:"http://localhost:3000/user/create",
//                                         method:"POST",
//                                         data:{
//                                             email:email,
//                                             password:password
//                                         }
//                                      })
//                                      setMsg(user.data.msg);
                                    
//                                 }
//                                 catch(err){
//                                     console.log("Error occured from frontendSide..->",err)
//                                 }
//                                 finally{
//                                     setBuf(false);
//                                 }
                                
//                               }}
//                               className={`px-7 ${buffer ? 
//                                 "bg-green-200":"bg-green-500 hover:bg-green-400"}  w-[100%]    py-3 rounded-lg text-white`} >{buffer ? <Loader/>:"Create"}</button>
//                            </div>
//                         </div>
//                         <div className="flex gap-20  items-center">
//                         <div className="w-[10%]"></div>
//                         <div className="w-[70%] flex gap-5 items-center">
//                             <span className="text-slate-400">Already have an account!</span>
//                             <button onClick={()=>{
//                                 nav('/login')
//                             }} className="px-7 hover:bg-blue-400 bg-blue-500 py-1 rounded-sm text-white" >Login</button>
//                             <span>{mssg}</span>

//                         </div>
//                         </div>
                    
//                     </div>
                 
//                 </div>
                 
            
//             {/* right div */}
           
//         </div>
//     )
// }
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import Loader from "../components/loader";

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buffer, setBuf] = useState(false);
  const [mssg, setMsg] = useState('');
  const[name,setName] = useState('')
  const [state, setState] = useState('password');
  const nav = useNavigate();

  return (
    <div className="w-full h-screen bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 flex justify-center items-center">
      <div className="flex flex-col w-full sm:w-[450px] bg-white rounded-lg shadow-lg p-8 space-y-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800">Create an Account</h1>
        <div className="space-y-6">
          {/* Name input  */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-600">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              id="name"
              className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your name"
            />
          </div>
          {/* Email Input */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-600">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              id="email"
              className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-gray-600">Password</label>
            <div className="flex items-center space-x-2">
              <input
                onChange={(e) => setPassword(e.target.value)}
                required
                type={state}
                id="password"
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your password"
              />
              {state === 'password' ? (
                <FaRegEye
                  onClick={() => setState('text')}
                  className="cursor-pointer text-gray-600 text-xl"
                />
              ) : (
                <FaRegEyeSlash
                  onClick={() => setState('password')}
                  className="cursor-pointer text-gray-600 text-xl"
                />
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-center">
            <button
              onClick={async () => {
                setBuf(true);
                try {
                  const user = await axios({
                    url: 'https://backend-s1z7.onrender.com/user/create',
                    method: "POST",
                    data: {
                      email: email,
                      password: password,
                      name:name
                    }
                  });
                  setMsg(user.data.msg);
                } catch (err) {
                  console.log("Error occurred from frontendSide..->", err);
                } finally {
                  setBuf(false);
                }
              }}
              className={`w-full py-3 rounded-lg text-white text-lg font-medium transition-all duration-300 ${buffer ? "bg-gray-300" : "bg-indigo-600 hover:bg-indigo-500"}`}
            >
              {buffer ? <Loader /> : "Create Account"}
            </button>
            <span>{mssg}</span>
          </div>

          {/* Login Link */}
          <div className="flex justify-center items-center space-x-2">
            <span className="text-sm text-gray-500">Already have an account?</span>
            <button
              onClick={() => nav('/login')}
              className="text-sm text-indigo-600 hover:text-indigo-500 font-semibold"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
