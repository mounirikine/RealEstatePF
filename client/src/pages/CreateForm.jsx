import React, { useState } from "react";
import HomeForm from '../components/Formes/HomeForm';
import CarsForm from '../components/Formes/CarsForm';
import VillaForm from '../components/Formes/VillaForm';
import PhonesForm from '../components/Formes/PhonesForm';
import OfficeForm from '../components/Formes/OfficeForm';
import BycicleForm from '../components/Formes/BycicleFrom'; // Corrected typo

const CreateForm = () => {
  const [selectedForm, setSelectedForm] = useState(<HomeForm />);
  const [active, setActive] = useState('HomeForm');

  const handleTabClick = (tab) => {
    setActive(tab);
    switch (tab) {
      case 'HomeForm':
        setSelectedForm(<HomeForm />);
        break;
      case 'CarsForm':
        setSelectedForm(<CarsForm />);
        break;
      case 'PhonesForm':
        setSelectedForm(<PhonesForm />);
        break;
      case 'OfficeForm':
        setSelectedForm(<OfficeForm />);
        break;
      case 'VillaForm':
        setSelectedForm(<VillaForm />);
        break;
      case 'BycicleForm':
        setSelectedForm(<BycicleForm />);
        break;
      default:
        setSelectedForm(null);
    }
  };

  return (
    <div className=" pt-14">
      <div className="flex flex-col md:flex-row justify-between gap-7 p-8 py-22">
        {/* Post Form */}
        <div className="w-2/3 ">
          <h2 className="text-2xl font-bold mb-4">Create Post</h2>
          {/* Your form elements go here */}
          {selectedForm}
        </div>

        {/* Categories Sidebar */}
        <div className="w-1/3 py-10 ">
          <div className="sticky top-0">
            <h2 className="text-2xl font-bold mb-4 px-3 pt-24">Categories</h2>
            {/* Your categories list goes here */}
            <ul className="menu bg-base-200 gap-1 w-90  ">
              <li
                onClick={() => handleTabClick('HomeForm')}
                className={`bg-gray-200 pt-1 text-[16px] rounded-xl  font-bold ${
                  active === 'HomeForm' ? 'secondary_color hover:secondary_color' : ''
                }`}
              >
                <a>Home</a>
              </li>
              <li
                onClick={() => handleTabClick('CarsForm')}
                className={`bg-gray-200 pt-1 text-[16px] rounded-xl font-bold ${
                  active === 'CarsForm' ? 'secondary_color hover:secondary_color' : ''
                }`}
              >
                <a>Cars</a>
              </li>
              <li
                onClick={() => handleTabClick('PhonesForm')}
                className={`bg-gray-200 pt-1 text-[16px] rounded-xl  font-bold ${
                  active === 'PhonesForm' ? 'secondary_color hover:secondary_color' : ''
                }`}
              >
                <a>Phones</a>
              </li>
              <li
                onClick={() => handleTabClick('OfficeForm')}
                className={`bg-gray-200 pt-1 text-[16px] rounded-xl  font-bold ${
                  active === 'OfficeForm' ? 'secondary_color hover:secondary_color' : ''
                }`}
              >
                <a>Offices</a>
              </li>
              <li
                onClick={() => handleTabClick('VillaForm')}
                className={`bg-gray-200 pt-1 text-[16px] rounded-xl  font-bold ${
                  active === 'VillaForm' ? 'secondary_color hover:secondary_color' : ''
                }`}
              >
                <a>Villa</a>
              </li>
              <li
                onClick={() => handleTabClick('BycicleForm')}
                className={`bg-gray-200 pt-1 text-[16px] rounded-xl  font-bold ${
                  active === 'BycicleForm' ? 'secondary_color hover:secondary_color' : ''
                }`}
              >
                <a>Bicycles</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
