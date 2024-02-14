import React, { useState } from 'react';
import { FacebookProvider } from 'react-facebook';
import ShareRow from './ShareRow';
import FaceBook from './assets/icons8-facebook-48.png';
import email from './assets/icons8-email-48.png';
import linkedin from './assets/icons8-linkedin-48.png';
import telegram from './assets/icons8-telegram-48.png';
import twitter from './assets/icons8-twitter-48.png';
const ShareOnFacebook = ({ shareUrl, className }) => {
  const [showModal, setShowModal] = useState(false);
  const [copyText, setCopyText] = useState(false);
  const copy_function = (value) => {
    navigator.clipboard.writeText(value);
    setCopyText(true);
    setInterval(() => {
      setCopyText(false);
    }, 2000);
  };
  const handleShare = () => {
    // You can customize the URL and other parameters as needed

    // Open the Facebook Share Dialog
    window.FB.ui(
      {
        method: 'share',
        href: shareUrl,
      },
      function (response) {}
    );
  };

  const handleShareOnTwitter = () => {
    const tweetText = encodeURIComponent('Your tweet text goes here');
    const tweetUrl = encodeURIComponent(shareUrl);

    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`;

    window.open(twitterShareUrl, '_blank');
  };
  const handleShareOnTelegram = () => {
    const textToShare = encodeURIComponent('Your message goes here');
    const tweetUrl = encodeURIComponent(shareUrl);
    const telegramShareUrl = `https://t.me/share/url?&text=${textToShare}&url=${tweetUrl}`;

    window.open(telegramShareUrl, '_blank');
  };
  const handleShareOnLinkedIn = () => {
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      shareUrl
    )}&text=${encodeURIComponent('Your message goes here')}`;

    window.open(linkedInShareUrl, '_blank');
  };
  const handleShareViaEmail = () => {
    const emailSubject = encodeURIComponent('Check out this link!');
    const emailBody = encodeURIComponent(
      'Hi,\n\nI thought you might find this link interesting:\nhttps://your-website.com'
    );

    const mailtoLink = `mailto:?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoLink;
  };
  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setShowModal(true);
        }}
        className={className}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="20px"
          height="20px"
        >
          <path d="M 40 0 C 34.53125 0 30.066406 4.421875 30 9.875 L 15.90625 16.9375 C 14.25 15.71875 12.207031 15 10 15 C 4.488281 15 0 19.488281 0 25 C 0 30.511719 4.488281 35 10 35 C 12.207031 35 14.25 34.28125 15.90625 33.0625 L 30 40.125 C 30.066406 45.578125 34.53125 50 40 50 C 45.511719 50 50 45.511719 50 40 C 50 34.488281 45.511719 30 40 30 C 37.875 30 35.902344 30.675781 34.28125 31.8125 L 20.625 25 L 34.28125 18.1875 C 35.902344 19.324219 37.875 20 40 20 C 45.511719 20 50 15.511719 50 10 C 50 4.488281 45.511719 0 40 0 Z M 40 2 C 44.429688 2 48 5.570313 48 10 C 48 14.429688 44.429688 18 40 18 C 38.363281 18 36.859375 17.492188 35.59375 16.65625 C 35.46875 16.238281 35.089844 15.949219 34.65625 15.9375 C 34.652344 15.933594 34.628906 15.941406 34.625 15.9375 C 33.230469 14.675781 32.292969 12.910156 32.0625 10.9375 C 32.273438 10.585938 32.25 10.140625 32 9.8125 C 32.101563 5.472656 35.632813 2 40 2 Z M 30.21875 12 C 30.589844 13.808594 31.449219 15.4375 32.65625 16.75 L 19.8125 23.1875 C 19.472656 21.359375 18.65625 19.710938 17.46875 18.375 Z M 10 17 C 11.851563 17 13.554688 17.609375 14.90625 18.65625 C 14.917969 18.664063 14.925781 18.679688 14.9375 18.6875 C 14.945313 18.707031 14.957031 18.730469 14.96875 18.75 C 15.054688 18.855469 15.160156 18.9375 15.28125 19 C 15.285156 19.003906 15.308594 18.996094 15.3125 19 C 16.808594 20.328125 17.796875 22.222656 17.96875 24.34375 C 17.855469 24.617188 17.867188 24.925781 18 25.1875 C 17.980469 25.269531 17.96875 25.351563 17.96875 25.4375 C 17.847656 27.65625 16.839844 29.628906 15.28125 31 C 15.1875 31.058594 15.101563 31.132813 15.03125 31.21875 C 13.65625 32.332031 11.914063 33 10 33 C 5.570313 33 2 29.429688 2 25 C 2 20.570313 5.570313 17 10 17 Z M 19.8125 26.8125 L 32.65625 33.25 C 31.449219 34.5625 30.589844 36.191406 30.21875 38 L 17.46875 31.625 C 18.65625 30.289063 19.472656 28.640625 19.8125 26.8125 Z M 40 32 C 44.429688 32 48 35.570313 48 40 C 48 44.429688 44.429688 48 40 48 C 35.570313 48 32 44.429688 32 40 C 32 37.59375 33.046875 35.433594 34.71875 33.96875 C 34.742188 33.949219 34.761719 33.929688 34.78125 33.90625 C 34.785156 33.902344 34.808594 33.910156 34.8125 33.90625 C 34.972656 33.839844 35.113281 33.730469 35.21875 33.59375 C 36.554688 32.597656 38.199219 32 40 32 Z" />
        </svg>
      </button>
      <div
        className={`share_container ${showModal && 'share_popup_active'}`}
        onClick={() => {
          setShowModal(false);
        }}
      >
        <div
          className={`share_popup`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="titile_container">
            <h2>Share HashTag</h2>
            <button
              className="closeButtonSharePopup"
              onClick={() => setShowModal(false)}
            >
              <svg
                fill="#ffffff"
                height="800px"
                width="800px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 490 490"
                xml:space="preserve"
              >
                <polygon
                  points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
	489.292,457.678 277.331,245.004 489.292,32.337 "
                />
              </svg>
            </button>
          </div>
          <div className="copy_webSite">
            <p>{shareUrl}</p>
            <button
              className="copy_button"
              onClick={() => copy_function(shareUrl)}
            >
              {!copyText ? (
                <svg
                  fill="#000000"
                  height="800px"
                  width="800px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 64 64"
                  enable-background="new 0 0 64 64"
                  xml:space="preserve"
                >
                  <g id="Text-files">
                    <path
                      d="M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228
		C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999
		c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64
		h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002
		C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228
		c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999
		c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z
		 M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699
		c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946
		c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999
		h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z"
                    />
                    <path
                      d="M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005
		c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997
		C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z"
                    />
                    <path
                      d="M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986
		c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016
		C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z"
                    />
                    <path
                      d="M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
		s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997
		S39.16465,29.4603004,38.6031494,29.4603004z"
                    />
                    <path
                      d="M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
		s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997
		S29.0059509,37.5872993,28.4444485,37.5872993z"
                    />
                  </g>
                </svg>
              ) : (
                <svg
                  width="15px"
                  height="15px"
                  viewBox="0 -0.5 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.15"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path
                      d="M5.5 12.5L10.167 17L19.5 8"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{' '}
                  </g>
                </svg>
              )}
            </button>
          </div>
          <FacebookProvider appId="908225494182567">
            <ShareRow
              text={'Share on facebook'}
              icon={FaceBook}
              onClick={handleShare}
            />
            <ShareRow
              text={'Share on Twitter'}
              icon={twitter}
              onClick={handleShareOnTwitter}
            />
            <ShareRow
              text={'Share on Telegram'}
              icon={telegram}
              onClick={handleShareOnTelegram}
            />
            <ShareRow
              text={'Share on LinkedIn'}
              icon={linkedin}
              onClick={handleShareOnLinkedIn}
            />
            <ShareRow
              text={'Share via Email'}
              icon={email}
              onClick={handleShareViaEmail}
            />
          </FacebookProvider>
          <div>
            <p className="footer1">Just one link for everything.</p>
            <p className="footer2">Truested by 3.5m+ customers.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareOnFacebook;
