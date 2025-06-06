import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const sendApprovalMail = async (email, comparePassword, name) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: '"GIR Technologies" <info@girtechnologies.com>',
    to: email,
    subject: "Welcome to GIR Technologies - Instructor Position Approved! 🎉",
    text: `Congratulations ${name}! We are delighted to inform you that your application for the instructor position at GIR Technologies has been approved. Your login credentials: Email: ${email}, Password: ${comparePassword}. Welcome to the team!`,
    html: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 0; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
      
      <!-- Header Section -->
      <div style="background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%); padding: 30px 40px; text-align: center; border-radius: 15px 15px 0 0; position: relative; overflow: hidden;">
        <div style="position: absolute; top: -50px; right: -50px; width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%; transform: rotate(45deg);"></div>
        <div style="position: absolute; bottom: -30px; left: -30px; width: 80px; height: 80px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
        
        <div style="background: rgba(255,255,255,0.15); display: inline-block; padding: 15px; border-radius: 50%; margin-bottom: 15px; backdrop-filter: blur(10px);">
          <div style="width: 40px; height: 40px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
            <span style="color: #27ae60; font-size: 20px; font-weight: bold;">🎉</span>
          </div>
        </div>
        
        <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
          GIR Technologies
        </h1>
        <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px; font-weight: 300;">
          Instructor Application Approved
        </p>
      </div>

      <!-- Main Content -->
      <div style="background: #ffffff; padding: 40px; border-radius: 0 0 15px 15px;">
        
        <!-- Congratulations Message -->
        <div style="text-align: center; margin-bottom: 35px;">
          <div style="font-size: 64px; margin-bottom: 15px;">🎊</div>
          <h2 style="color: #27ae60; margin: 0 0 15px 0; font-size: 32px; font-weight: 700;">
            Congratulations!
          </h2>
          <h3 style="color: #2c3e50; margin: 0 0 15px 0; font-size: 24px; font-weight: 600;">
            Welcome to the Team, ${name}!
          </h3>
          <p style="color: #5a6c7d; margin: 0; font-size: 16px; line-height: 1.6;">
            We are thrilled to inform you that your application has been approved
          </p>
        </div>

        <!-- Approval Status Section -->
        <div style="background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%); padding: 30px; border-radius: 12px; text-align: center; margin: 30px 0; box-shadow: 0 8px 25px rgba(46, 204, 113, 0.3); position: relative; overflow: hidden;">
          <div style="position: absolute; top: -20px; right: -20px; width: 60px; height: 60px; background: rgba(255,255,255,0.1); border-radius: 50%; transform: rotate(45deg);"></div>
          <div style="position: absolute; bottom: -15px; left: -15px; width: 40px; height: 40px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
          
          <div style="background: rgba(255,255,255,0.95); padding: 25px; border-radius: 8px; margin: 0 auto; backdrop-filter: blur(10px);">
            <div style="margin-bottom: 15px;">
              <span style="font-size: 48px;">✅</span>
            </div>
            <h3 style="color: #27ae60; margin: 0 0 15px 0; font-size: 24px; font-weight: 700;">
              Application Status
            </h3>
            <div style="background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%); color: white; padding: 12px 25px; border-radius: 25px; display: inline-block; font-weight: 600; font-size: 16px;">
              APPROVED ✨
            </div>
          </div>
        </div>

        <!-- Login Credentials Section -->
        <div style="background: linear-gradient(135deg, #3498db 0%, #2980b9 100%); padding: 30px; border-radius: 12px; margin: 30px 0; box-shadow: 0 8px 25px rgba(52, 152, 219, 0.3); position: relative; overflow: hidden;">
          <div style="position: absolute; top: -20px; right: -20px; width: 60px; height: 60px; background: rgba(255,255,255,0.1); border-radius: 50%; transform: rotate(45deg);"></div>
          <div style="position: absolute; bottom: -15px; left: -15px; width: 40px; height: 40px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
          
          <div style="text-align: center; margin-bottom: 25px;">
            <h3 style="color: #ffffff; margin: 0 0 10px 0; font-size: 22px; font-weight: 600;">
              🔐 Your Login Credentials
            </h3>
            <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 14px;">
              Please keep these credentials secure and confidential
            </p>
          </div>
          
          <!-- Email Credential -->
          <div style="background: rgba(255,255,255,0.95); padding: 20px; border-radius: 8px; margin-bottom: 15px; backdrop-filter: blur(10px);">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;">
              <div style="flex: 1; min-width: 120px;">
                <p style="color: #7f8c8d; margin: 0 0 5px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                  Email Address
                </p>
                <p style="color: #2c3e50; margin: 0; font-size: 16px; font-weight: 600; word-break: break-all;">
                  ${email}
                </p>
              </div>
              <div style="margin-left: 15px;">
                <span style="background: #3498db; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px; font-weight: 600;">
                  📧 EMAIL
                </span>
              </div>
            </div>
          </div>
          
          <!-- Password Credential -->
          <div style="background: rgba(255,255,255,0.95); padding: 20px; border-radius: 8px; backdrop-filter: blur(10px);">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;">
              <div style="flex: 1; min-width: 120px;">
                <p style="color: #7f8c8d; margin: 0 0 5px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                  Temporary Password
                </p>
                <p style="color: #2c3e50; margin: 0; font-size: 16px; font-weight: 600; font-family: 'Courier New', monospace; background: #f8f9fa; padding: 8px 12px; border-radius: 4px; display: inline-block;">
                  ${comparePassword}
                </p>
              </div>
              <div style="margin-left: 15px;">
                <span style="background: #e74c3c; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px; font-weight: 600;">
                  🔑 PASSWORD
                </span>
              </div>
            </div>
          </div>
          
          <div style="margin-top: 20px; padding: 12px 20px; background: rgba(241, 196, 15, 0.9); border-radius: 20px; text-align: center;">
            <p style="color: #ffffff; margin: 0; font-size: 13px; font-weight: 600;">
              ⚠️ Please change your password after first login
            </p>
          </div>
        </div>

        <!-- Next Steps -->
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 25px; border-radius: 10px; border-left: 4px solid #27ae60; margin: 25px 0;">
          <h3 style="color: #2c3e50; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
            📋 Next Steps:
          </h3>
          <ul style="color: #5a6c7d; margin: 0; padding-left: 20px; line-height: 1.8;">
            <li><strong>Login:</strong> Use the credentials above to access your instructor portal</li>
            <li><strong>Complete Profile:</strong> Update your profile information and preferences</li>
            <li><strong>Review Guidelines:</strong> Familiarize yourself with our teaching standards</li>
            <li><strong>Schedule Training:</strong> Attend the mandatory orientation session</li>
            <li><strong>Start Teaching:</strong> Begin creating and delivering your courses</li>
          </ul>
        </div>

        <!-- Welcome Message -->
        <div style="background: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%); padding: 25px; border-radius: 10px; margin: 25px 0; text-align: center;">
          <h3 style="color: #ffffff; margin: 0 0 15px 0; font-size: 20px; font-weight: 600;">
            🌟 Welcome to Our Family!
          </h3>
          <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 16px; line-height: 1.6;">
            We're excited to have you join our team of dedicated educators. Your expertise and passion will help shape the future of technology education. Together, we'll create amazing learning experiences for our students.
          </p>
        </div>

        <!-- Support Information -->
        <div style="background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%); padding: 20px; border-radius: 8px; margin: 25px 0;">
          <p style="color: #ffffff; margin: 0; font-size: 14px; line-height: 1.6; text-align: center;">
            <strong>🤝 Need Help?</strong> Our support team is here to assist you with the onboarding process. Don't hesitate to reach out if you have any questions or need guidance.
          </p>
        </div>

        <!-- CTA Buttons -->
        <div style="text-align: center; margin: 35px 0;">
          <a href="https://portal.girtechnologies.com" 
             style="background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%); 
                    color: #ffffff; 
                    text-decoration: none; 
                    padding: 15px 35px; 
                    border-radius: 30px; 
                    font-weight: 600; 
                    font-size: 16px; 
                    display: inline-block; 
                    box-shadow: 0 6px 20px rgba(46, 204, 113, 0.4); 
                    transition: all 0.3s ease; 
                    margin-right: 15px;">
            Login to Portal 🚀
          </a>
          <a href="https://www.girtechnologies.com" 
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
            View Guide 📚
          </a>
        </div>
      </div>

      <!-- Footer -->
      <div style="background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%); padding: 25px 40px; text-align: center; border-radius: 0 0 15px 15px;">
        <p style="color: rgba(255,255,255,0.8); margin: 0 0 10px 0; font-size: 14px;">
          © 2024 GIR Technologies. All rights reserved.
        </p>
        <p style="color: rgba(255,255,255,0.6); margin: 0 0 15px 0; font-size: 12px; line-height: 1.5;">
          This email contains confidential login information.<br>
          Please do not share your credentials with anyone.
        </p>
        
        <!-- HR Contact Information -->
        <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; margin-top: 15px;">
          <p style="color: rgba(255,255,255,0.9); margin: 0 0 5px 0; font-size: 13px; font-weight: 600;">
            HR & Support Contact:
          </p>
          <p style="color: rgba(255,255,255,0.8); margin: 0; font-size: 12px;">
            📧 hr@girtechnologies.com | 📞 +1 (555) 123-4567<br>
            💬 support@girtechnologies.com
          </p>
        </div>
        
        <!-- Social Links -->
        <div style="margin-top: 20px;">
          <a href="https://portal.girtechnologies.com" style="color: rgba(255,255,255,0.7); text-decoration: none; margin: 0 10px; font-size: 12px;">
            🏠 Portal
          </a>
          <span style="color: rgba(255,255,255,0.3);">|</span>
          <a href="https://www.girtechnologies.com/" style="color: rgba(255,255,255,0.7); text-decoration: none; margin: 0 10px; font-size: 12px;">
            🌐 Website
          </a>
          <span style="color: rgba(255,255,255,0.3);">|</span>
          <a href="https://www.girtechnologies.com" style="color: rgba(255,255,255,0.7); text-decoration: none; margin: 0 10px; font-size: 12px;">
            📖 Resources
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
};

