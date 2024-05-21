import { useState, useEffect } from "react";

import { useParams ,useNavigate} from "react-router-dom";
import logof from "../../assets/logof1.png";
import Footer from "../Footer";
import { toast } from "react-toastify";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import { app } from "../../firebase";
import Header from "../Header";

const UpdateListing0 = () => {
  const [files, setFiles] = useState([]);
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [porcentageProgress, setPorcentageProgress] = useState(0);
  
  const [formData, setFormData] = useState( {
    imageUrls: [],
    title: "",
    description: "",
    address: "",
    regularPrice: "",
    rooms: 1,
    bathrooms: 1,
    furnished: false,
    parking: undefined,
    garage: undefined,
    parkSpace: undefined,
    type: "", // sell or rent
    catSlug: "",  // home or villa ...
    country: "",
    city: "",
    state: "",
    zip: "",
    kitchen: "",
    area: "",
    yearBuilt: "",
    userNumber:window.localStorage.getItem("Phone")
  });
  const { id } = useParams();
  

  useEffect(() => {
    const fetchListing = async () => {

      const res = await fetch(`http://localhost:4000/api/real/getForUpdate/${id}`);
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setFormData(data.listing);
    };

    fetchListing();
  }, [id]);
console.log(formData)
  const handleImageSubmit = (e) => {
    if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
      const promises = [];
      for (let i = 0; i < files.length; i++) {
        setUploading(true);
        promises.push(storeImage(files[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls),
          });

          setImageUploadError(false);
          setUploading(false);
        })
        .catch((err) => {
          setImageUploadError("Image upload failed (2 mb max per image)");
          setUploading(false);
        });
    } else {
      setImageUploadError("You can only upload 6 images per listing");
      setUploading(false);
    }
  };
  const navigate = useNavigate()
  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log(`Upload is ${progress}% done`);
          setPorcentageProgress(progress);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
            // console.log(downloadURL);
          });
        }
      );
    });
  };
  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const access_token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("access_token="))
        .split("=")[1];

      const res = await fetch(`http://127.0.0.1:4000/api/real/update-real/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userRef: window.localStorage.getItem("userID"),

          access_token,
        }),
      });

      const data = await res.json();
      navigate(`/list/${window.localStorage.getItem("userID")}`)
    } catch (error) {
      console.log(error);
    }

    console.log(formData);

    setLoading(false);
  };

  const handleChange = (e) => {
  
    const { id, value, type, checked } = e.target;
  
    // If the input is a text input or textarea, update the value in the form data
    if (type === 'text' || type === 'textarea' || type === 'number' || id  === "type" || id === 'country' ) {
      setFormData(prevFormData => ({
        ...prevFormData, 
        [id]: value
      }));
    }
    
    // If the input is a checkbox, update the checked status in the form data
    if (type === 'checkbox') {
      setFormData(prevFormData => ({
        ...prevFormData,
        [id]: checked
      }));
    }
  };

  return (
    <>
      <Header />
      <div className="py-20 flex items-center text-black :bg-gray-800 transition-colors duration-300 hero">
        <div className="px-10  w-full">
          <div className="w-12/12">
            <div className="container mx-auto ">
              <div className="bg-white :bg-gray-700 shadow rounded-lg p-6">
                <div className="py-6 bg-blue-700 px-10 m-5 rounded-lg">
                  <img src={logof} alt="" width={200} />
                </div>
                <h1 className="text-3xl font-semibold mb-4 text-gray-900 :text-gray-100 uppercase">
                  Home Info
                </h1>
                <p className="text-gray-600 :text-gray-300 mb-6"></p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 :hover:bg-bray-800 :bg-gray-700 hover:bg-gray-100 :border-gray-600 :hover:border-gray-500 :hover:bg-gray-600"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            className="w-8 h-8 mb-4 text-gray-500 :text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 :text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 :text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                     onChange={(e)=>setFiles(e.target.files)}
                          id="dropzone-file"
                          multiple
              
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      onChange={handleChange}
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
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
                      value={formData.description}
                      placeholder="Description"
                      className="border p-2 rounded w-full"
                    />
                  </div>
                 
                 
                  <div className="mb-6 grid grid-cols-1 md:grid-cols-2  gap-4">
                    <select
                    onChange={handleChange}
                      placeholder="Country"
                      id="country"
                      value={formData.country}
                      className="border p-2 rounded w-full"
                    >
                      <option value="" disabled>
                        Country
                      </option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Åland Islands">Åland Islands</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="American Samoa">American Samoa</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="Antarctica">Antarctica</option>
                      <option value="Antigua and Barbuda">
                        Antigua and Barbuda
                      </option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Aruba">Aruba</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bosnia and Herzegovina">
                        Bosnia and Herzegovina
                      </option>
                      <option value="Botswana">Botswana</option>
                      <option value="Bouvet Island">Bouvet Island</option>
                      <option value="Brazil">Brazil</option>
                      <option value="British Indian Ocean Territory">
                        British Indian Ocean Territory
                      </option>
                      <option value="Brunei Darussalam">
                        Brunei Darussalam
                      </option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Cape Verde">Cape Verde</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Central African Republic">
                        Central African Republic
                      </option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Christmas Island">Christmas Island</option>
                      <option value="Cocos (Keeling) Islands">
                        Cocos (Keeling) Islands
                      </option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value="Congo, The Democratic Republic of The">
                        Congo, The Democratic Republic of The
                      </option>
                      <option value="Cook Islands">Cook Islands</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Cote D'ivoire">Cote D'ivoire</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">
                        Dominican Republic
                      </option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">
                        Equatorial Guinea
                      </option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Falkland Islands (Malvinas)">
                        Falkland Islands (Malvinas)
                      </option>
                      <option value="Faroe Islands">Faroe Islands</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="French Guiana">French Guiana</option>
                      <option value="French Polynesia">French Polynesia</option>
                      <option value="French Southern Territories">
                        French Southern Territories
                      </option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Gibraltar">Gibraltar</option>
                      <option value="Greece">Greece</option>
                      <option value="Greenland">Greenland</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Guam">Guam</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guernsey">Guernsey</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-bissau">Guinea-bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Heard Island and Mcdonald Islands">
                        Heard Island and Mcdonald Islands
                      </option>
                      <option value="Holy See (Vatican City State)">
                        Holy See (Vatican City State)
                      </option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran, Islamic Republic of">
                        Iran, Islamic Republic of
                      </option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Isle of Man">Isle of Man</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jersey">Jersey</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Korea, Democratic People's Republic of">
                        Korea, Democratic People's Republic of
                      </option>
                      <option value="Korea, Republic of">
                        Korea, Republic of
                      </option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Lao People's Democratic Republic">
                        Lao People's Democratic Republic
                      </option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libyan Arab Jamahiriya">
                        Libyan Arab Jamahiriya
                      </option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Macao">Macao</option>
                      <option value="Macedonia, The Former Yugoslav Republic of">
                        Macedonia, The Former Yugoslav Republic of
                      </option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia, Federated States of">
                        Micronesia, Federated States of
                      </option>
                      <option value="Moldova, Republic of">
                        Moldova, Republic of
                      </option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Netherlands Antilles">
                        Netherlands Antilles
                      </option>
                      <option value="New Caledonia">New Caledonia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Niue">Niue</option>
                      <option value="Norfolk Island">Norfolk Island</option>
                      <option value="Northern Mariana Islands">
                        Northern Mariana Islands
                      </option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Palestinian Territory, Occupied">
                        Palestinian Territory, Occupied
                      </option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Pitcairn">Pitcairn</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Reunion">Reunion</option>
                      <option value="Romania">Romania</option>
                      <option value="Russian Federation">
                        Russian Federation
                      </option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Saint Helena">Saint Helena</option>
                      <option value="Saint Kitts and Nevis">
                        Saint Kitts and Nevis
                      </option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Saint Pierre and Miquelon">
                        Saint Pierre and Miquelon
                      </option>
                      <option value="Saint Vincent and The Grenadines">
                        Saint Vincent and The Grenadines
                      </option>
                      <option value="Samoa">Samoa</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome and Principe">
                        Sao Tome and Principe
                      </option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="South Georgia and The South Sandwich Islands">
                        South Georgia and The South Sandwich Islands
                      </option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Svalbard and Jan Mayen">
                        Svalbard and Jan Mayen
                      </option>
                      <option value="Swaziland">Swaziland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syrian Arab Republic">
                        Syrian Arab Republic
                      </option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania, United Republic of">
                        Tanzania, United Republic of
                      </option>
                      <option value="Thailand">Thailand</option>
                      <option value="Timor-leste">Timor-leste</option>
                      <option value="Togo">Togo</option>
                      <option value="Tokelau">Tokelau</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad and Tobago">
                        Trinidad and Tobago
                      </option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Turks and Caicos Islands">
                        Turks and Caicos Islands
                      </option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="United States Minor Outlying Islands">
                        United States Minor Outlying Islands
                      </option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Viet Nam">Viet Nam</option>
                      <option value="Virgin Islands, British">
                        Virgin Islands, British
                      </option>
                      <option value="Virgin Islands, U.S.">
                        Virgin Islands, U.S.
                      </option>
                      <option value="Wallis and Futuna">
                        Wallis and Futuna
                      </option>
                      <option value="Western Sahara">Western Sahara</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="address"
                      required
                      id="address"
                      placeholder="Street address"
                      className="border p-2 rounded w-full"
                    />
                  </div>
                 
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <input
                      onChange={handleChange}
                      type="text"
                      required
                      name="city"
                      id="city"
                      placeholder="City"
                      value={formData.city}
                      className="border p-2 rounded w-full"
                    />
                    <input
                    onChange={handleChange}
                      type="text"
                      id="state"
                      name="state"
                      required
                      value={formData.state}
                      placeholder="State / Province"
                      className="border p-2 rounded w-full"
                    />
                    <input
                      onChange={handleChange}
                      type="text"
                      id="zip"
                      name="zip"
                      required
                      value={formData.zip}
                      placeholder="ZIP / Postal code"
                      className="border p-2 rounded w-full"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <input
                    onChange={handleChange}
                      type="number"
                      required
                      name="rooms"
                      id="rooms"
                      value={formData.rooms}
                      placeholder="Bedrooms"
                      className="border p-2 rounded w-full"
                    />
                    <input
                    onChange={handleChange}
                      type="number"
                      id="bathrooms"
                      required
                      name="bathrooms"
                      value={formData.bathrooms}
                      placeholder="Bathrooms"
                      className="border p-2 rounded w-full"
                    />
                    <div className='flex gap-2 border p-1 rounded w-full items-center'>
                      <input
                        type='checkbox'
                        id='furnished'
                       
                        className='checkbox '
                        onChange={handleChange}
                        checked={formData.furnished}
                      />
                      <span>Furnished</span>
                   </div>

                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <input
                    onChange={handleChange}
                      type="number"
                      required
                      id="kitchen"
                      value={formData.kitchen}
                      placeholder="Kitchen"
                      className="border p-2 rounded w-full"
                    />
                    <input
                    onChange={handleChange}
                      type="number"
                      required
                      id="garage"
                      value={formData.garage}
                      placeholder="Garage Space"
                      className="border p-2 rounded w-full"
                    />
                    <input
                      onChange={handleChange}
                      type="number"
                      id="parking"
                      required
                      value={formData.parking}
                      placeholder="Parking"
                      className="border p-2 rounded w-full"
                    />
                     <input
                      onChange={handleChange}
                      type="number"
                      required
                      id="parkSpace"
                      value={formData.parkSpace}
                      placeholder="ParkSpace "
                      className="border p-2 rounded w-full"
                    />
                                        <input
                    onChange={handleChange}
                      type="number"
                      required
                      id="area"
                      value={formData.area}
                      placeholder="Area, Sq.Ft"
                      className="border p-2 rounded w-full"
                    />
                    <input
                      onChange={handleChange}
                      type="number"
                      id="yearBuilt"
                      required
                      value={formData.yearBuilt}
                      placeholder="Year Built"
                      className="border p-2 rounded w-full"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                   
                   
                  <select
                    onChange={handleChange}
                      type="text"
                      placeholder="Status"
                      required
                      id="type"
                      value={formData.type}
                      className="border p-2 rounded w-full"
                    >
                      <option  disabled>Select: Sale Or Rent</option>
                      <option id="sale" value="sale">Sale</option>
                      <option id="rent" value="rent">Rent</option>
                    </select>
                   <span className="flex items-center gap-1">
                   <input
                    onChange={handleChange}
                      type="text"
                      id="regularPrice"
                      required
                      placeholder="Price"
                      value={formData.regularPrice}
                      className="p-3 border w-full border-gray-300 rounded-lg"
                    />
                    {formData.type === 'rent' && (
                      <span className=' badge badge-outline'>$/month</span>
                    )}
                   </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                 
                  </div>
                  <div className='mb-4'>
                    {/* <input
                      type='checkbox'
                      id='offer'
                      className='w-5'
                      // onChange={handleChange}
                      // checked={formData.offer}
                    />
                    <span>Offer</span> */}
                  </div>
                  {formData.offer && (
                  <div className='flex items-center gap-2 mb-4'>
                  <input
                    type='number'
                    id='discountPrice'
                    min='0'
                    max='10000000'
                    required
                    className='p-3 border w-full border-gray-300 rounded-lg'
                    
                    value={formData.discountPrice}
                  />
                  <div className='flex flex-col items-center'>
                    <p>Discounted price</p>
  
                    
                  </div>
                </div>)}
                <button
                    type="submit"
                    className="w-full py-3 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors"
                  >
                    {loading ? (
                      <span className="loading loading-spinner loading-md "></span>
                    ) : (
                      "Update"
                    )}
                  </button>
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

export default UpdateListing0;
