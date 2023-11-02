const biomaterialesData = [
  { 
    id: 1, 
    name: 'Titanio', 
    image:'/Titanio.webp', 
    width: 250, 
    height: 300,
    description:'El titanio es un material biomédico altamente valorado debido a su excepcional biocompatibilidad, resistencia a la corrosión, alta resistencia y baja densidad, lo que lo hace idóneo para aplicaciones médicas como implantes ortopédicos y dispositivos dentales. Su capacidad de osteointegración, durabilidad a largo plazo y facilidad de mecanizado hacen que sea esencial en la fabricación de dispositivos médicos que requieren adaptabilidad y longevidad, permitiendo mejorar la calidad de vida de pacientes que necesitan prótesis y tratamientos médicos implantables.',
    aleacionesId:[1,2,6],
    dispositivosId:[1,2,6],
  },
  { 
    id: 2, 
    name: 'Vanadio', 
    image:'/vanadio.png', 
    width: 240, 
    height: 300,
    description:'El vanadio es un elemento que ha demostrado su utilidad en el campo de los biomateriales. Su principal ventaja radica en su capacidad para formar aleaciones, como el titanio-vanadio, que combinan la biocompatibilidad del titanio con una mayor resistencia mecánica. Estas aleaciones son particularmente valiosas en aplicaciones de dispositivos médicos que requieren fuerza y durabilidad, como placas y tornillos en cirugía ortopédica. Además, el vanadio es apreciado por su capacidad de liberar iones que promueven la formación ósea, lo que favorece la osteointegración. Aunque su uso no es tan extendido como el titanio, el vanadio sigue siendo un material prometedor en el desarrollo de biomateriales avanzados.',
    aleacionesId:[1],
    dispositivosId:[1],
  },
  { 
    id: 3, 
    name: 'Hidrogel', 
    image:'/Gelatine-3.jpg', 
    width: 220, 
    height: 300 ,
    description:'Los hidrogeles son biomateriales poliméricos que se destacan en el campo de la ingeniería de tejidos y aplicaciones médicas debido a su naturaleza altamente hidratada y semejante a los tejidos biológicos. Su característica distintiva es su capacidad para retener grandes cantidades de agua en una matriz tridimensional, lo que les confiere una textura suave y flexible que se asemeja a los tejidos vivos. Los hidrogeles son versátiles y pueden diseñarse para ser biocompatibles y biodegradables, lo como los hace idóneos para su uso en aplicaciones como lentes de contacto, apósitos para heridas, liberación controlada de fármacos, y la ingeniería de tejidos, donde pueden proporcionar un soporte tridimensional para el crecimiento celular y la regeneración de tejidos. Su capacidad de absorber y liberar agua, junto con su capacidad de modificarse químicamente, los convierte en una herramienta valiosa para abordar desafíos médicos y biomédicos específicos.',
    aleacionesId:[7],
    dispositivosId:[7],
  },
  { 
    id: 4, 
    name: 'Polietileno de alta densidad', 
    image:'/pead.jpg', 
    width: 260, 
    height: 200 ,
    description:'El polietileno de alta densidad (PEAD) es un polímero termoplástico que, aunque no es un biomaterial en sí mismo, se ha utilizado en aplicaciones biomédicas debido a su durabilidad, biocompatibilidad y resistencia química. En el contexto de los biomateriales, el PEAD se emplea principalmente para fabricar componentes como prótesis articulares y componentes ortopédicos, gracias a su capacidad para soportar cargas mecánicas y su bajo desgaste en entornos biológicos. Su superficie lisa y biocompatible minimiza la fricción y reduce la irritación en las articulaciones artificiales. Además, su facilidad de procesamiento y moldeado lo hacen útil para una variedad de aplicaciones médicas, lo que lo convierte en un material valioso en la mejora de la calidad de vida de los pacientes que requieren dispositivos médicos de larga duración.',
    aleacionesId:[],
    dispositivosId:[8],
  },
  { 
    id: 5, 
    name: 'Polietileno de ultra alto peso molecular' , 
    image:'/UHMWPE.png', 
    width: 210, 
    height: 300,
    description:'El polietileno de ultra alto peso molecular (UHMWPE) es un biomaterial ampliamente utilizado en aplicaciones médicas debido a sus propiedades sobresalientes. Su estructura molecular única le confiere una alta resistencia a la abrasión y una excelente resistencia al desgaste, lo que lo hace ideal para componentes ortopédicos, como articulaciones artificiales y componentes de implantes. Su biocompatibilidad y baja reactividad química lo hacen seguro para su uso en el cuerpo humano. Además, el UHMWPE es conocido por su capacidad de lubricación interna, lo que reduce la fricción y el desgaste en articulaciones implantadas, promoviendo una mayor durabilidad y una recuperación más rápida en pacientes. Estas características hacen que el UHMWPE sea un material esencial en la fabricación de dispositivos médicos de alto rendimiento que mejoran la calidad de vida de quienes necesitan soluciones ortopédicas y articulares.',
    aleacionesId:[],
    dispositivosId:[9],
  },
  { 
    id: 6, 
    name: 'Niquel', 
    image:'/niquel.png', 
    width: 170, 
    height: 300 ,
    description:'Aunque el níquel es un material comúnmente utilizado en diversas aplicaciones industriales, su uso en biomateriales está limitado debido a preocupaciones sobre la alergenicidad y la toxicidad potencial. En el campo de los biomateriales, el níquel se utiliza con precaución, y en algunos casos, se busca minimizar su liberación en aplicaciones como prótesis dentales y ortopédicas. A pesar de su resistencia y durabilidad, la biocompatibilidad limitada del níquel ha llevado al desarrollo de aleaciones y recubrimientos diseñados específicamente para reducir su exposición y mitigar los riesgos asociados con su uso en aplicaciones biomédicas. En general, el níquel no es un biomaterial de elección en comparación con otros como el titanio o el acero inoxidable, que ofrecen una biocompatibilidad superior y una menor probabilidad de provocar reacciones adversas en el cuerpo.',
    aleacionesId:[2,4],
    dispositivosId:[2,4],
  },
  { 
    id: 7, 
    name: 'Cobalto', 
    image:'/cobalto3.png', 
    width: 200, 
    height: 300 ,
    description:'El cobalto es un material que se utiliza en aplicaciones biomédicas, especialmente en aleaciones con otros metales como el cromo y el molibdeno, para crear aceros inoxidables y aleaciones de cobalto-cromo que son valiosos en la fabricación de dispositivos médicos, como prótesis articulares y componentes de implantes ortopédicos. Estas aleaciones ofrecen una excelente resistencia mecánica y durabilidad, lo que es esencial en aplicaciones que experimentan cargas repetidas, como las articulaciones artificiales. Sin embargo, es importante destacar que, en algunos casos, el cobalto puede liberarse en el cuerpo y causar reacciones adversas, por lo que su uso en biomateriales se realiza con precaución y bajo monitoreo constante para minimizar riesgos y garantizar la seguridad de los pacientes.',
    aleacionesId:[5],
    dispositivosId:[5],
  },
  { 
    id: 8, 
    name: 'Cromo', 
    image:'/Cromo.png', 
    width: 250, 
    height: 300 ,
    description:'El cromo es un elemento que se utiliza en biomateriales, principalmente en aleaciones de cobalto-cromo y titanio-cromo, debido a su capacidad para mejorar la resistencia a la corrosión y la durabilidad de los dispositivos médicos. Estas aleaciones son valiosas en aplicaciones biomédicas, como prótesis articulares y componentes de implantes, ya que pueden resistir ambientes biológicos y mecánicos desafiantes. El cromo también contribuye a la biocompatibilidad de estos materiales al formar óxidos protectores en la superficie, reduciendo la liberación de iones y minimizando el riesgo de reacciones adversas en el cuerpo. Sin embargo, como con otros metales en biomateriales, se monitorea cuidadosamente para asegurar su seguridad y reducir al mínimo cualquier liberación potencial de cromo en el cuerpo del paciente.',
    aleacionesId:[4,5],
    dispositivosId:[4,5],
  },
  { 
    id: 9, 
    name: 'Molibdeno', 
    image:'/molibdeno - copia.png', 
    width: 250, 
    height: 200 ,
    description:'El molibdeno es un metal que ha encontrado aplicaciones en el campo de los biomateriales en forma de aleaciones, como el molibdeno-cromo. Estas aleaciones se valoran por su excelente resistencia a la corrosión y alta resistencia mecánica, lo que los hace adecuados para su uso en dispositivos médicos, como prótesis ortopédicas y componentes de implantes. El molibdeno-cromo es especialmente útil en aplicaciones que requieren resistencia a ambientes biológicos agresivos, ya que mantiene su integridad estructural a lo largo del tiempo. Además, el molibdeno es biocompatible y puede soportar condiciones estériles y de implantación, lo que lo convierte en un componente valioso en la fabricación de dispositivos médicos duraderos y seguros.',
    aleacionesId:[3,6],
    dispositivosId:[3,6],
  },
];

export default biomaterialesData;