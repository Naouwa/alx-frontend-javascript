import uploadPhoto from './5-photo-reject';

uploadPhoto('guillaume.jpg')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });
