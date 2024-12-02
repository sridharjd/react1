import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Axios1 = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts)
  
  useEffect(() => {
    axios.get('https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/2244/property/MolecularFormula/JSON')
      .then(response => setPosts(response.data.PropertyTable.Properties[0].MolecularFormula))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
        <h3>cid:2244 in Pubchem is : {posts || 'Loading...'}</h3>
    </div>
  );
};

export default Axios1;
