export const request = async () => {
  const response = await fetch('https://backendless-7965c-default-rtdb.firebaseio.com/tabs.json');

  if (!response.ok) {
    throw new Error(`Could not fetch ${response.url}, status: ${response.status}`);
  }

  const data = await response.json();
  const arr = [];

  for (const key in data) {
    arr.push({
      id: key,
      ...data[key]
    });
  }

  return arr
}