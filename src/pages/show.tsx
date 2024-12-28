import axios from "axios"
import { useState } from "react"
import { IoMdCheckmarkCircleOutline, IoMdDownload } from "react-icons/io";
import { MdDelete, MdPreview } from "react-icons/md";
import Loader from "../components/loader";
export default function Show(){
    const [subject,setSubject]  = useState('')
    const [semester,setSemester] = useState('')
    const [course,setCourse] = useState('')
    const [data,setData] = useState([])
    const[buf,setBuffer] = useState(false)
    const[buf1,setBuf1] = useState(false)

    const[right,SetRight] = useState(false)
    const[uploadCourse,setUploadcourse] = useState('')
    const[uploadsemester,setUploadSemester] = useState('')
    const [type,setType] = useState('')
    const [file,setFile] = useState<File | null>(null)
    
    async function handlefileupload(){
        if(!type || !uploadCourse || !uploadsemester || !subject){
            alert("Please select all fields!!")
            return ;
        }
        if(!file){
            alert("Please select a file");
            return ;
        }
        const formData = new FormData();
        const userid = localStorage.getItem('userid');
         console.log(file)
        formData.append('pdf',file);
        formData.append("type", type.toLowerCase());
        formData.append("course", uploadCourse.toLowerCase());
        formData.append("semester", uploadsemester);
        formData.append("subject", subject.toLowerCase());
        formData.append('customName',`${subject.toLowerCase() + (type == 'mst' ? 'mst':'')}`)
        formData.append('studentid',userid || "")

        for (let pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

       
       
        try{

          const response = await axios({
                url:'https://backend-s1z7.onrender.com/admin/pdfspost',
                method:"POST",
                data:formData,
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            })
            alert(`${response.data.msg } and Total Contributions are ${response.data.totalcontributions}`);
            SetRight(true)
            setTimeout(()=>{
                SetRight(false)
            },5000)
        }
        catch(err){
            console.error("Error uploading file:", err);
            alert("Error uploading file!");
        }
        finally{
             setBuf1(false)
        }
    }
   
    function handleclick(e:any){
       
        setCourse(e.target.innerText.toLowerCase());
    }

    const[userdata,setUserdata] = useState([])
    const[yourbuffer,setYourbuffer]  = useState(false)
    
    function CircularLoader()  {
        return (
          <div className="flex justify-center items-center ">
            <div className="w-10  border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
          </div>
        );
      };
      

    return (
        <div className="flex flex-col overflow-x-hidden min-h-screen">

        <div className="flex items-center justify-center gap-32 mx-10 p-10"> 
            {/* Course div */}
            <div className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-lg">
  <span className="text-2xl font-bold font-serif text-white mb-6">
    Courses:
  </span>
  <div className="grid grid-cols-2 gap-6">
    <button
      onClick={handleclick}
      className="py-2 px-5 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300"
    >
      BCA
    </button>
    <button
      onClick={handleclick}
      className="py-2 px-5 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300"
    >
      MCA
    </button>
    <button
      onClick={handleclick}
      className="py-2 px-5 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300"
    >
      MSC
    </button>
    <button
      onClick={handleclick}
      className="py-2 px-5 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300"
    >
      MTECH
    </button>
  </div>
</div>
            {/* Semester div */}
            <div className="flex flex-col items-center bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-lg">
  <span className="text-2xl font-bold font-serif text-white mb-4">
    Semester:
  </span>
  <input
    onChange={(e) => setSemester(e.target.value)}
    type="number"
    className="w-full max-w-sm border-2 border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
    placeholder="Enter semester number..."
  />
</div>
            
        </div>

        <div className="flex items-start gap-10 p-6">
  {/* Left Section */}
  <div className="w-[30%] ml-10 bg-gradient-to-r from-gray-300 to-gray-400 p-6 rounded-lg shadow-lg flex flex-col">
    <div className="mb-4">
      <span className="text-lg font-bold text-gray-700">{"Subject: " + course}</span>
      <br />
      <span className="text-lg font-bold text-gray-700">{"Semester: " + semester}</span>
    </div>
    <button
      onClick={async () => {
        if (!semester || !course) {
          alert("Please fill course and semester fields!");
        } else {
          setBuffer(true);
          try {
            const data = await axios({
              url: `https://backend-s1z7.onrender.com/admin/findpdfs?semester=${Number(semester)}&course=${course}`,
              method: "GET",
            });
            console.log(data.data);
            if (data.data) {
              setData(data.data.all);
            }
          } catch (err) {
            console.error("Error in frontend while getting PDFs! ->", err);
            alert("Failed to fetch PDFs. Please try again later.");
          } finally {
            setBuffer(false);
          }
        }
      }}
      className={`text-white py-3 ${
        buf ? "bg-blue-400" : "bg-green-500 hover:bg-green-400"
      } rounded-full font-bold transition duration-300`}
    >
      {buf ? <Loader /> : "Find Papers"}
    </button>
  </div>

  {/* Right Section */}
  <div className="w-[70%] mr-10 bg-gradient-to-r from-gray-300 to-gray-400 p-6 rounded-lg shadow-lg grid grid-cols-2 gap-6">
    {/* Type Selection */}
    <div className="flex items-center gap-6" title="Type of paper ">
      <label htmlFor="type" className="text-gray-700 font-medium">
        Type (sem or mst):
      </label>
      <select
        id="type"
        onChange={(e) => setType(e.target.value.toLowerCase())}
        className="border border-gray-400 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      >
        <option value="none">None</option>
        <option value="mst">MST</option>
        <option value="sem">SEM</option>
      </select>
    </div>

    {/* Semester Input */}
    <div className="flex items-center gap-6" title="Semester number">
      <label htmlFor="semester" className="text-gray-700 font-medium">
        Semester:
      </label>
      <input
        type="number"
        id="semester"
        max="10"
        placeholder="Enter semester..."
        onChange={(e) => setUploadSemester(e.target.value)}
        className="border border-gray-400 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
    </div>

    {/* Course Selection */}
    <div className="flex items-center gap-6" title="Select course">
      <label htmlFor="course" className="text-gray-700 font-medium">
        Course:
      </label>
      <select
        id="course"
        onChange={(e) => setUploadcourse(e.target.value.toLowerCase())}
        className="border border-gray-400 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      >
        <option value="none">None</option>
        <option value="bca">BCA</option>
        <option value="mca">MCA</option>
        <option value="msc">MSC</option>
        <option value="mtech">MTECH</option>
      </select>
    </div>

    {/* Subject Selection */}
    <div className="flex items-center gap-6" title="Select subject">
      <label htmlFor="subject" className="text-gray-700 font-medium">
        Subject:
      </label>
      <select
        id="subject"
        
        onChange={(e) => {
          console.log(e.target.value)
          setSubject(e.target.value.toLowerCase())
        }}
        className="border border-gray-400 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      >
        <option value="none">None</option>
        <option value="dsa">DSA</option>
        <option value="mis">MIS</option>
        <option value="accounts">ACCOUNTS</option>
        <option value="dm">DM</option>
        <option  value="stats">STATS</option>
      </select>
    </div>

    {/* File Upload */}
    <div className="flex items-center gap-6">
      <label htmlFor="file" className="text-gray-700 font-medium">
        Select PDF:
      </label>
      <input
        type="file"
        id="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
        className="mt-2 border border-gray-400 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
    </div>

    {/* Upload Button */}
    <div className="flex items-center gap-6 mt-4">
      <button
        onClick={() => {
          setBuf1(true);
          handlefileupload();
        }}
        className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300"
      >
        {buf1 ? <Loader /> : "Upload File"}
      </button>
      {right && (
        <IoMdCheckmarkCircleOutline className="text-green-600 text-3xl" />
      )}
    </div>
  </div>
</div>

<div className="mt-6 flex justify-start">
  <button
    onClick={async () => {
      setYourbuffer(true);
      try {
        const data = await axios({
          url: `https://backend-s1z7.onrender.com/user/getall?studentid=${localStorage.getItem("userid")}`,
          method: "GET",
        });

        if (data.data.data) {
           
          console.log(data.data.data);
          
          setUserdata(data.data.data);
          
        }
       
      } catch (err) {
        alert(err);
      } finally {
        setYourbuffer(false);
      }
    }}
    className="py-3 px-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-full text-white font-bold shadow-lg hover:from-orange-600 hover:to-red-700 transition duration-300 ml-10"
  >
    {yourbuffer ? <CircularLoader /> : "Your Papers"}
  </button>
</div>

     
     <div className="border border-t-0 border-b-2 border-l-0 border-r-0 mt-20">

     </div>

     {/* Users cards */}
     <div className="flex flex-col mx-14 gap-10 mt-7 ">
        <span className="text-2xl bg-slate-300 w-72 p-2 rounded-lg font-bold font-serif"><span className="text-blue-950 underline">Your</span> docs stay here..</span>
       
        <div className="flex gap-24">
        {userdata.map((each:any)=>{
            return <Card subject={each.subject} pdfid={each.id} type={each.type}/>
        
        })}
        </div>
       
     </div>


       {/* Cards div */}
        <div className="pl-14  gap-7  mt-10 py-5 flex flex-col">
        <span className="text-2xl bg-slate-300 w-72 p-2 rounded-lg font-bold font-serif"><span className="text-blue-950 underline">All</span> docs stay here..</span>
        <div className="flex gap-24">
        {data.length > 0 ?  data.map((e:any)=>{
                    return <div key={e.id}>
                       <Card subject={e.subject} type={e.type} pdfid={e.id} pdf={e.pdf}/>
                    </div>
                }):''}
                
        </div>
            
               
               {/* {data.length > 0  ?  <div className="flex justify-center w-screen mt-10">
            <button className="font-bold bg-green-400 hover:bg-green-300 py-2 px-10 rounded-lg">Add pdfs +</button>
         </div>: ''} */}
       
        
        </div>
        </div>
    )
}
            
function Card({ subject, pdfid, type }: any) {
    const [pdfurl, setPdfurl] = useState('');
    const [preview, setPreview] = useState(false);
    const [delbuffer, setDelBuffer] = useState(false);
  
    function handlePreview(name: any) {
      const path = 'https://backend-s1z7.onrender.com/pdfpreview';
      setPdfurl(`${path}/${name}`);
      setPreview(true);
    }
  
    function Circularloader() {
      return (
        <div className="flex justify-center items-center h-screen">
          <div className="relative">
            <div className="w-16 h-16 border-8 border-gray-800 border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute top-2 left-2 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-gray-300 rounded-sm"></div>
            </div>
          </div>
        </div>
      );
    }
  
    return (
      <div className="w-64 h-80 shadow-lg rounded-xl flex flex-col bg-gradient-to-b from-white to-gray-100 border border-gray-200 hover:shadow-2xl transform hover:scale-105 transition duration-300">
        <div
          className={`h-48 rounded-t-xl flex flex-col justify-center items-center ${
            type === 'mst' ? 'bg-yellow-400' : 'bg-blue-500'
          } text-white text-center`}
        >
          {delbuffer ? (
            <Circularloader />
          ) : (
            <MdDelete
              onClick={async () => {
                if (delbuffer) {
                  setDelBuffer(false);
                } else setDelBuffer(true);
                try {
                  const res1 = await axios({
                    url: `https://backend-s1z7.onrender.com/user/delpdf?docid=${pdfid}`,
                    method: 'DELETE',
                  });
  
                  const res2 = await axios({
                    url: `https://backend-s1z7.onrender.com/user/reduceContri?userid=${localStorage.getItem('userid')}`,
                    method: 'GET',
                  });
  
                  alert(
                    `${res1.data.msg} and updated contributions are ${res2.data.totalcontributions}`
                  );
                } catch (err) {
                  alert(`Error while deleting-> ${err}`);
                } finally {
                  setDelBuffer(false);
                }
              }}
              className="mb-3 hover:text-red-600 cursor-pointer text-3xl transition duration-300"
              title="Delete Document"
            />
          )}
          <span className="font-bold text-lg">{subject.toUpperCase()}</span>
          <span className="text-sm mt-1">
            {"Type: "}
            <span className="font-medium">{type}</span>
          </span>
        </div>
        <div className="flex justify-around items-center h-24 bg-gray-50 rounded-b-xl">
          <MdPreview
            onClick={() => {
              handlePreview(`${subject + (type === 'mst' ? 'mst' : '') + pdfid + '.pdf'}`);
            }}
            title="See Preview"
            className="text-2xl text-gray-600 cursor-pointer hover:text-blue-500 transition duration-300"
          />
          <IoMdDownload
            title="Download"
            onClick={async () => {
              try {
                const response = await axios({
                  url: `https://backend-s1z7.onrender.com/admin/pdfdownload?pdfid=${pdfid}`,
                  method: 'GET',
                  responseType: 'blob',
                });
  
                const blob = new Blob([response.data], { type: 'application/pdf' });
  
                // Create a download link and trigger the download
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = `${subject}.pdf`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              } catch (err) {
                console.error('Error while downloading on Frontend->', err);
              }
            }}
            className="text-2xl text-gray-600 cursor-pointer hover:text-green-500 transition duration-300"
          />
        </div>
  
        {preview && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white w-3/4 h-3/4 rounded-lg shadow-lg relative">
              <button
                className="absolute top-4 right-4 bg-red-600 text-white font-bold px-4 py-2 rounded-full hover:bg-red-700 transition duration-300"
                onClick={() => setPreview(false)}
              >
                X
              </button>
              <iframe
                src={pdfurl}
                className="w-full h-full rounded-lg"
                frameBorder="0"
                title="PDF Preview"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    );
  }
  
