import ShareOnFacebook from './ShareOnFacebook';
import image from './assets/image.jpg';
import share from './assets/share.png';
const Card = ({
  showModal,
  setShowModal,
  copy_function,
  copyText,
  shareUrl,
  title,
}) => {
  return (
    <div className="card_container">
      <div className="card_container__image_title">
        <div className="image_container">
          <img src={image} />
        </div>
        <div className="card_title">{title || 'noTitle'}</div>
      </div>
      <button
        onClick={() => {
          window.open(shareUrl, '_blank');
        }}
        className="openProduct"
      >
        <img src={share} />
      </button>
      <ShareOnFacebook
        showModal={showModal}
        setShowModal={setShowModal}
        copy_function={copy_function}
        copyText={copyText}
        className={'home_page_container_icon__share'}
        shareUrl={shareUrl}
      />
    </div>
  );
};

export default Card;
