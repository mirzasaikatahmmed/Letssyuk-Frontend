/* eslint-disable @typescript-eslint/no-explicit-any */
import{ useState, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Camera, User, Upload } from 'lucide-react';

export const ProfilePicture = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e : any) => {
    const file = e.target.files[0];
    if (file) {
      // Basic validation
      if (file.size > 5 * 1024 * 1024) {
        alert("File is too large! Max 5MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="bg-[#0B1219] border-gray-800 p-6 rounded-xl border-[0.5px]">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-[#162129] rounded-lg text-[#30D5C8] shadow-[0_0_10px_rgba(48,213,200,0.1)]">
          <Camera size={20} />
        </div>
        <h3 className="text-base font-bold text-white">Profile Picture</h3>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <input 
          type="file" 
          className="hidden" 
          ref={fileInputRef} 
          accept="image/*" 
          onChange={handleFileChange}
        />

        <div className="h-28 w-28 rounded-full bg-[#162129] border-2 border-gray-700 flex items-center justify-center relative overflow-hidden group">
           {imagePreview ? (
             <img src={imagePreview} alt="Preview" className="h-full w-full object-cover" />
           ) : (
             <User size={40} className="text-gray-600" />
           )}
           <div 
             onClick={() => fileInputRef.current?.click()}
             className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer"
           >
              <Upload size={20} className="text-white" />
           </div>
        </div>
        
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="flex-1 w-full border-2 border-dashed border-gray-800 rounded-xl p-8 flex flex-col items-center justify-center bg-[#0A0A0A] hover:border-[#30D5C8]/40 transition-all cursor-pointer group"
        >
          <Upload size={24} className="text-gray-500 group-hover:text-[#30D5C8] mb-2 transition-colors" />
          <p className="text-sm font-bold text-white">Click to upload profile picture</p>
          <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest font-bold">JPG, PNG or WebP • Max 5MB</p>
        </div>
      </div>
    </Card>
  );
};