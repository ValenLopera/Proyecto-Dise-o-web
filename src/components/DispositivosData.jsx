
const dispositivosData = [
    { 
      id: 1, 
      name: 'Implante de cadera', 
      image:'/cadera.png', 
      width: 130, 
      height: 100,
      description:'Los implantes de cadera son dispositivos médicos utilizados para reemplazar articulaciones de cadera dañadas o desgastadas. Están compuestos generalmente de aleaciones de titanio, cobalto-cromo-molibdeno o polietileno de ultra alto peso molecular (UHMWPE) debido a sus propiedades de alta resistencia y biocompatibilidad. Estos implantes son esenciales para mejorar la movilidad y aliviar el dolor en pacientes con problemas articulares en la cadera. Su importancia radica en restaurar la calidad de vida de los pacientes al permitirles mantener un estilo de vida activo y cómodo. Los componentes clave incluyen una cabeza esférica y una copa que se insertan en el fémur y la cavidad de la cadera, respectivamente.',
      biomaterialesId:[1,2],
      aleacionesId:[1],
      proveedoresId:[1,7],
    },
    { 
      id: 2, 
      name: 'Stent Vascular', 
      image:'/stent.jpg', 
      width: 130, 
      height: 300,
      description:'Los stents vasculares son pequeñas mallas tubulares, comúnmente hechas de Nitinol u otras aleaciones metálicas, que se utilizan para mantener abiertos los vasos sanguíneos y restaurar el flujo sanguíneo en arterias obstruidas. Son fundamentales en el tratamiento de enfermedades cardiovasculares, como la enfermedad arterial coronaria, al prevenir la obstrucción de las arterias y reducir el riesgo de ataques cardíacos. Su importancia radica en mejorar la salud cardiovascular de los pacientes. Los principales componentes incluyen el stent en sí, que se expande para mantener la arteria abierta.',
      biomaterialesId:[1,6],
      aleacionesId:[2],
      proveedoresId:[2],
    },
    { 
      id: 3, 
      name: 'Prótesis de rodilla', 
      image:'/rodilla.png', 
      width: 130, 
      height: 300,
      description:'Las prótesis de rodilla son dispositivos médicos diseñados para reemplazar articulaciones de rodilla dañadas o desgastadas. Están fabricadas generalmente con aleaciones de cobalto-cromo-molibdeno debido a su alta resistencia y durabilidad. Estas prótesis restauran la movilidad y alivian el dolor en pacientes con problemas articulares en la rodilla, permitiéndoles volver a realizar actividades diarias y mejorar su calidad de vida. Su importancia radica en restaurar la movilidad y el bienestar de los pacientes. Los componentes clave incluyen una parte superior metálica y una parte inferior que se ancla en el hueso de la pierna.',
      biomaterialesId:[7,8,9],
      aleacionesId:[3],
      proveedoresId:[3],
    },
    { 
      id: 4, 
      name: 'Prótesis dental', 
      image:'/dentales.png', 
      width: 160,
      height: 200,
      description:' Las prótesis dentales son dispositivos médicos utilizados para reemplazar dientes perdidos o dañados. Pueden estar hechas de aleaciones como el níquel-cromo o el cobalto-cromo, que son resistentes a la corrosión y biocompatibles. Las prótesis dentales restauran la función masticatoria y la estética dental en pacientes con problemas dentales, mejorando su capacidad para comer y sonreír con confianza. Su importancia radica en mejorar la salud bucal, la digestión y la autoestima de los pacientes. Los componentes clave incluyen la estructura que soporta las coronas o dientes artificiales.',
      biomaterialesId:[6,8],
      aleacionesId:[4],
      proveedoresId:[4],
      },
    { 
      id: 5, 
      name: 'Marcapasos' , 
      image:'/marcapasos.webp', 
      width: 160, 
      height: 300,
      description:'Los marcapasos son dispositivos médicos implantables utilizados para regular el ritmo cardíaco en pacientes con trastornos del ritmo cardíaco, como la bradicardia. Contienen componentes esenciales, como cables conductores y electrodos, fabricados con materiales como el molibdeno-titanio (Mo-Ti). Los marcapasos son cruciales para mantener un ritmo cardíaco saludable y prevenir complicaciones cardíacas potencialmente mortales. Su importancia radica en su capacidad para salvar vidas al garantizar el funcionamiento adecuado del corazón. Los componentes clave incluyen electrodos y una carcasa.',
      biomaterialesId:[7,8],
      aleacionesId:[5],
      proveedoresId:[5],
    },
    { 
      id: 6, 
      name: 'Implante dental', 
      image:'/implantes-dentales.jpg', 
      width: 200, 
      height: 300,
      description:'Los implantes dentales son dispositivos médicos utilizados para reemplazar dientes perdidos. Suelen estar hechos de titanio, que es conocido por su biocompatibilidad y capacidad de fusionarse con el hueso. Los implantes dentales restauran la función masticatoria y la estética dental en pacientes con dientes faltantes, mejorando su calidad de vida y salud bucal. Su importancia radica en proporcionar una solución duradera y efectiva para reemplazar dientes ausentes. Los componentes clave incluyen un tornillo de titanio y una corona dental.',
      biomaterialesId:[1,9],
      aleacionesId:[6], 
      proveedoresId:[6,8],
    },
    { 
      id: 7, 
      name: 'Lentes de contacto', 
      image:'/lentedecontacto.jpg', 
      width: 230, 
      height: 300,
      description:'Las lentes de contacto son dispositivos ópticos usados para corregir problemas de visión, como miopía, hipermetropía, astigmatismo y presbicia. Están hechas de materiales blandos o rígidos y se ajustan cómodamente sobre la córnea.Proporcionan una alternativa cómoda y estética a los anteojos tradicionales. También se utilizan en el tratamiento de ciertas afecciones oculares, como el queratocono, y para fines cosméticos, como cambiar el color de los ojos. Proporcionan una visión más nítida y amplia que los anteojos, lo que es especialmente útil para actividades deportivas y situaciones en las que los anteojos pueden ser incómodos o inconvenientes. Además, las lentes de contacto son versátiles y se adaptan a una variedad de necesidades visuales.',
      biomaterialesId:[3],
      aleacionesId:[7], 
      proveedoresId:[],
    },
    { 
      id: 8, 
      name: 'Tubos y envases medicos', 
      image:'/tubo.jpg', 
      width: 100, 
      height: 300,
      description:'Los envases fabricados con polietileno de alta densidad (HDPE) son recipientes utilizados en la industria de la medicina para almacenar y administrar soluciones intravenosas, como sueros y medicamentos líquidos. Estos envases están hechos de HDPE, un polímero termoplástico conocido por su alta densidad y resistencia.Estos envases se utilizan para administrar líquidos como soluciones salinas, medicamentos, nutrientes y otros tratamientos médicos directamente en el torrente sanguíneo de los pacientes',
      biomaterialesId:[4],
      aleacionesId:[], 
      proveedoresId:[],
    },
    { 
      id: 9, 
      name: 'Implantes ortopédicos', 
      image:'/implantecolumna.jpg', 
      width: 200, 
      height: 300,
      description:'',
      biomaterialesId:[5],
      aleacionesId:[], 
      proveedoresId:[],
    },
  ];

  export default dispositivosData;