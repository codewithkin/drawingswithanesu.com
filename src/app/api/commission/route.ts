import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            name,
            email,
            phone,
            animalType,
            message,
            selectedPackage,
        } = body;

        // Validate required fields
        if (!name || !email || !animalType || !message || !selectedPackage) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Create transporter with SMTP credentials from environment variables
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === "true",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: `"Drawings With Anesu Website" <${process.env.SMTP_USER}>`,
            to: process.env.ANESU_EMAIL || "anesu@drawingswithanesu.com",
            replyTo: email,
            subject: `New Commission Request: ${animalType} (${selectedPackage})`,
            html: `
                <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FAF8F5;">
                    <h1 style="color: #1A1A1A; font-size: 24px; margin-bottom: 20px;">
                        New Commission Request
                    </h1>
                    
                    <div style="background-color: #FFFFFF; padding: 20px; border: 1px solid #D4C5B5; margin-bottom: 20px;">
                        <h2 style="color: #8B5E3C; font-size: 18px; margin-bottom: 15px;">Client Information</h2>
                        <p style="color: #1A1A1A; margin: 8px 0;"><strong>Name:</strong> ${name}</p>
                        <p style="color: #1A1A1A; margin: 8px 0;"><strong>Email:</strong> ${email}</p>
                        <p style="color: #1A1A1A; margin: 8px 0;"><strong>Phone:</strong> ${phone || "Not provided"}</p>
                    </div>
                    
                    <div style="background-color: #FFFFFF; padding: 20px; border: 1px solid #D4C5B5; margin-bottom: 20px;">
                        <h2 style="color: #8B5E3C; font-size: 18px; margin-bottom: 15px;">Commission Details</h2>
                        <p style="color: #1A1A1A; margin: 8px 0;"><strong>Package:</strong> ${selectedPackage}</p>
                        <p style="color: #1A1A1A; margin: 8px 0;"><strong>Subject/Animal:</strong> ${animalType}</p>
                    </div>
                    
                    <div style="background-color: #FFFFFF; padding: 20px; border: 1px solid #D4C5B5; margin-bottom: 20px;">
                        <h2 style="color: #8B5E3C; font-size: 18px; margin-bottom: 15px;">Message</h2>
                        <p style="color: #1A1A1A; white-space: pre-wrap;">${message}</p>
                    </div>
                    
                    <div style="text-align: center; padding: 20px; color: #8B5E3C; font-style: italic;">
                        <p>"With us, Remembrance"</p>
                        <p style="font-size: 12px; color: #6B6B6B; margin-top: 10px;">
                            This message was sent from the Drawings With Anesu website commission form.
                        </p>
                    </div>
                </div>
            `,
            text: `
New Commission Request

Client Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone || "Not provided"}

Commission Details:
- Package: ${selectedPackage}
- Subject/Animal: ${animalType}

Message:
${message}

---
This message was sent from the Drawings With Anesu website commission form.
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Also send a confirmation email to the client
        const confirmationMail = {
            from: `"Anesu Ndangariro" <${process.env.SMTP_USER}>`,
            to: email,
            subject: "Thank you for your commission request - Drawings With Anesu",
            html: `
                <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FAF8F5;">
                    <h1 style="color: #1A1A1A; font-size: 24px; margin-bottom: 20px;">
                        Thank You, ${name}!
                    </h1>
                    
                    <p style="color: #1A1A1A; font-size: 16px; line-height: 1.6;">
                        I've received your commission request for a <strong>${animalType}</strong> drawing 
                        (${selectedPackage} package). Thank you for your interest in my work.
                    </p>
                    
                    <p style="color: #1A1A1A; font-size: 16px; line-height: 1.6; margin-top: 15px;">
                        I'll review your request and get back to you within 48 hours to discuss the details 
                        and next steps.
                    </p>
                    
                    <div style="margin: 30px 0; padding: 20px; background-color: #FFFFFF; border: 1px solid #D4C5B5;">
                        <h2 style="color: #8B5E3C; font-size: 16px; margin-bottom: 10px;">Your Request Summary:</h2>
                        <p style="color: #1A1A1A; margin: 5px 0;">Package: ${selectedPackage}</p>
                        <p style="color: #1A1A1A; margin: 5px 0;">Subject: ${animalType}</p>
                    </div>
                    
                    <p style="color: #8B5E3C; font-style: italic; text-align: center; margin-top: 30px;">
                        "With us, Remembrance"
                    </p>
                    
                    <p style="color: #1A1A1A; font-size: 16px; margin-top: 20px;">
                        Warm regards,<br>
                        <strong>Anesu Ndangariro</strong><br>
                        <span style="color: #8B5E3C;">Wildlife Artist</span>
                    </p>
                    
                    <p style="font-size: 12px; color: #6B6B6B; margin-top: 30px; text-align: center;">
                        <a href="https://drawingswithanesu.com" style="color: #8B5E3C;">drawingswithanesu.com</a>
                    </p>
                </div>
            `,
        };

        await transporter.sendMail(confirmationMail);

        return NextResponse.json(
            { success: true, message: "Commission request sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending commission email:", error);
        return NextResponse.json(
            { error: "Failed to send commission request. Please try again." },
            { status: 500 }
        );
    }
}
