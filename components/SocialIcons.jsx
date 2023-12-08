// import React from 'react';
// import Link from 'next/link';
// import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
// import { FaThreads, FaXTwitter, FaYoutube } from 'react-icons/fa6';

// const SocialIcons = ({ className, titleStyle }) => {
//     const getSocials = async () => {
//         try {
//             const data = await getEntries({
//                 entryURL: undefined,
//                 contentTypeUid: CONSTANTS.CONTENT_TYPE.SOCIALS,
//                 referenceFieldPath: undefined,
//                 jsonRtePath: undefined,
//             }, {
//                 skip: 0,
//                 order: ORDER.DESC,
//             });

//             if (!_.isEmpty(data)) {
//                 let socials = JSON.parse(JSON.stringify(data));
//                 return socials;
//             } else return [{}];
//         } catch (error) {
//             console.error("Error fetching social media data:", error);
//             return [{}];
//         }
//     };

//     const fetchData = async () => {
//         const data = await getSocials();
//         const socials = data[0];
//         return socials;
//     };

//     const socials = fetchData();

//     return (
//         <>
//             <p className={cn('text-sm', titleStyle)}>{socials.title}</p>
//             <div className='flex gap-3 text-white'>
//                 {socials.social_media_links.map((social, i) => (
//                     <Link
//                         href={social.link}
//                         key={i}
//                         target='_blank'
//                         className={cn(
//                             'p-1 transition duration-300 ease-out rounded-lg hover:bg-white hover:text-darkgrey',
//                             className
//                         )}
//                     >
//                         {social.platform == 'LinkedIn' && <FaLinkedinIn />}
//                         {social.platform == 'Instagram' && <FaInstagram />}
//                         {social.platform == 'Facebook' && <FaFacebookF />}
//                         {social.platform == 'Twitter' && <FaXTwitter />}
//                         {social.platform == 'Threads' && <FaThreads />}
//                         {social.platform == 'Youtube' && <FaYoutube />}
//                     </Link>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default SocialIcons;




import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className="icon" />
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="icon" />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="icon" />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="icon" />
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="icon" />
      </a>
    </div>
  );
};

export default SocialIcons;

