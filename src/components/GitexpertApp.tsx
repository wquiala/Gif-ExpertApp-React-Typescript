import React, { useState } from 'react';
import AddCategories from './AddCategories';
import GifGrid from './GifGrid';

const GitexpertApp = () => {
  //const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categorias, setCategorias] = useState<string[]>(['One Punch']);

  /* const handleAdd = () => {
    setCategorias([...categorias, 'XHunter']);

    //Otra solucion es setCategorias((category) => [...category, 'Wilfre']);
  };
 */
  return (
    <>
      <h2>gitexpertAll</h2>
      <AddCategories setCategoria={setCategorias} />
      <hr />

      <ol>
        {categorias.map((category) => {
          //return <li key={category}>{category}</li>;
          return <GifGrid key={category} categoria={category} />;
        })}
      </ol>
    </>
  );
};

export default GitexpertApp;
