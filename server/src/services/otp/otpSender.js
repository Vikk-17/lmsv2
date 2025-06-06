import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Generate a random 4-digit OTP
const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

const sendEmailService = async (receiverEmail) => {
  const otp = generateOTP();

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: '"GIR Technologies" <info@girtechnologies.com>',
    to: receiverEmail,
    subject: "Your OTP Verification Code",
    text: `Your OTP verification code is: ${otp} for GIR Technologies Sign up. This code will expire in 10 minutes.`,
    html: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 0; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
      
      <!-- Header Section -->
      <div style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); padding: 30px 40px; text-align: center; border-radius: 15px 15px 0 0; position: relative; overflow: hidden;">
        <div style="position: absolute; top: -50px; right: -50px; width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%; transform: rotate(45deg);"></div>
        <div style="position: absolute; bottom: -30px; left: -30px; width: 80px; height: 80px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
        
        <div style="background: rgba(255,255,255,0.15); display: inline-block; padding: 15px; border-radius: 50%; margin-bottom: 15px; backdrop-filter: blur(10px);">
          <div style="width: 40px; height: 40px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
            <span style="color: #2a5298; font-size: 20px; font-weight: bold;">🔐</span>
          </div>
        </div>
        
        <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
          GIR Technologies
        </h1>
        <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px; font-weight: 300;">
          GIR Technologies Verification
        </p>
      </div>

      <!-- Main Content -->
      <div style="background: #ffffff; padding: 40px; border-radius: 0 0 15px 15px;">
        
        <!-- Welcome Message -->
        <div style="text-align: center; margin-bottom: 35px;">
          <h2 style="color: #2c3e50; margin: 0 0 15px 0; font-size: 24px; font-weight: 600;">
            Verification Required
          </h2>
          <p style="color: #5a6c7d; margin: 0; font-size: 16px; line-height: 1.6;">
            We've sent you a secure one-time password to complete your registration
          </p>
        </div>

        <!-- OTP Section -->
        <div style="background: linear-gradient(135deg, #3498db 0%, #2980b9 100%); padding: 30px; border-radius: 12px; text-align: center; margin: 30px 0; box-shadow: 0 8px 25px rgba(52, 152, 219, 0.3); position: relative; overflow: hidden;">
          <div style="position: absolute; top: -20px; right: -20px; width: 60px; height: 60px; background: rgba(255,255,255,0.1); border-radius: 50%; transform: rotate(45deg);"></div>
          <div style="position: absolute; bottom: -15px; left: -15px; width: 40px; height: 40px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
          
          <p style="color: rgba(255,255,255,0.9); margin: 0 0 15px 0; font-size: 16px; font-weight: 500;">
            Your Verification Code
          </p>
          
          <div style="background: rgba(255,255,255,0.95); padding: 20px; border-radius: 8px; margin: 0 auto; max-width: 300px; backdrop-filter: blur(10px);">
            <h1 style="color: #2980b9; margin: 0; font-size: 36px; font-weight: 800; letter-spacing: 8px; text-shadow: 0 2px 4px rgba(0,0,0,0.1); font-family: 'Courier New', monospace;">
              ${otp}
            </h1>
          </div>
          
          <div style="margin-top: 20px; padding: 12px 24px; background: rgba(231, 76, 60, 0.9); border-radius: 20px; display: inline-block;">
            <p style="color: #ffffff; margin: 0; font-size: 14px; font-weight: 600;">
              ⏰ Expires in 10 minutes
            </p>
          </div>
        </div>

        <!-- Instructions -->
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 25px; border-radius: 10px; border-left: 4px solid #3498db; margin: 25px 0;">
          <h3 style="color: #2c3e50; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
            📋 How to use this code:
          </h3>
          <ul style="color: #5a6c7d; margin: 0; padding-left: 20px; line-height: 1.8;">
            <li>Enter this code in the verification field on our website</li>
            <li>Complete your registration process</li>
            <li>Do not share this code with anyone</li>
          </ul>
        </div>

        <!-- Security Notice -->
        <div style="background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%); padding: 20px; border-radius: 8px; border-left: 4px solid #f39c12; margin: 25px 0;">
          <p style="color: #856404; margin: 0; font-size: 14px; line-height: 1.6;">
            <strong>🛡️ Security Notice:</strong> If you didn't request this verification code, please ignore this email and contact our support team immediately.
          </p>
        </div>

        <!-- CTA Button -->
        <div style="text-align: center; margin: 35px 0;">
          <a href="https://www.girtechnologies.com/" 
             style="background: linear-gradient(135deg, #3498db 0%, #2980b9 100%); 
                    color: #ffffff; 
                    text-decoration: none; 
                    padding: 15px 35px; 
                    border-radius: 30px; 
                    font-weight: 600; 
                    font-size: 16px; 
                    display: inline-block; 
                    box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4); 
                    transition: all 0.3s ease;">
            Visit Our Website →
          </a>
        </div>
      </div>

      <!-- Footer -->
      <div style="background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%); padding: 25px 40px; text-align: center; border-radius: 0 0 15px 15px;">
        <p style="color: rgba(255,255,255,0.8); margin: 0 0 10px 0; font-size: 14px;">
          © 2024 GIR Technologies. All rights reserved.
        </p>
        <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 12px; line-height: 1.5;">
          This is an automated message. Please do not reply to this email.<br>
          For support, visit our website or contact our team.
        </p>
        
        <!-- Social Links (Optional) -->
        <div style="margin-top: 20px;">
          <a href="https://www.girtechnologies.com/" style="color: rgba(255,255,255,0.7); text-decoration: none; margin: 0 10px; font-size: 12px;">
            🌐 Website
          </a>
          <span style="color: rgba(255,255,255,0.3);">|</span>
          <a href="#" style="color: rgba(255,255,255,0.7); text-decoration: none; margin: 0 10px; font-size: 12px;">
            📧 Support
          </a>
        </div>
      </div>
    </div>
  `,
  });

  return otp;
};

export { sendEmailService, generateOTP };
