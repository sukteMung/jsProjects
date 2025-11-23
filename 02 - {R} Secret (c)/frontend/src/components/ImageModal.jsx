export default function ImageModal({ src, desc, onClose }) {
    return (
        <div className="fixed inset-0 flex justify-center items-start pt-20 z-50">

            {/* Background blur */}
            <div
                className="absolute inset-0 backdrop-blur-md"
                onClick={onClose}
            />

            {/* POP-UP (container will auto-size to image) */}
            <div className="relative bg-white rounded-xl shadow-2xl p-4 z-50">

                {/* Description / Title */}
                {desc && (
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-md text-lg font-semibold z-50">
                        {desc}
                    </div>
                )}

                <img
                    src={src}
                    alt={desc || "Expanded"}
                    className="max-w-[75vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg"
                />

                {/* Close BTN */}
                <button
                    className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded-md"
                    onClick={onClose}
                >
                    ✕
                </button>
            </div>
        </div>
    );
}
