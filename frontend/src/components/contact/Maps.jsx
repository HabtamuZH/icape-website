const Maps = () => {
  return (
      <div className="w-full max-w-6xl mt-10 h-80 rounded-xl overflow-hidden shadow-lg border border-border map-frame">
        <iframe
          title="Google Maps"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.499521907303!2d38.794622573838886!3d9.018113491042786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b854f574dec75%3A0x76a81aaefd06a95e!2siCAPE%20Consulting!5e0!3m2!1sen!2set!4v1741533110994!5m2!1sen!2set"
          allowFullScreen
          loading="lazy"
        />
      </div>
  );
};

export default Maps;
