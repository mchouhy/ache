# Ache Store
Es un proyecto de e-commerce de una tienda de productos de decoración para el hogar que se ha realizado como trabajo final del curso de React Js impartido por Coderhouse. La aplicación permite ver un listado de productos, filtrar por categorías y realizar una ficción de compra en línea. Todos los datos de la aplicación se almacenan en el servicio de Firebase de Google.

## Tecnologías
- Vite
- React
- Bootstrap
- Firebase

## Funcionalidades
- Ver listado de todos los productos de la tienda.
- Ver listado de productos filtrados por categorías.
- Agregar productos a un carrito de compras.
- Ver productos agregados al carrito de compras.
- Ejecutar una orden de compra y recibir número de identificación de la orden realizada.
- Guardar datos del comprador en Firebase.

## Instalación

### Para la instalación y ejecución de la aplicación, sigue estos pasos:

1. Clonar el repositorio a tu ordenador.
2. Abrir una terminal en el directorio del proyecto clonado.
3. Ejecutar el comando 'npm install' a los fines de instalar las depedencias necesarias para la ejecución de la aplicación.
4. Ejecutar el comando 'npm run dev' para iniciar la aplicación en un host local.
5. Abrir el navegador en la dirección web que figura como 'localhost'.

## Configuración de Firebase (Google):

### Paso 1: Crear un proyecto de Firebase
1. Crear una cuenta en Firebase.
2. En Firebase console, haz clic en Agregar proyecto.
    2.1 Para agregar recursos de Firebase a un proyecto existente de Google Cloud, ingresa el nombre del proyecto o selecciónalo en el menú desplegable.
    2.2 Para crear un proyecto nuevo, ingresa el nombre que quieras. También puedes editar el ID del proyecto que aparece debajo del nombre.
Firebase genera un ID único para tu proyecto en función del nombre que le asignes. Si quieres editar el ID del proyecto, debes hacerlo ahora, ya que no podrás cambiarlo después de que Firebase aprovisione los recursos para tu proyecto. Consulta la Información sobre los proyectos de Firebase para obtener detalles sobre cómo usa Firebase el ID del proyecto.
3. Si se te solicita, revisa y acepta las Condiciones de Firebase.
4. Haz clic en Continuar.
5. Haz clic en Crear proyecto (o Agregar Firebase si usas un proyecto de Google Cloud existente).

### Paso 2: Instalar el SDK e inicializar Firebase
1. Instala Firebase con npm: 'npm install firebase'.
2. Inicializa Firebase en tu app y crea un objeto de app de Firebase:

    import { initializeApp } from 'firebase/app';
    // TODO: Replace the following with your app's Firebase project configuration
    const firebaseConfig = {
    //...
    };
    const app = initializeApp(firebaseConfig);

### Paso 3: Acceder a Firebase en tu app

Los servicios de Firebase (como Cloud Firestore, Authentication, Realtime Database, Remote Config y muchos más) están disponibles para importarse en subpaquetes individuales.

En el siguiente ejemplo, se muestra cómo usar el SDK de Cloud Firestore Lite para recuperar una lista de datos.

    import { initializeApp } from 'firebase/app';
    import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
    // Follow this pattern to import other Firebase services
    // import { } from 'firebase/<service>';

    // TODO: Replace the following with your app's Firebase project configuration
    const firebaseConfig = {
    //...
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Get a list of cities from your database
    async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
    }

## Licencia 
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.
