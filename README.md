# Prueba-integracion-react 💻⚛️

# Padre e hijo
En el presente proyecto se realiza una prueba de integración entre los componentes Padre e Hijo

- El componente Padre conteneriza el componente hijo, donde el componente Hijo por medio del uso de funciones *handle* hacen uso de Hooks (variables de estado) y eventos en la etiquetas input y button

  
**Alcance**
  
El alcance principal de la prueba se centra en la comunicación y la interacción entre estos ambos componentes, donde se esta verificando cómo el componente padre se comunica con su hijo y cómo el hijo    interactúa con el padre a través de ciertos eventos y cambios de estado.


**Imagen ilustrativa**

 ![image](https://github.com/9pasb6/Prueba-integracion-react/assets/100176897/5453c91c-9700-4a90-8fc8-5bbd7678313d)




**Funciones en Hijo**
-  handleChange: Captura la entreda del valor del input y hace uso de la funcion del hook para actualizar el valor inicial del input
-  handleSummit: Luego, le settea el valor capturado al padre a travez de la función onTextChange


**Funciones en Padre**
-  handleChange: Captura la entreda del valor enviado por el Hijo a traves de la funcion onTextChange  y hace uso de la funcion del hook para actualizar el valor inicial


**Herramientas de testing**
- Jest
-  Testing Library

**Clases principales**

  ![image](https://github.com/9pasb6/Prueba-integracion-react/assets/100176897/382ef056-65ad-4d4a-85d9-df04d7bbcb68)


  Ademas de la prueba de integración, se realizaron pruebas unitarias al componente App y componente Padre


