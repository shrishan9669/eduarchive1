// import axios from "axios";
// import { useState } from "react";
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom"
// import Loader from "../components/loader";

// export default function Login(){
//     const nav = useNavigate();
//     const[email,setEmail] = useState('');
//     const[msg,setMsg] = useState('')
//     const[buffer,setBuf] = useState(false)
//     const[password,setPassword] = useState('');
//     const [state,setState] = useState('password');
//     return (
//         <div className="w-screen h-[640px] bg-slate-200 flex justify-center items-center shadow-lg">
//             {/* left div */}
            
             
//                 <div className="flex flex-col  w-[60%] h-auto rounded-md shadow-lg bg-white p-10">
//                     <h1 className="font-bold mb-10 text-3xl font-sans">Login</h1>
//                     <div className="flex flex-col gap-7">
//                         <div className="flex gap-20  items-center">
//                         <label htmlFor="email" className="w-[10%] text-slate-500 text-lg">Email</label>
//                         <input 
//                         onChange={(e)=>{
//                             setEmail(e.target.value)
//                         }}
//                         type="text" id="email" className="p-2 w-[70%] rounded-md border border-green-800"/>
//                         </div>
               
//                         <div className="flex gap-20  items-center ">
//                         <label htmlFor="password" className="w-[10%]  text-lg text-slate-500">Password</label>
//                         <div className="flex  items-center gap-2 w-[79%]">
//                         <input
//                         onChange={(e)=>{
//                             setPassword(e.target.value)
//                         }}
//                         required type={state} id="password" className="p-2 w-[88.5%] rounded-md border border-green-800"/>
//                         {state=='password'  ?  <FaRegEye onClick={()=>{
//                             setState('text');
//                             }} className="cursor-pointer text-xl"/>:<FaRegEyeSlash onClick={()=>{
//                             setState('password')
//                             }} className="cursor-pointer text-xl" />}
                        
//                         </div>
                        
//                         </div>
                                                
                        

//                         <div className="flex gap-20  items-center">
//                            <div className="w-[10%]"></div>
//                            <div className="w-[70%]">
//                               <button typeof="submit"
//                               onClick={async()=>{
//                                  setBuf(true)
                                    
//                                  try{
//                                     const find = await axios({
//                                         url:"http://localhost:3000/user/login",
//                                         method:"POST",
//                                         data:{
//                                             email:email,
//                                             password:password
//                                         }
//                                      })

//                                      setMsg(find.data.msg);
//                                      if(find.data.msg == 'User found!!'){
//                                         localStorage.setItem('userid',find.data.id)
//                                         localStorage.setItem('email',email)
//                                           nav('/show')
//                                      }
                                     
//                                  }
//                                  catch(err){
//                                     console.log("Error in frontend while.login->",err);
//                                  }
//                                  finally{
//                                     setBuf(false)
//                                  }
                                 
                                 
//                               }}
//                               className={`px-7 ${buffer ? 
//                                 "bg-green-200":"bg-green-500 hover:bg-green-400"}  w-[100%]    py-3 rounded-lg text-white`} >{buffer ? <Loader/>:"Login"}</button>
//                            </div>
//                         </div>
//                         <div className="flex gap-20  items-center">
//                         <div className="w-[10%]"></div>
//                         <div className="w-[70%] flex gap-5 items-center">
//                             <span className="text-slate-400">Don't have an account yet?</span>
//                             <button onClick={()=>{
//                                 nav('/signup');
//                             }} className="px-7 hover:bg-blue-400 bg-blue-500 py-1 rounded-sm text-white" >Sign up</button>
//                             <span className="animate-bounce text-pink-400">{msg}</span>

//                         </div>
//                         </div>
                    
//                     </div>
                 
//                 </div>
                 
            
//             {/* right div */}
          
//         </div>
//     )
// }
import axios from "axios";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loader from "../components/loader";

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [buffer, setBuf] = useState(false);
  const [password, setPassword] = useState("");
  const [state, setState] = useState("password");

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex justify-center items-center">
      {/* Container */}
      <div className="flex flex-col md:flex-row w-[90%] md:w-[60%] bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center items-center w-[40%] bg-gradient-to-t from-purple-600 to-blue-500 text-white p-10">
          <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-center">
            Log in to access past year's question papers and enhance your
            academic preparation.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-full md:w-[60%] p-8 md:p-14">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Login</h1>
          <div className="flex flex-col gap-6">
            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-600 text-lg">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-gray-600 text-lg">
                Password
              </label>
              <div className="relative">
                <input
                  type={state}
                  id="password"
                  placeholder="Enter your password"
                  className="p-3 rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {state === "password" ? (
                  <FaRegEye
                    className="absolute top-3 right-3 text-gray-500 cursor-pointer"
                    onClick={() => setState("text")}
                  />
                ) : (
                  <FaRegEyeSlash
                    className="absolute top-3 right-3 text-gray-500 cursor-pointer"
                    onClick={() => setState("password")}
                  />
                )}
              </div>
            </div>

            {/* Login Button */}
            <button
              className={`w-full py-3 rounded-lg text-white font-bold transition-all duration-300 ${
                buffer
                  ? "bg-blue-200"
                  : "bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-400"
              }`}
              onClick={async () => {
                setBuf(true);
                try {
                  const find = await axios({
                    url: "https://backend-s1z7.onrender.com/user/login",
                    method: "POST",
                    data: {
                      email: email,
                      password: password,
                    },
                  });

                  setMsg(find.data.msg);
                  if (find.data.msg === "User found!!") {
                    localStorage.setItem("userid", find.data.id);
                    localStorage.setItem("email", email);
                    nav("/show");
                  }
                } catch (err) {
                  console.error("Error in frontend while logging in:", err);
                } finally {
                  setBuf(false);
                }
              }}
            >
              {buffer ? <Loader /> : "Login"}
            </button>

            {/* Sign Up Section */}
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-500">
                Don't have an account yet?
              </span>
              <button
                className="px-5 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-bold transition-all duration-300"
                onClick={() => nav("/signup")}
              >
                Sign Up
              </button>
            </div>

            {/* Message */}
            <div className="text-center text-pink-600 font-medium animate-bounce">
              {msg}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
