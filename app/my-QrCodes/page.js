"use client";
import React, { useState, useEffect, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { motion } from "framer-motion";
import { Download, BarChart3, Pencil } from "lucide-react";


const Page = () => {
  const [qrCodes, setQrCodes] = useState([]);
  const qrRef = useRef(null);
  const [qrTitle, setQrTitle] = useState([])
  const [isEditing, setIsEditing] = useState(null);
 
  
  useEffect(() => {
    const storedQrCode = JSON.parse(localStorage.getItem("qrCode")) || [];
    setQrCodes(storedQrCode);
    setQrTitle(storedQrCode.map((_, index) => `My QR Code ${index + 1}`));
    const storedTitles = JSON.parse(localStorage.getItem("qrTitles"));
    if (storedTitles && storedTitles.length === storedQrCode.length) {
      setQrTitle(storedTitles);
    } else {
      // Default titles if none saved
      setQrTitle(storedQrCode.map((_, i) => `My QR Code ${i + 1}`));
    }

  }, []);
    useEffect(() => {
    if (qrTitle.length > 0) {
      localStorage.setItem("qrTitles", JSON.stringify(qrTitle));
    }
  }, [qrTitle]);
  const handleChange = (index, newValue) => {
    const updatedTitles = [...qrTitle];
    updatedTitles[index] = newValue;
    setQrTitle(updatedTitles);
  };
  const handleEdit = (index) => {
    setIsEditing(index);
  };

  const handleSave = () => {
    setIsEditing(null);
  };


  const handleDownload = (index) => {
    const canvas = document.getElementById(`qr-${index}`);
    // Create a new canvas with extra padding
    const padding = 20; // ✅ Add white border around QR
    const size = canvas.width + padding * 2;
    const paddedCanvas = document.createElement("canvas");
    paddedCanvas.width = size;
    paddedCanvas.height = size;

    const ctx = paddedCanvas.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, size, size);

    // Draw QR in center with padding
    ctx.drawImage(canvas, padding, padding);
    const url = paddedCanvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = `${qrTitle[index] || `MyQRCode-${index + 1}`}.png`;
    link.click();




  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 p-6 sm:p-12 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-extrabold text-white mb-8 tracking-tight"
      >
        My Generated QR Codes
      </motion.h1>

      {qrCodes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {qrCodes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-4 flex flex-col gap-3 relative"
            >
              
              <div className="flex items-center  gap-3">
                <QRCodeCanvas
                  id={`qr-${index}`}
                  value={item.qrcode}
                  size={60}
                  className="rounded-md border border-gray-200"
                />
                <div>
                  <p className="font-semibold text-gray-800">PNG</p>
                  <div className="flex gap-3 items-center" >
                    <input
                      type="text"
                      className={`text-black w-30 text-sm border ${isEditing === index
                          ? "border-gray-800 px-2 rounded"
                          : "border-transparent"
                        }`}
                      value={qrTitle[index]}
                      onChange={(e) => handleChange(index, e.target.value)}

                      readOnly={isEditing !== index}
                    />
                    <Pencil
                      onClick={() => handleEdit(index)}
                      className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer"
                    />
                    <button onClick={handleSave} className="bg-blue-700 flex  transition-all transform duration-75 hover:scale-x-105 px-2 pb-1 text-sm text-white font-semibold cursor-pointer" >save</button>
                  </div>
                </div>
                {/* <div className="ml-auto text-center">
                  <p className="text-lg font-bold text-indigo-600">0</p>
                  <p className="text-xs text-gray-500">Scans</p>
                </div> */}
              </div>

       
              <div className="text-sm text-gray-500 mt-2">
                {/* <p className="text-gray-400">No folder</p> */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline truncate block"
                >
                  {item.url}
                </a>
                {/* <p className="text-xs text-gray-400 mt-1">
                  Modified: {new Date().toLocaleDateString()}
                </p> */}
              </div>

            
              <button
                onClick={() => handleDownload(index)}
                className="mt-3 w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-xl transition"
              >
                <Download className="w-4 h-4" /> Download
              </button>

             
              {/* <div className="absolute top-3 right-3 flex gap-2">
                <BarChart3 className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
              </div> */}
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-300 text-lg mt-12"
        >
          You haven’t generated any QR code yet 😅
        </motion.p>
      )}
    </main>
  );
};

export default Page;
