

export default function SecondSectionCard ({ image, title, description }) {
    return (
      <div className="w-1/2 h-auto flex flex-col justify-center items-center">
      <div className="bg-black overflow-hidden">
        {image && (
          <img className="" src={image} alt={title} />
        )}

        <div className="p-4">
          <h3 className="text-5xl font-bold">{title}</h3>
          {description && (
            <p className="mt-6 text-2xl text-white">{description}</p>
          )}
        </div>
      </div>
      </div>
    );
  };