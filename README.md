# A oi website building

## For Developers

### 1. Run the following command to install the dependencies:

```bash
npm install
```

### 2. Run the following command to start the development server:

```bash
npm run dev
```

### 3. Open your browser and go to `http://localhost:3000` to see the website.

### 4. To build the website, run the following command:

```bash
npm run build
```

### 5. To start the production server, run the following command:

```bash
npm run start
```

### 6. To export the website as static files, run the following command:

```bash
npm run export
```

## You can run with docker too

### 1. Build the image

```bash
docker build -t aoi-website .
```

### 2. Run the container

```bash
docker run -p 3000:3000 aoi-website
```

### 3. Open your browser and go to `http://localhost:3000` to see the website.

