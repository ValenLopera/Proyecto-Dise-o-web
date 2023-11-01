
const dispositivosData = [
    { 
      id: 1, 
      name: 'Implante de cadera', 
      image:'/cadera.png', 
      width: 150, 
      height: 100,
      description:'',
      biomaterialesId:[1,2],
      aleacionesId:[1],
    },
    { 
      id: 2, 
      name: 'Stent Vascular', 
      image:'/stent.jpg', 
      width: 150, 
      height: 300,
      description:'',
      biomaterialesId:[1,6],
      aleacionesId:[2],
    },
    { 
      id: 3, 
      name: 'Prótesis de rodilla', 
      image:'/rodilla.png', 
      width: 160, 
      height: 300,
      description:'',
      biomaterialesId:[7,8,9],
      aleacionesId:[3],
    },
    { 
      id: 4, 
      name: 'Prótesis dental', 
      image:'/dentales.png', 
      width: 220,
      height: 200,
      description:'',
      biomaterialesId:[6,8],
      aleacionesId:[4],
      },
    { 
      id: 5, 
      name: 'Marcapasos' , 
      image:'/marcapasos.webp', 
      width: 190, 
      height: 300,
      description:'',
      biomaterialesId:[7,8],
      aleacionesId:[5],
    },
    { 
      id: 6, 
      name: 'Implante dental', 
      image:'/implantes-dentales.jpg', 
      width: 240, 
      height: 300,
      description:'',
      biomaterialesId:[1,9],
      aleacionesId:[6], 
    },
  ];

  export default dispositivosData;