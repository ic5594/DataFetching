export async function fetchAvailablePlace() {
  const response = await fetch('http://localhost:3000/places');
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch places');
  }

  return resData.places;
}

export async function fetchUserPlace() {
  const response = await fetch('http://localhost:3000/user-places');
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch user places');
  }
  console.log('fetch-user-place !!')
  return resData.places;
}

export async function updateUserPlace(places) {
  const response = await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
    body: JSON.stringify({places: places}),
    headers: {
      'Content-type': 'application/json'
    }
  });
  const resDate = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch put user places');
  }

  return resDate.message;
}