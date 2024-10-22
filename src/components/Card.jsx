import React from 'react';
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data, reference, onRemove }) => {
    return (
        <motion.div 
            drag 
            dragConstraints={reference} 
            whileDrag={{ scale: 1.1 }} 
            dragElastic={1} 
            className='relative w-[210px] h-[260px] flex-shrink-0 rounded-[45px] cursor-pointer bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'
        >
            <LuFileSpreadsheet />
            <p className='text-sm font-semibold leading-tight mt-5'>{data.name}</p>
            <div className="footer w-full absolute bottom-0 left-0">
                <div className='flex justify-between items-center px-8 py-3 mb-3'>
                    <h5>{(data.size / (1024 * 1024)).toFixed(2)} MB</h5>
                    <span 
                        className='w-6 h-6 rounded-full bg-gray-400 text-black flex justify-center items-center cursor-pointer' 
                        onClick={onRemove} 
                    >
                        <IoIosClose size={15} />
                    </span>
                </div>

                {data.tag.isOpen && (
                    <div className={`tag w-full py-4 flex justify-center items-center ${data.tag.tagColor === "green" ? "bg-green-600" : "bg-blue-600"}`}>
                        <h3 className='text-sm'>{data.tag.tagTitle}</h3>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default Card;
