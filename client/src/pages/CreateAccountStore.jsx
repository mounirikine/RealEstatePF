import Footer from "../components/Footer"
import Header from "../components/Header"

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logof from "../assets/logof.png";
import { toast } from "react-toastify";
import { FaCircleCheck } from "react-icons/fa6";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from "../firebase";
const CreateAccountStore = ({userInfo}) => {

const navigate= useNavigate()
  const [files,setFiles] = useState([])
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [porcentageProgress, setPorcentageProgress] = useState(0);



  
const [formData, setFormData] = useState( {
  imageUrls: [],
  title: "",
  description: "",
  userName:userInfo.username,
  userRef: userInfo._id,
  userNumber:userInfo.phoneNumber
});
console.log(formData)

  const handleImageSubmit = (e)=>{
    if(files.length >0 && files.length + formData.imageUrls.length < 2){
        const promises = [];
        for (let i = 0 ; i < files.length ; i++){
          setUploading(true);
            promises.push(storeImage(files[i]))
        }
        Promise.all(promises).then((urls)=>{
          setFormData({...formData,imageUrls:formData.imageUrls.concat(urls)})

          setImageUploadError(false);
          setUploading(false);

        }).catch((err)=>{
          setImageUploadError('Image upload failed (2 mb max per image)')
          setUploading(false);
        });
       
    }else{
      setImageUploadError('You can only upload 6 images per listing');
      setUploading(false);
    }
}


const storeImage = async(file)=>{
  return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
          setPorcentageProgress(progress)
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
             console.log(downloadURL)
          });
         
        }
      );
    });
}
const handleRemoveImage = (index) => {
  setFormData({
    ...formData,
    imageUrls: formData.imageUrls.filter((_, i) => i !== index),
  });
};


const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true)

  try {


    const access_token = document.cookie.split('; ').find(row => row.startsWith('access_token=')).split('=')[1];


    const res = await fetch('http://localhost:4000/api/store/create-store', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
       
      },
      body: JSON.stringify({
        ...formData,
        access_token
      }),
    });

    const data = await res.json();
    toast.success(data)
    
    navigate(`/store`)

  } catch (error) {
    console.log(error);
  }

  setLoading(false)
};
const handleChange = (e) => {
  if (e.target.id === 'furnished' || e.target.id === 'offer') {
    setFormData({
      ...formData,
      [e.target.id]: e.target.checked,
    });
  } else if (
    e.target.type === 'number' ||
    e.target.type === 'text' ||
    e.target.type === 'textarea'
  ) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  } else if (e.target.id === 'country') {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  } else if (e.target.id === 'type') {
    // Handle select element
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }
};

  return (
    <>
       <Header userInfo={userInfo} /> 
      <div className=" flex items-center dark:bg-gray-800 transition-colors duration-300">
        <div className="px-10  w-full">
          <div className="w-12/12">
            <div className="container mx-auto ">
              <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
                
                <h1 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100 uppercase">
                  Store Info
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-6"></p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                     onChange={(e)=>setFiles(e.target.files)}
                          id="dropzone-file"
                          multiple
                          required
                          type="file"
                          className="hidden"
                        />
                      </label>
                    </div>
                    <div className="w-full pb-3 ">
                      <p className="py-2 text-sm text-center text-gray-500">
                        After Select Images Click in The{" "}
                        <kbd className="kbd kbd-md">Upload</kbd> To Upload Imges
                      </p>
                      <span className="flex items-center gap-2 px-5">
                        <button
                          type="button"
                          disabled={uploading}
                          onClick={handleImageSubmit}
                          className="  h-[40px] w-[110px] bg-gray-200 text-blue-700  border mx-auto rounded-lg hover:shadow-md disabled:opacity-80"
                        >
                          {uploading ? (
                            <span className="loading loading-spinner loading-md "></span>
                          ) : (
                            "Upload"
                          )}
                        </button>
                        <progress
                          className={`progress progress-primary  mx-auto ${
                            porcentageProgress > 0 ? "" : " opacity-0"
                          }`}
                          value={porcentageProgress}
                          max="100"
                        ></progress>{" "}
                        <span
                          className={`flex items-center ${
                            porcentageProgress > 0 ? "" : " opacity-0"
                          }`}
                        >
                          <p>{parseInt(porcentageProgress)}</p>
                          <p>%</p>
                        </span>
                      </span>
                    </div>

                    <div className="grid grid-cols-6 items-center justify-center gap-2 lg:px-40 py-2">
                      {formData.imageUrls.length > 0 &&
                        formData.imageUrls.map((url, index) => (
                          <div
                            key={url}
                            className="flex items-center"
                            onClick={() => handleRemoveImage(index)}
                          >
                            <img
                              src={url}
                              alt="listing image"
                              className=" w-20 object-contain rounded-lg"
                            />
                             <button
                  type='button'
                  onClick={() => handleRemoveImage(index)}
                  className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'
                >
                  Delete
                </button>
                          </div>
                        ))}
                    </div>
                  </div>

                    <div className={`${porcentageProgress >= 100 ?'block':'hidden'}`}>
                      <h1>Complete This </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      onChange={handleChange}
                      type="text"
                      id="title"
                      name="title"
                      required
                      placeholder="Title"
                      className="border p-2 rounded w-full"
                    />
                  
                    <textarea
                     onChange={handleChange}
                      type="text"
                      required
                      name="description"
                      id="description"
                      placeholder="Description"
                      className="border p-2 rounded w-full"
                    />
                  </div>
                 
                 
                  
                 
                  
                
                 
                  
                  
                  
                  
                <button
                    type="submit"
                    className="w-full py-3 rounded bg-black text-white hover:bg-black focus:outline-none transition-colors"
                  >
                    {loading ? (
                      <span className="loading loading-spinner loading-md "></span>
                    ) : (
                      "Save"
                    )}
                  </button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CreateAccountStore;



