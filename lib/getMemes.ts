const getMemes = async () => {
    try {
      const response = await fetch('http://localhost:3000/api');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

    export default getMemes;


