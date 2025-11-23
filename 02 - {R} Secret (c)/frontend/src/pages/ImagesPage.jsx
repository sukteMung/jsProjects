import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ImageModal from "../components/ImageModal";

export default function ImagesPage() {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    const addImage = () => {
        const description = prompt("Enter a short description for this image:");
        if (!description) return;

        const newImageUrl = prompt("Enter the URL of the new image:");
        if (!newImageUrl) return;


        fetch("http://localhost:3000/images", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                url: newImageUrl,
                description: description,
            }),
        })
            .then(() => fetch("http://localhost:3000/images"))
            .then(res => res.json())
            .then(updated => setImages(updated))
            .catch(err => console.error(err));
    };


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
            <div className="w-[70%] min-h-screen flex flex-col"
                style={{ backgroundColor: "#BBADFF" }}>
                <NavBar pageName="Images" />

                <button
                    className="px-6 py-2 w-60 text-xl font-semibold rounded-lg self-center mt-4
                    hover:scale-105 hover:brightness-90"
                    style={{
                        backgroundColor: "#8E94F2",
                        color: "white",
                        border: `2px solid #9FA0FF`,
                    }}
                    onClick={addImage}>
                    Add New Image
                </button>

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
                                className="w-full h-full 
                                object-cover hover:object-contain 
                                transition-all duration-[900ms]"
                            />
                        </div>
                    ))}
                </div>

            </div>

            {/* Right padding */}
            <div className="flex-1" />

            {/* FULLSCREEN MODAL */}
            {
                selectedImage && (
                    <ImageModal
                        src={selectedImage}
                        onClose={() => setSelectedImage(null)}
                        setSelectedImage={setSelectedImage}
                    />
                )
            }
        </div >
    );
}
