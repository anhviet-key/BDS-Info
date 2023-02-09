/** @format */

import axios from 'axios';



export const productConfig = () =>
  axios.get(
    'https://63e3b3fdd56aa92407ba74c5--coruscating-flan-0a72d7.netlify.app/api/products'
  );
export const productId = (productId) =>
  axios.get(
    `https://63e3b3fdd56aa92407ba74c5--coruscating-flan-0a72d7.netlify.app/api/products/${productId}`
  );
export const projectConfig = () =>
  axios.get(
    'https://63e3b3fdd56aa92407ba74c5--coruscating-flan-0a72d7.netlify.app/api/project'
  );
export const projectId = (projectId) =>
  axios.get(
    `https://63e3b3fdd56aa92407ba74c5--coruscating-flan-0a72d7.netlify.app/api/${projectId}`
  );
