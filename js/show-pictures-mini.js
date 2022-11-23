import {createPosts} from './create-posts.js';
import {openBigPictureWindow} from './show-pictures-full';

const pictureListElement = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const renderPosts = () => {
  const readyPosts = createPosts;
  const pictureListFragment = document.createDocumentFragment();

  readyPosts.forEach(({url, likes, comments, description}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    pictureElement.querySelector('img').addEventListener('click', () => {
      openBigPictureWindow({url, likes, comments, description});
      pictureListFragment.appendChild(pictureElement);
    });
  });

  pictureListElement.appendChild(pictureListFragment);
};
export {renderPosts};
