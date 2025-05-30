import "../styles/DictionaryGallery.css";

export default function DictionaryGallery({ gallery }) {
  console.log(gallery);
  if (gallery) {
    let credit;
    return (
      <div className="DictionaryGallery container">
        <div className="row">
          {gallery.map((photo, index) => {
            credit = `Credit : ${photo.photographer} `;
            return (
              <div className="photo col-sm-6" key={index}>
                <a
                  href={photo.url}
                  target="_blank"
                  rel="noreferrer"
                  title={photo.url}
                >
                  <img
                    src={photo.src.tiny}
                    alt={photo.alt}
                    title={credit}
                    className="img-fluid shadow"
                  />
                </a>
              </div>
            );
          })}
          <a
            href="https://www.pexels.com"
            target="_blank"
            rel="noreferrer"
            title= "Click to head to Pexels website"
            className="text-center"
          >
            Photos provided by <span>Pexels</span>
          </a>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
