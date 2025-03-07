const Maps = () => {
  return (
      <div className="w-full max-w-6xl mt-10 h-80 rounded-xl overflow-hidden shadow-lg border border-border map-frame">
        <iframe
          title="Google Maps"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086167!2d144.95592831590452!3d-37.81720974202143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f31a3b%3A0x3e7e62c92da83e01!2sMelbourne%20City%20Centre!5e0!3m2!1sen!2sau!4v1634567890123!5m2!1sen!2sau"
          allowFullScreen
          loading="lazy"
        />
      </div>
  );
};

export default Maps;
