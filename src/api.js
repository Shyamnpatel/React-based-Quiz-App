import axios from 'axios';


export const fetchData = async () => {
  try {
    const response = await fetch('YOUR_API_URL'); 
    const data = await response.json(); 
    console.log('API Data:', data); 
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; 
  }
};

