import React, { useRef, useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import Card from './Card';

const ForeGround = () => {
  const [Open, setOpen] = useState(false);
  const [SelectedFiles, setSelectedFiles] = useState([]);
  const ref = useRef(null);

  const OpenModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleFile = (e) => {
    let file = e.target.files[0];
    if (file) {
      setSelectedFiles(prevFiles => [...prevFiles, file]); 
    }
  };

  const handleSubmit = () => {
    closeModal(); 
  };

  const removeFile = (index) => {
    
    setSelectedFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-5 p-5'>
      <div onClick={OpenModal} className='absolute cursor-pointer right-0 top-0 bg-gray-500 h-12 w-12 rounded-full flex justify-center items-center text-white m-5'>
        <IoMdAdd size={20}/>
      </div>

      {Open && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full flex flex-col'>
            <h2 className='text-2xl font-bold mb-4'>Choose Your File</h2>
            <input type="file" onChange={handleFile} className='mb-6'/>
            <button
              onClick={handleSubmit}
              className='px-4 py-2 bg-red-600 text-white rounded capitalize'>
              Submit
            </button>
          </div>
        </div>
      )}

      {SelectedFiles.map((file, index) => (
        <Card
          key={index}
          reference={ref}
          data={{
            name: file.name,
            size: file.size,
            tag: {
              isOpen: true,
              tagColor: "green",
              tagTitle: "Download", 
            },
            close: true,
          }}
          onRemove={() => removeFile(index)} 
        />
      ))}
    </div>
  );
};

export default ForeGround;
