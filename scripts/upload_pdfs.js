const fs = require('fs');
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');

const API_URL = 'https://ventanillauniversal.piedrasnegras.gob.mx/api';
const PDF_DIR = path.join(__dirname, '../public/files/pdfs');

async function uploadPDF(filePath) {
    try {
        const formData = new FormData();
        formData.append('file', fs.createReadStream(filePath));
        formData.append('fileName', path.basename(filePath));
        formData.append('category', 'DESARROLLO_URBANO');

        const response = await axios.post(`${API_URL}/upload`, formData, {
            headers: {
                ...formData.getHeaders(),
            },
        });

        console.log(`✅ Archivo ${path.basename(filePath)} subido exitosamente`);
        return response.data;
    } catch (error) {
        console.error(`❌ Error al subir ${path.basename(filePath)}:`, error.message);
        throw error;
    }
}

async function uploadAllPDFs() {
    try {
        const files = fs.readdirSync(PDF_DIR).filter(file => file.toLowerCase().endsWith('.pdf'));
        
        console.log(`📁 Encontrados ${files.length} archivos PDF para subir`);
        
        for (const file of files) {
            const filePath = path.join(PDF_DIR, file);
            await uploadPDF(filePath);
        }
        
        console.log('✨ Proceso de subida completado');
    } catch (error) {
        console.error('Error durante el proceso de subida:', error);
    }
}

uploadAllPDFs();
