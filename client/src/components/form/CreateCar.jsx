import  { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import logof from "../../assets/logof1.png";
import Footer from "../Footer";

const CreateCar = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

 

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
                  Car Info
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-6"></p>
                <form >
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
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Title"
                      className="border p-2 rounded w-full"
                    />
                    <textarea
                      type="text"
                      placeholder="Description"
                      className="border p-2 rounded w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Price"
                      className="border p-2 rounded w-full"
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Street address"
                      className="border p-2 rounded w-full"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <input
                      type="text"
                      placeholder="City"
                      className="border p-2 rounded w-full"
                    />
                    <input
                      type="text"
                      placeholder="State / Province"
                      className="border p-2 rounded w-full"
                    />
                    <input
                      type="text"
                      placeholder="ZIP / Postal code"
                      className="border p-2 rounded w-full"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <input
                      type="number"
                      placeholder="Year"
                      className="border p-2 rounded w-full"
                    />
                    <input
                      type="number"
                      placeholder="Mileage"
                      className="border p-2 rounded w-full"
                    />
                    <select
                      className="border p-2 rounded w-full"
                    >
                      <option disabled>Fuel Type</option>
                      <option value="Petrol">Petrol</option>
                      <option value="Diesel">Diesel</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <select
                      className="border p-2 rounded w-full"
                    >
                      <option disabled>Transmission</option>
                      <option value="Automatic">Automatic</option>
                      <option value="Manual">Manual</option>
                      <option value="Continuously">Continuously</option>
                    </select>
                    <select
                      className="border p-2 rounded w-full"
                    >
                      <option disabled>Condition</option>
                      <option value="Used">Used</option>
                      <option value="Non Used">Non Used</option>
                    </select>
                    <input
                      type="number"
                      placeholder="Door Number"
                      className="border p-2 rounded w-full"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <select
                      type="number"
                      placeholder="Status"
                      className="border p-2 rounded w-full"
                    >
                      <option value="sale">Sale</option>
                      <option value="rent">Rent</option>
                    </select>
                    <input
                      type="number"
                      placeholder="Cylinder"
                      className="border p-2 rounded w-full"
                    />
                    <input
                      type="text"
                      placeholder="color"
                      className="border p-2 rounded w-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                
                   
                    <input
                      type="text"
                      placeholder="Driver Type"
                      className="border p-2 rounded w-full"
                    />
                    <input
                      type="text"
                      placeholder="VIN"
                      className="border p-2 rounded w-full"
                    />
                    <input
                      type="number"
                      placeholder="Engine Size"
                      className="border p-2 rounded w-full"
                    />
                    <input
                      type="text"
                      placeholder="Body"
                      className="border p-2 rounded w-full"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors"
                  >
                    Save
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

export default CreateCar;
