import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
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

const UpdateListing = () => {
  const [files, setFiles] = useState([]);
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [porcentageProgress, setPorcentageProgress] = useState(0);

  const [formData, setFormData] = useState({
    imageUrls: [],
    title: "",
    price: "",
    description: "",
    body: "",
    color: "",
    fueltype: "",
    transmission: "",
    drivetype: "",
    vin: 1,
    year: 1,
    mileage: "",
    DigitalOdometer: false,
    Heater: false,
    LeatherSeats: false,
    PanoramicMoonroof: false,
    Tachometer: false,
    TouchscreenDisplay: false,
    AntiLockBraking: false,
    BrakeAssist: false,
    ChildSafetyLocks: false,
    DriverAirBag: false,
    PowerDoorLocks: false,
    StabilityControl: false,
    TractionControl: false,
    FogLightsFront: false,
    RainSensingWiper: false,
    RearSpoiler: false,
    WindowsElectric: false,
    AndroidAuto: false,
    AppleCarPlay: false,
    Bluetooth: false,
    HomeLink: false,
    PowerSteering: false,
    userRef: window.localStorage.getItem("userID"),
    userNumber: window.localStorage.getItem("Phone"),
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
      setFormData(data.listing2);
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
    formData({
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

      const res = await fetch("http://127.0.0.1:4000/api/car/create-car", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          access_token,
        }),
      });

      const data = await res.json();
      toast.success(data);
    } catch (error) {
      console.log(error);
    }

    console.log(formData);

    setLoading(false);
  };

  const handleChange = (e) => {
  
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
  
  };

  return (
    <>
      {/* <Header /> */}
      <div className=" py-20 flex items-center dark:bg-gray-800 transition-colors duration-300">
        <div className="px-10  w-full">
          <div className="w-12/12">
            <div className="container mx-auto ">
              <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
                <div className="py-6 bg-blue-700 px-10 m-5 rounded-lg">
                  <img src={logof} alt="" width={200} />
                </div>
                <h1 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100 uppercase">
                  Home Info
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
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
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
                          onChange={(e) => setFiles(e.target.files)}
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
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      onChange={handleChange}
                      type="text"
                      id="title"
                      required
                      placeholder="Title"
                      className="border p-2 rounded w-full"
                      value={formData.title}
                    />
                    <input
                      onChange={handleChange}
                      type="number"
                      id="price"
                      required
                      placeholder="Price"
                      value={formData.price}
                      className="border p-2 rounded w-full"
                    />

                    <div className="mb-4 grid grid-cols-1">
                      <textarea
                        onChange={handleChange}
                        type="text"
                        required
                        id="description"
                        placeholder="Description"
                        value={formData.description}
                        className="border p-2 rounded w-full"
                      />
                    </div>
                  </div>

                  <div className="mb-6 grid grid-cols-1 md:grid-cols-2  gap-4">
                    <select
                      onChange={handleChange}
                      placeholder="body"
                      id="body"
                      className="border p-2 rounded w-full"
                      value={formData.body}
                    >
                      <option disabled selected>
                        Body Car
                      </option>
                      <option value="sedan">Sedan</option>
                      <option value="hatchback">Hatchback</option>
                      <option value="SUV">SUV</option>
                      <option value="coupe">Coupe</option>
                      <option value="convertible">Convertible</option>
                      <option value="pickup">Pickup Truck</option>
                      <option value="van">Van</option>
                      <option value="minivan">Minivan</option>
                      <option value="crossover">Crossover</option>
                      <option value="roadster">Roadster</option>
                      <option value="stationwagon">Station Wagon</option>
                      <option value="limousine">Limousine</option>
                      <option value="compact">Compact Car</option>
                      <option value="electric">Electric Car</option>
                      <option value="hybrid">Hybrid Car</option>
                      <option value="offroad">Off-road Vehicle</option>
                      <option value="microcar">Microcar</option>
                      <option value="supercar">Supercar</option>
                    </select>
                    <select
                      onChange={handleChange}
                      required
                      id="color"
                      placeholder="color"
                      value={formData.color}
                      className="border p-2 rounded w-full"
                    >
                      <option disabled selected>
                        --select-color
                      </option>
                      <option value="black">Black</option>
                      <option value="white">White</option>
                      <option value="silver">Silver</option>
                      <option value="gray">Gray</option>
                      <option value="red">Red</option>
                      <option value="blue">Blue</option>
                      <option value="green">Green</option>
                      <option value="yellow">Yellow</option>
                      <option value="orange">Orange</option>
                      <option value="purple">Purple</option>
                      <option value="pink">Pink</option>
                      <option value="brown">Brown</option>
                      <option value="gold">Gold</option>
                      <option value="bronze">Bronze</option>
                      <option value="copper">Copper</option>
                      <option value="teal">Teal</option>
                      <option value="burgundy">Burgundy</option>
                      <option value="champagne">Champagne</option>
                      <option value="maroon">Maroon</option>
                      <option value="turquoise">Turquoise</option>
                      <option value="lavender">Lavender</option>
                      <option value="olive">Olive</option>
                      <option value="beige">Beige</option>
                      <option value="cream">Cream</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <select
                      onChange={handleChange}
                      required
                      id="fueltype"
                      placeholder="Fuel Type"
                      className="border p-2 rounded w-full"
                      value={formData.fueltype}
                    >
                      <option disabled selected>
                        Fuel Type
                      </option>
                      <option value="gasoline">Gasoline</option>
                      <option value="diesel">Diesel</option>
                      <option value="electric">Electric</option>
                      <option value="hybrid">Hybrid</option>
                      <option value="hydrogen">Hydrogen</option>
                      <option value="naturalGas">Natural Gas</option>
                      <option value="biofuel">Biofuel</option>
                      <option value="flexFuel">Flex Fuel</option>
                    </select>
                    <select
                      onChange={handleChange}
                      type="text"
                      id="transmission"
                      value={formData.transmission}
                      required
                      placeholder="transmission"
                      className="border p-2 rounded w-full"
                    >
                      <option disabled selected>
                        Transmission
                      </option>
                      <option value="automatic">Automatic</option>
                      <option value="manual">Manual</option>
                      <option value="semiautomatic">Semi-Automatic</option>
                      <option value="continuouslyVariable">
                        Continuously Variable (CVT)
                      </option>
                    </select>

                    <select
                      onChange={handleChange}
                      id="drivetype"
                      required
                      value={formData.drivetype}
                      placeholder="Drive Type"
                      className="border p-2 rounded w-full"
                    >
                      <option value="frontWheelDrive">Driver Type</option>
                      <option value="frontWheelDrive">
                        Front-Wheel Drive (FWD)
                      </option>
                      <option value="rearWheelDrive">
                        Rear-Wheel Drive (RWD)
                      </option>
                      <option value="allWheelDrive">
                        All-Wheel Drive (AWD)
                      </option>
                      <option value="fourWheelDrive">
                        Four-Wheel Drive (4WD/4x4)
                      </option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <input
                      onChange={handleChange}
                      type="text"
                      required
                      id="vin"
                      placeholder="VIN"
                      value={formData.vin}
                      className="border p-2 rounded w-full"
                    />
                    <input
                      onChange={handleChange}
                      type="number"
                      id="carYear"
                      name="carYear"
                      placeholder="Enter year"
                      min="1900"
                      max="2024"
                      value={formData.year}
                      className="border p-2 rounded w-full"
                    />

                    <input
                      type="number"
                      id="mileage"
                      placeholder="Mileage"
                      className="border p-2 rounded w-full"
                      onChange={handleChange}
                      required
                      value={formData.mileage}
                    />
                  </div>
                  <h1 className="text-center py-7">Options</h1>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="border p-2 rounded w-full flex items-center gap-2">
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        className="checkbox"
                     checked={formData.DigitalOdometer}
                      />
                      <span>DigitalOdometer</span>
                    </div>
                    <div className="border p-2 rounded w-full flex items-center gap-2">
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        className="checkbox"
                        checked={formData.Heater}
                      />
                      <span>Heater</span>
                    </div>
                    <div className="border p-2 rounded w-full flex items-center gap-2">
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        className="checkbox"
                        checked={formData.LeatherSeats}
                      />
                      <span>LeatherSeats</span>
                    </div>
                    <div className="border p-2 rounded w-full flex items-center gap-2">
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        className="checkbox"
                        checked={formData.PanoramicMoonroof}
                      />
                      <span>PanoramicMoonroof</span>
                    </div>
                    <div className="border p-2 rounded w-full flex items-center gap-2">
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        className="checkbox"
                        checked={formData.Tachometer}
                      />
                      <span>Tachometer</span>
                    </div>
                    <div className="border p-2 rounded w-full flex items-center gap-2">
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        className="checkbox"
                        checked={formData.TouchscreenDisplay}
                      />
                      <span>TouchscreenDisplay</span>
                    </div>
                    <div className="border p-2 rounded w-full flex items-center gap-2">
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        className="checkbox"
                        checked={formData.BrakeAssist}
                      />
                      <span>BrakeAssist</span>
                    </div>
                    <div className="border p-2 rounded w-full flex items-center gap-2">
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        className="checkbox"
                        checked={formData.ChildSafetyLocks}
                      />
                      <span>ChildSafetyLocks</span>
                    </div>
                    <div className="border p-2 rounded w-full flex items-center gap-2">
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        className="checkbox"
                        checked={formData.DriverAirBag}
                      />
                      <span>DriverAirBag</span>
                    </div>
                    <div className="border p-2 rounded w-full flex items-center gap-2">
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        className="checkbox"
                        checked={formData.PowerDoorLocks}
                      />
                      <span>PowerDoorLocks</span>
                    </div>
                    <div className="border p-2 rounded w-full flex items-center gap-2">
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        className="checkbox"
                        checked={formData.StabilityControl}
                      />
                      <span>StabilityControl</span>
                    </div>
                    <div className="border p-2 rounded w-full flex items-center gap-2">
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        className="checkbox"
                        checked={formData.TractionControl}
                      />
                      <span>TractionControl</span>
                    </div>
                    <div className="border p-2 rounded w-full flex items-center gap-2">
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        className="checkbox"
                        checked={formData.FogLightsFront}
                      />
                      <span>FogLightsFront</span>
                    </div>
                    <div className="border p-2 rounded w-full flex items-center gap-2">
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        className="checkbox"
                        checked={formData.RainSensingWiper}
                      />
                      <span>RainSensingWiper</span>
                    </div>
                    <div className="border p-2 rounded w-full flex items-center gap-2">
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        className="checkbox"
                        checked={formData.RearSpoiler}
                      />
                      <span>RearSpoiler</span>
                    </div>
                    <div className="border p-2 rounded w-full flex items-center gap-2">
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        className="checkbox"
                        checked={formData.WindowsElectric}
                      />
                      <span>WindowsElectric</span>
                    </div>
                    <div className="border p-2 rounded w-full flex items-center gap-2">
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        className="checkbox"
                        checked={formData.AndroidAuto}
                      />
                      <span>AndroidAuto</span>
                    </div>
                    <div className="border p-2 rounded w-full flex items-center gap-2">
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        className="checkbox"
                        checked={formData.AppleCarPlay}
                      />
                      <span>AppleCarPlay</span>
                    </div>
                    <div className="border p-2 rounded w-full flex items-center gap-2">
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        className="checkbox"
                        checked={formData.Bluetooth}
                      />
                      <span>Bluetooth</span>
                    </div>
                    <div className="border p-2 rounded w-full flex items-center gap-2">
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        className="checkbox"
                        checked={formData.HomeLink}
                      />
                      <span>HomeLink</span>
                    </div>
                    <div className="border p-2 rounded w-full flex items-center gap-2">
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        className="checkbox"
                        checked={formData.PowerSteering}
                      />
                      <span>PowerSteering</span>
                    </div>
                  </div>

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

export default UpdateListing;
