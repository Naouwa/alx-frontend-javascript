import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const results = await Promise.allSettled([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName),
    ]);

    return results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : `${result.reason}`
    }));
  } catch (error) {
    console.error('Error handling profile signup:', error);
    throw error; // Re-throw the error if necessary
  }
}
