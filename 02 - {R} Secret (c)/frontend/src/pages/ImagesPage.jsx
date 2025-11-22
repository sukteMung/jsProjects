import { useState } from "react";
import NavBar from "../components/NavBar";
import ImageModal from "../components/ImageModal";

export default function ImagesPage() {
    const [selectedImage, setSelectedImage] = useState(null);

    // TEMP hardcoded images (replace with Firebase images later)
    const images = [
        "https://cdn.discordapp.com/attachments/1359048941357760532/1427175404657049701/image.png?ex=6921fb6c&is=6920a9ec&hm=b4afb6e976b6cd5741b4ce5f0f506b32cd9323081643f84c2836f74557da7642&",
        "https://cdn.discordapp.com/attachments/1359048941357760532/1413237218922991798/image.png?ex=69220839&is=6920b6b9&hm=7b69d983f144dbb053c832dbeb26de99367b252f797e2ac69e89ac45a9b3f906&",
        "https://via.placeholder.com/600x300",
        "https://via.placeholder.com/600x350",
        "https://via.placeholder.com/600x420",
        "https://via.placeholder.com/600x380",
    ];

    return (
        <div className="min-h-screen min-w-full flex" style={{ backgroundColor: "#8895B3" }}>
            {/* Left padding */}
            <div className="flex-1" />

            {/* Middle content */}
            <div className="w-[60%] min-h-screen" style={{ backgroundColor: "#BBADFF" }}>
                <NavBar pageName="Images" />

                {/* IMAGE GRID */}
                <div className="grid grid-cols-3 gap-4 p-4">
                    {images.map((url, index) => (
                        <div
                            key={index}
                            className="aspect-square w-full overflow-hidden rounded-lg cursor-pointer"
                            onClick={() => setSelectedImage(url)}
                        >
                            <img
                                src={url}
                                alt="Gallery item"
                                className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>

            </div>

            {/* Right padding */}
            <div className="flex-1" />

            {/* FULLSCREEN MODAL */}
            {selectedImage && (
                <ImageModal
                    src={selectedImage}
                    onClose={() => setSelectedImage(null)}
                    setSelectedImage={setSelectedImage}
                />
            )}
        </div>
    );
}
