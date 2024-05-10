# Programacion Web Avanzada

## Trabajo Practico React : Desarrollo de una aplicación con múltiples páginas

### Integrantes
#### Urra Juan Pablo (FAI 3730)  --- Insua Francisco (FAI 3013)  ---  Casimiro Alexis (FAI 4224)

## Descripción
Este proyecto consiste en una galeria de imagenes de <strong style='color:rgb(0,135,0)'>Autos deportivos</strong>, mostrando información detalla de cada auto. Para este proyecto se usará un archivo JSON con los datos de cada auto y aplicaremos **React Router** para vincular las paginas del proyecto.

## Herramientas Necesarias 
1. Editor de codigo (recomenddo Vscode)[Descargar Vscode](https://code.visualstudio.com/download).
2. npm (Gestor de paquetes NodeJs). Si instalas NodeJs incluye npm. [Descargar NodeJs](https://nodejs.org/en/download).
3. Tailwindcss es un framework de CSS. [Instalar tailwind](https://tailwindcss.com/docs/guides/create-react-app).
4. React, es una libreria de JS. 
5. React Router, una dependencia de React para **vincular** paginas de un proyecto. 

# <strong style='color:hsl(240,100%,50%)'>Instalacion React</strong>
Una vez instalado tu editor de codigo y NodeJs, puedes verificar la instalacion en la terminal (**Linux**)("npm -v" y "node -v"), o cmd (**Windows**)("npm --version" y "node --version").

### Pasos para la instalacion de React
1. Abre **Vscode** y su terminal. Crea un directorio con el nombre del proyecto.
2. Ingresa al directorio creado (cd nombreProyecto) y ejecuta el siguiente comando. **npx create-react-app nombreProyecto**.
3. Luego de espere que se instale toda la estructura de archivos, muevete a la carpeta con el nombre del proyecto. 
4. Ejecuta el comando **npm start**.
5. Si todo funciona correctamente, se abrira el navegador con el logo de React.

# Instalacion de <strong style='font-family:Times New Roman'>Tailwinscss</strong>
Una vez instalado React, dirijase al link de instalación de Tailwindcss. Y siga los 6 pasos mostrados en la pagina para su correcta instalación.

# Instalacion ReactRouter
1. Abra la terminal de Vscode en la carpeta del proyecto de React.
2. Ejecute el siguiente comando: **npm install react-router-dom**.


# Instalacion de Libreria jsPDF
Esta libreria la vamos a usar para poder exportar la información del auto seleccionado a un archivo pdf.

1. Posicionese en la carpeta del proyecto en con la terminal de vscode.
2. Ejecute el siguiente comando: **npm install jspdf --save**

# Ejecucion del proyecto
Para poder correr el proyecto siga los siguientes pasos:
1. En el repositorio haga click en <code> y copie el link.
2. Abra su editor de codigo y seleccione una carpeta donde se guardara el proyecto.
3. Abra la terminal del editor de codigo y ejecute el siguiente comando.  
4. En el archivo package.json en "dependecies" verá la libreria (jspdf) y su versión. 