const sendRejectionMail = async (applicantEmail, applicantName) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: '"GIR Technologies" <info@girtechnologies.com>',
    to: applicantEmail,
    subject: "Application Status Update - GIR Technologies",
    text: `Dear ${applicantName}, Thank you for your interest in the instructor position at GIR Technologies. After careful consideration, we regret to inform you that we will not be moving forward with your application at this time. We appreciate the time and effort you invested in the interview process.`,
    html: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 0; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
      
      <!-- Header Section -->
      <div style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); padding: 30px 40px; text-align: center; border-radius: 15px 15px 0 0; position: relative; overflow: hidden;">
        <div style="position: absolute; top: -50px; right: -50px; width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%; transform: rotate(45deg);"></div>
        <div style="position: absolute; bottom: -30px; left: -30px; width: 80px; height: 80px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
        
        <div style="background: rgba(255,255,255,0.15); display: inline-block; padding: 15px; border-radius: 50%; margin-bottom: 15px; backdrop-filter: blur(10px);">
          <div style="width: 40px; height: 40px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
            <span style="color: #2a5298; font-size: 20px; font-weight: bold;">📧</span>
          </div>
        </div>
        
        <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
          GIR Technologies
        </h1>
        <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px; font-weight: 300;">
          Application Status Update
        </p>
      </div>

      <!-- Main Content -->
      <div style="background: #ffffff; padding: 40px; border-radius: 0 0 15px 15px;">
        
        <!-- Greeting -->
        <div style="text-align: center; margin-bottom: 35px;">
          <h2 style="color: #2c3e50; margin: 0 0 15px 0; font-size: 24px; font-weight: 600;">
            Dear ${applicantName || "Applicant"},
          </h2>
          <p style="color: #5a6c7d; margin: 0; font-size: 16px; line-height: 1.6;">
            Thank you for your interest in joining our team as an instructor
          </p>
        </div>

        <!-- Main Message Section -->
        <div style="background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%); padding: 30px; border-radius: 12px; text-align: center; margin: 30px 0; box-shadow: 0 8px 25px rgba(231, 76, 60, 0.3); position: relative; overflow: hidden;">
          <div style="position: absolute; top: -20px; right: -20px; width: 60px; height: 60px; background: rgba(255,255,255,0.1); border-radius: 50%; transform: rotate(45deg);"></div>
          <div style="position: absolute; bottom: -15px; left: -15px; width: 40px; height: 40px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
          
          <div style="background: rgba(255,255,255,0.95); padding: 25px; border-radius: 8px; margin: 0 auto; backdrop-filter: blur(10px);">
            <div style="margin-bottom: 15px;">
              <span style="font-size: 48px;">📋</span>
            </div>
            <h3 style="color: #c0392b; margin: 0 0 15px 0; font-size: 24px; font-weight: 700;">
              Application Status
            </h3>
            <div style="background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%); color: white; padding: 12px 25px; border-radius: 25px; display: inline-block; font-weight: 600; font-size: 16px;">
              Not Selected
            </div>
          </div>
        </div>

        <!-- Message Content -->
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 30px; border-radius: 10px; border-left: 4px solid #e74c3c; margin: 25px 0;">
          <p style="color: #2c3e50; margin: 0 0 20px 0; font-size: 16px; line-height: 1.8;">
            After careful consideration of your application and interview, we have decided not to move forward with your candidacy for the instructor position at this time.
          </p>
          <p style="color: #2c3e50; margin: 0 0 20px 0; font-size: 16px; line-height: 1.8;">
            This decision was not made lightly, as we received many qualified applications from talented individuals like yourself. While your background and experience are impressive, we have selected a candidate whose qualifications more closely align with our current specific requirements.
          </p>
          <p style="color: #2c3e50; margin: 0; font-size: 16px; line-height: 1.8;">
            We genuinely appreciate the time and effort you invested in our interview process and wish you the very best in your career endeavors.
          </p>
        </div>

        <!-- Feedback Section -->
        <div style="background: linear-gradient(135deg, #3498db 0%, #2980b9 100%); padding: 25px; border-radius: 10px; margin: 25px 0;">
          <h3 style="color: #ffffff; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
            💡 For Future Opportunities:
          </h3>
          <ul style="color: rgba(255,255,255,0.9); margin: 0; padding-left: 20px; line-height: 1.8;">
            <li>We will keep your resume on file for future openings</li>
            <li>Feel free to apply for other positions that match your expertise</li>
            <li>Consider following us on social media for job updates</li>
            <li>We encourage you to reapply in the future as our needs evolve</li>
          </ul>
        </div>

        <!-- Professional Note -->
        <div style="background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%); padding: 20px; border-radius: 8px; margin: 25px 0;">
          <p style="color: #ffffff; margin: 0; font-size: 14px; line-height: 1.6; text-align: center;">
            <strong>🤝 Thank You:</strong> We truly value the time you spent with us and the insights you shared during the interview process. Your professionalism and enthusiasm were evident throughout.
          </p>
        </div>

        <!-- CTA Button -->
        <div style="text-align: center; margin: 35px 0;">
          
          <a href="https://www.girtechnologies.com/" 
             style="background: linear-gradient(135deg, #95a5a6 0%, #7f8c8d 100%); 
                    color: #ffffff; 
                    text-decoration: none; 
                    padding: 15px 35px; 
                    border-radius: 30px; 
                    font-weight: 600; 
                    font-size: 16px; 
                    display: inline-block; 
                    box-shadow: 0 6px 20px rgba(149, 165, 166, 0.4); 
                    transition: all 0.3s ease;">
            Visit Website
          </a>
        </div>
      </div>

      <!-- Footer -->
      <div style="background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%); padding: 25px 40px; text-align: center; border-radius: 0 0 15px 15px;">
        <p style="color: rgba(255,255,255,0.8); margin: 0 0 10px 0; font-size: 14px;">
          © 2024 GIR Technologies. All rights reserved.
        </p>
        <p style="color: rgba(255,255,255,0.6); margin: 0 0 15px 0; font-size: 12px; line-height: 1.5;">
          This is an automated message from our HR department.<br>
          For any questions regarding this decision, please contact our HR team.
        </p>
        
        <!-- Contact Information -->
        <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; margin-top: 15px;">
          <p style="color: rgba(255,255,255,0.9); margin: 0 0 5px 0; font-size: 13px; font-weight: 600;">
            HR Department Contact:
          </p>
          <p style="color: rgba(255,255,255,0.8); margin: 0; font-size: 12px;">
            📧 hr@girtechnologies.com | 📞 +1 (555) 123-4567
          </p>
        </div>
        
        <!-- Social Links -->
        <div style="margin-top: 20px;">
          <a href="https://www.girtechnologies.com/" style="color: rgba(255,255,255,0.7); text-decoration: none; margin: 0 10px; font-size: 12px;">
            🌐 Website
          </a>
          <span style="color: rgba(255,255,255,0.3);">|</span>
          <a href="https://www.girtechnologies.com" style="color: rgba(255,255,255,0.7); text-decoration: none; margin: 0 10px; font-size: 12px;">
            💼 Careers
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
};

export { sendRejectionMail, sendApprovalMail };
