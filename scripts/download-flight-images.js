import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

const images = [{
        url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80',
        filename: 'flight-1.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=80',
        filename: 'flight-2.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80',
        filename: 'flight-3.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=80',
        filename: 'flight-4.jpg'
    }
];

const downloadImage = (url, filename) => {
    return new Promise((resolve, reject) => {
        const filepath = path.join(__dirname, '../public/images/flights', filename);
        const file = fs.createWriteStream(filepath);

        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${filename}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => {});
            reject(err);
        });
    });
};

const downloadAllImages = async() => {
    try {
        for (const image of images) {
            await downloadImage(image.url, image.filename);
        }
        console.log('All images downloaded successfully!');
    } catch (error) {
        console.error('Error downloading images:', error);
    }
};

downloadAllImages();