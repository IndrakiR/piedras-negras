import { createTransport } from 'nodemailer'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()
    const body = await readBody(event)

    // Configure nodemailer
    const transporter = createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false,
      auth: {
        user: config.emailUser,
        pass: config.emailPassword
      },
      tls: {
        ciphers: 'SSLv3'
      }
    })

    // Format the date
    const date = new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })

    // Prepare email content with better formatting
    let emailContent = `Nuevo Registro de Trámite - Persona Física\n`
    emailContent += `Fecha: ${date}\n\n`
    emailContent += `Información del Registro:\n`
    emailContent += `==========================================\n\n`
    
    Object.entries(body).forEach(([key, value]) => {
      if (key !== 'documentos') {
        emailContent += `${key.toUpperCase()}: ${value}\n`
      }
    })

    // Send email
    await transporter.sendMail({
      from: config.emailUser,
      to: config.public.formSubmissionEmail,
      subject: `Nuevo Registro de Trámite - ${body.nombre || 'Persona Física'}`,
      text: emailContent,
    })

    return { success: true, message: 'Formulario enviado correctamente' }
  } catch (error) {
    console.error('Error al enviar el formulario:', error)
    throw createError({
      statusCode: 500,
      message: 'Error al procesar el formulario'
    })
  }
})
