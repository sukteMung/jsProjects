import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ImageModal from "../components/ImageModal";

export default function ImagesPage() {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    // Fetch images on load
    useEffect(() => {
        fetch("http://localhost:3000/images")
            .then((res) => res.json())
            .then((data) => setImages(data))
            .catch((err) => console.error("Error fetching images:", err));
    }, []);

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
