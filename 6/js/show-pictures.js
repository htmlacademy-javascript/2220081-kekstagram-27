import {createPosts} from './create-posts.js';

const pictureListElement = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const renderPosts = () => {
  const readyPosts = createPosts;
  const pictureListFragment = document.createDocumentFragment();

  readyPosts.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    pictureListFragment.appendChild(pictureElement);
  });

  pictureListElement.appendChild(pictureListFragment);
};
export {renderPosts};
