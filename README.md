# TodoApp - Aplicación de Tareas con Ionic y Angular

Esta es una aplicación de lista de tareas (Todo) desarrollada con el framework Ionic, utilizando Angular como base y NgRx para la gestión del estado. La aplicación está configurada para ser compilada como una aplicación web y también para plataformas móviles (Android/iOS) usando Capacitor.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

- [Node.js](https://nodejs.org/) (que incluye npm)
- [Angular CLI](https://angular.io/cli)
- [Ionic CLI](https://ionicframework.com/docs/cli)

Puedes instalar Angular CLI y Ionic CLI globalmente con los siguientes comandos:

```bash
npm install -g @angular/cli
npm install -g @ionic/cli
```

## Instalación

1.  **Clona el repositorio (si aplica)** o navega hasta el directorio raíz del proyecto.

2.  **Instala las dependencias de Node.js**:
    Este comando leerá el archivo `package.json` e instalará todas las dependencias necesarias para el proyecto, incluyendo Angular, Ionic, NgRx y Capacitor.

    ```bash
    npm install
    ```

## Desarrollo

Para levantar el servidor de desarrollo y ver la aplicación en tu navegador, ejecuta uno de los siguientes comandos. `ionic serve` es el recomendado para proyectos Ionic, ya que ofrece funcionalidades adicionales.

```bash
ionic serve
```
o
```bash
ng serve
```

La aplicación se abrirá automáticamente en `http://localhost:8100` o en un puerto disponible.

## Compilación

### Compilación para la Web

Para generar una compilación de producción de la aplicación como un sitio web estático, ejecuta:

```bash
npm run build
```

Este comando compilará el proyecto y dejará los archivos listos para producción en el directorio `www/`.

### Compilación para Móvil (Android/iOS con Capacitor)

El proyecto está configurado para ser desplegado en dispositivos móviles usando Capacitor.

1.  **Genera la compilación web**:
    Primero, necesitas tener la versión más reciente de tu aplicación web compilada.

    ```bash
    ionic build
    ```
    *(Este comando es equivalente a `npm run build`)*

2.  **Sincroniza los cambios con la plataforma nativa**:
    Si ya tienes una plataforma agregada (como `android`), sincroniza tus cambios del directorio `www/` con el proyecto nativo.

    ```bash
    npx cap sync
    ```

3.  **Agrega una plataforma (si es la primera vez)**:
    Si nunca has agregado una plataforma, puedes hacerlo con los siguientes comandos.

    Para Android:
    ```bash
    npx cap add android
    ```

    Para iOS (requiere macOS):
    ```bash
    npx cap add ios
    ```

4.  **Abre el proyecto en el IDE nativo**:
    Una vez que la plataforma está agregada y sincronizada, puedes abrir el proyecto en su entorno de desarrollo nativo (Android Studio para Android, Xcode para iOS) para compilar, probar y desplegar en un dispositivo.

    Para Android:
    ```bash
    npx cap open android
    ```

    Para iOS:
    ```bash
    npx cap open ios
    ```

## Scripts Adicionales

-   **Linting**: Para revisar la calidad del código y verificar que sigue las reglas de estilo del proyecto.
    ```bash
    npm run lint
    ```

-   **Tests**: Para ejecutar las pruebas unitarias configuradas con Karma y Jasmine.
    ```bash
    npm run test
    ```
