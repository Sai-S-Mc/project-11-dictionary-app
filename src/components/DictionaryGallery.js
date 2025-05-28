import "../styles/DictionaryGallery.css";

export default function DictionaryGallery({ gallery }) {
  console.log(gallery);
  let credit;
  return (
    <div className="DictionaryGallery container">
      <div className="row">
        {gallery.map((photo, index) => {
          credit = `Credit : ${photo.photographer} `;
          return (
            <div className="photo col-sm-4" key={index}>
              <a href={photo.url} target="_blank" rel="noreferrer">
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
      </div>
    </div>
  );
}
