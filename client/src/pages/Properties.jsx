import Header from "../components/Header";

import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { IoCarSport, IoHomeSharp } from "react-icons/io5";
import { MdOutlineApartment, MdOutlineDevices, MdOutlineVilla } from "react-icons/md";
import { GiClothes, GiOfficeChair } from "react-icons/gi";
import PropertiesFilter from "../components/PropertiesFilter";
import {  useState } from "react";
import {motion} from 'framer-motion'
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiBicycleBold, PiGuitar } from "react-icons/pi";
import { LuArmchair } from "react-icons/lu";
import { FaDollarSign } from "react-icons/fa";
const Properties = ({ userInfo }) => {
  const [category,setCategories] = useState('house');
  const [minPrice, setMinPrice] = useState('0');
  const [maxPrice, setMaxPrice] = useState('9000000000000');
  const [location,setLocation] = useState('United States');


  return (
    <>
      <Header userInfo={userInfo} />
      <section className="text-black pt-32 ">
        <div className="px-1 md:px-20 pt-5 pb-5">
          <div className="">
            <h1 className="text-center  font-bold text-4xl pb-4">
              Property Types
            </h1>
            <p className="text-center w-11/12 md:w-8/12 mx-auto ">
            Here you can find your categories that you are simply looking for and be the first to take them
            </p>
          </div>
          
        </div>
        

        <div className="mb-3   bg-violet-100 border-2 border-black w-10/12 mx-auto flex flex-col items-center justify-center px-4 py-2 rounded-2xl  ">
          <div className="text-center py-1">
            <h1 className="text-xl font-bold">Filter Property</h1>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -57 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
             className="flex lg:mx-14 bg-white flex-col gap-5  lg:flex-row items-center lg:items-center w-11/12 mx-auto lg:w-full py-3 px-4 mt-6 rounded-xl border-2 border-black justify-center">
            
            
            
              <div className="flex  items-center   gap-2 mb-4 lg:mb-0 w-full lg:w-3/12">
                <span className="border rounded-xl bg-violet-100 px-3 py-3 ">
                  <FaMapMarkerAlt />
                </span>
                <div className="flex flex-col">
                  
                  <select
                    onChange={(e)=>setLocation(e.target.value)}
                      placeholder="Country"
                      id="country"
                defaultValue='United States'
                      className="border p-2 rounded w-full bg-gray-100 "
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
                </div>
              </div>

          

              <div className="flex items-center gap-2 mb-4 lg:mb-0 w-full lg:w-3/12">
                <span className="border rounded-xl bg-violet-100 px-3 py-3">
                <FaDollarSign />
                </span>
                  <div className="flex flex-col">
                    
                    <select
                      name="price"
                      id="price"
                      defaultValue='0-9000000000000'
                      className="border p-2 rounded w-full bg-gray-100"
                      onChange={(e) => {
                        const [min, max] = e.target.value.split("-");
                        setMinPrice(min);
                        setMaxPrice(max);
                      }}
                    >
                      <option value="">Select Price Range</option>
                      <option value="0-500">$0 - $500</option>
                      <option value="501-1000">$501 - $1000</option>
                      <option value="1001-1500">$1001 - $1500</option>
                      <option value="501-900000">$501 - $900000</option>
                    
                      {/* Add other options as needed */}
                    </select>
                  </div>
              </div>

            
            </motion.div>
        </div>
        <div className="flex items-center justify-center lg:px-20">
        <div className="flex  gap-4 mx-4 px-10 mt-4  overflow-x-auto    rounded-md py-1 ">
            <Link
              onClick={()=>{setCategories('house')}}
              className={`px-5 py-3 bg-violet-500 rounded-xl ${category ==='house' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1  shadow-lg flex gap-1 items-center justify-center `}
            >
              <span>
                <IoHomeSharp className="text-3xl" />
              </span>{" "}
            </Link>
            <Link
              onClick={()=>{setCategories('villa')}}
              className={`px-5 py-3 bg-violet-500 rounded-xl ${category ==='villa' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1  shadow-lg flex gap-1 items-center justify-center `}
            >
              <span>
                <MdOutlineVilla className="text-3xl" />
              </span>{" "}
            </Link>
            <Link
              onClick={()=>{setCategories('apartment')}}
              className={`px-5 py-3 bg-violet-500 rounded-xl ${category ==='apartment' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1  shadow-lg flex gap-1 items-center justify-center `}
            >
              <span>
                <MdOutlineApartment className="text-3xl" />
              </span>{" "}
            </Link>
            <Link
              onClick={()=>{setCategories('car')}}
              className={`px-5 py-3 bg-violet-500 rounded-xl ${category ==='car' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1  shadow-lg flex gap-1 items-center justify-center `}
            >
              <span>
                <IoCarSport className="text-3xl" />
              </span>{" "}
            </Link>
            <Link
              onClick={()=>{setCategories('office')}}
              className={`px-5 py-3 bg-violet-500 rounded-xl ${category ==='office' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1  shadow-lg flex gap-1 items-center justify-center `}
            >
              <span>
                <GiOfficeChair className="text-3xl"  />
              </span>{" "}
            </Link>
            <Link
              onClick={()=>{setCategories('bycicle')}}
              className={`px-5  py-3 bg-violet-500 rounded-xl ${category ==='bycicle' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1  shadow-lg flex gap-1 items-center justify-center `}
            >
              <span>
                <PiBicycleBold className="text-3xl" />
              </span>{" "}
            </Link>
            <Link
              onClick={()=>{setCategories('devices')}}
              className={`px-5 py-3 bg-violet-500 rounded-xl ${category ==='devices' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1  shadow-lg flex gap-1 items-center justify-center `}
            >
              <span>
                <MdOutlineDevices className="text-3xl" />
              </span>{" "}
            </Link>
            <Link
              onClick={()=>{setCategories('clothes')}}
              className={`px-5 py-3 bg-violet-500 rounded-xl ${category ==='clothes' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1  shadow-lg flex gap-1 items-center justify-center `}
            >
              <span>
                <GiClothes className="text-3xl" />
              </span>{" "}
            </Link>
            <Link
              onClick={()=>{setCategories('music')}}
              className={`px-5 py-3 bg-violet-500 rounded-xl ${category ==='music' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1  shadow-lg flex gap-1 items-center justify-center `}
            >
              <span>
                <PiGuitar className="text-3xl" />
              </span>{" "}
            </Link>
            <Link
              onClick={()=>{setCategories('furnishing')}}
              className={`px-5 py-3 bg-violet-500  rounded-2xl ${category ==='furnishing' ? 'bg-black text-white' : 'bg-white hover:bg-slate-100 ' }  text-lg border py-1  shadow-lg flex gap-1 items-center justify-center `}
            >
              <span>
                <LuArmchair className="text-3xl" />
              </span>{" "}
            </Link>
 

          </div>
        </div>
        
            <PropertiesFilter catSlug={category}  minPrice={minPrice} country={location} maxPrice={maxPrice} />
      </section>

      <Footer />
    </>
  );
};

export default Properties;
