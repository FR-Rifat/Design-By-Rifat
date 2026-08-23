import { NextResponse } from "next/server";
import { Resend } from "resend";

const projectTypeLabels: Record<string, string> = {
  "ui-ux": "UI/UX Design",
  website: "Website Design",
  product: "Product Design",
  dashboard: "Dashboard Design",
  mobile: "Mobile App Design",
  other: "Other",
};

const budgetLabels: Record<string, string> = {
  "100-300": "$100 – $300",
  "300-500": "$300 – $500",
  "500-1000": "$500 – $1,000",
  "1000-plus": "$1,000+",
};

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable.");
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Missing RESEND_API_KEY environment variable.",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();
    const { name, email, projectType, budget, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const formattedProjectType =
      projectTypeLabels[projectType] || projectType || "N/A";
    const formattedBudget = budgetLabels[budget] || budget || "N/A";

    const toEmail = process.env.CONTACT_EMAIL || "onboarding@resend.dev";
    const fromEmail =
      process.env.FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    const htmlContent = `
      <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Portfolio Inquiry</title>
  </head>

  <body
    style="
      margin: 0;
      padding: 0;
      background-color: #f5f5f5;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #171717;
      -webkit-font-smoothing: antialiased;
    "
  >
    <table
      role="presentation"
      width="100%"
      border="0"
      cellspacing="0"
      cellpadding="0"
      style="background-color: #f5f5f5; padding: 40px 16px;"
    >
      <tr>
        <td align="center">

          <!-- Email Container -->
          <table
            role="presentation"
            width="100%"
            border="0"
            cellspacing="0"
            cellpadding="0"
            style="
              max-width: 600px;
              background-color: #ffffff;
              border: 1px solid #e5e5e5;
              border-radius: 12px;
            "
          >

            <!-- Header -->
            <tr>
              <td
                style="
                  padding: 28px 32px;
                  border-bottom: 1px solid #eeeeee;
                "
              >
                <table
                  role="presentation"
                  width="100%"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                >
                  <tr>
                    <td>
                      <div
                        style="
                          font-size: 18px;
                          font-weight: 700;
                          letter-spacing: -0.02em;
                          color: #171717;
                        "
                      >
                        FR RIFAT
                      </div>

                      <div
                        style="
                          margin-top: 5px;
                          font-size: 13px;
                          color: #737373;
                        "
                      >
                        New portfolio inquiry
                      </div>
                    </td>

                    <td align="right">
                      <span
                        style="
                          display: inline-block;
                          padding: 6px 10px;
                          border-radius: 6px;
                          background-color: #f3f3f3;
                          color: #525252;
                          font-size: 11px;
                          font-weight: 600;
                        "
                      >
                        NEW MESSAGE
                      </span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding: 32px;">

                <!-- Intro -->
                <p
                  style="
                    margin: 0 0 24px 0;
                    font-size: 15px;
                    line-height: 1.6;
                    color: #525252;
                  "
                >
                  Someone has contacted you through your portfolio website.
                  Here are the details:
                </p>

                <!-- Sender Details -->
                <table
                  role="presentation"
                  width="100%"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  style="margin-bottom: 28px;"
                >
                  <tr>

                    <!-- Name -->
                    <td
                      width="50%"
                      style="
                        vertical-align: top;
                        padding-right: 12px;
                        padding-bottom: 22px;
                      "
                    >
                      <div
                        style="
                          margin-bottom: 6px;
                          font-size: 11px;
                          font-weight: 600;
                          text-transform: uppercase;
                          letter-spacing: 0.08em;
                          color: #a3a3a3;
                        "
                      >
                        Name
                      </div>

                      <div
                        style="
                          font-size: 15px;
                          font-weight: 600;
                          color: #171717;
                        "
                      >
                        ${name}
                      </div>
                    </td>

                    <!-- Email -->
                    <td
                      width="50%"
                      style="
                        vertical-align: top;
                        padding-left: 12px;
                        padding-bottom: 22px;
                      "
                    >
                      <div
                        style="
                          margin-bottom: 6px;
                          font-size: 11px;
                          font-weight: 600;
                          text-transform: uppercase;
                          letter-spacing: 0.08em;
                          color: #a3a3a3;
                        "
                      >
                        Email
                      </div>

                      <a
                        href="mailto:${email}"
                        style="
                          font-size: 15px;
                          font-weight: 600;
                          color: #171717;
                          text-decoration: none;
                          word-break: break-all;
                        "
                      >
                        ${email}
                      </a>
                    </td>
                  </tr>

                  <tr>

                    <!-- Service -->
                    <td
                      width="50%"
                      style="
                        vertical-align: top;
                        padding-right: 12px;
                      "
                    >
                      <div
                        style="
                          margin-bottom: 7px;
                          font-size: 11px;
                          font-weight: 600;
                          text-transform: uppercase;
                          letter-spacing: 0.08em;
                          color: #a3a3a3;
                        "
                      >
                        Service
                      </div>

                      <span
                        style="
                          display: inline-block;
                          padding: 6px 10px;
                          border-radius: 6px;
                          background-color: #f4f4f4;
                          color: #404040;
                          font-size: 13px;
                          font-weight: 600;
                        "
                      >
                        ${formattedProjectType}
                      </span>
                    </td>

                    <!-- Budget -->
                    <td
                      width="50%"
                      style="
                        vertical-align: top;
                        padding-left: 12px;
                      "
                    >
                      <div
                        style="
                          margin-bottom: 7px;
                          font-size: 11px;
                          font-weight: 600;
                          text-transform: uppercase;
                          letter-spacing: 0.08em;
                          color: #a3a3a3;
                        "
                      >
                        Budget
                      </div>

                      <span
                        style="
                          display: inline-block;
                          padding: 6px 10px;
                          border-radius: 6px;
                          background-color: #f4f4f4;
                          color: #404040;
                          font-size: 13px;
                          font-weight: 600;
                        "
                      >
                        ${formattedBudget}
                      </span>
                    </td>
                  </tr>
                </table>

                <!-- Message -->
                <div
                  style="
                    margin-bottom: 28px;
                    border-top: 1px solid #eeeeee;
                    padding-top: 24px;
                  "
                >
                  <div
                    style="
                      margin-bottom: 10px;
                      font-size: 11px;
                      font-weight: 600;
                      text-transform: uppercase;
                      letter-spacing: 0.08em;
                      color: #a3a3a3;
                    "
                  >
                    Message
                  </div>

                  <div
                    style="
                      font-size: 15px;
                      line-height: 1.7;
                      color: #404040;
                      white-space: pre-wrap;
                    "
                  >
                    ${message}
                  </div>
                </div>

                <!-- Reply Button -->
                <table
                  role="presentation"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                >
                  <tr>
                    <td>
                      <a
                        href="mailto:${email}"
                        style="
                          display: inline-block;
                          padding: 11px 20px;
                          border-radius: 7px;
                          background-color: #171717;
                          color: #ffffff;
                          font-size: 14px;
                          font-weight: 600;
                          text-decoration: none;
                        "
                      >
                        Reply to ${name} →
                      </a>
                    </td>
                  </tr>
                </table>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td
                style="
                  padding: 20px 32px;
                  border-top: 1px solid #eeeeee;
                  background-color: #fafafa;
                "
              >
                <p
                  style="
                    margin: 0;
                    font-size: 11px;
                    line-height: 1.5;
                    color: #a3a3a3;
                  "
                >
                  This message was sent through the contact form on FR Rifat's portfolio.
                </p>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>
  </body>
</html>
    `;

    const data = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Inquiry from ${name} (${formattedProjectType})`,
      replyTo: email,
      html: htmlContent,
    });

    if (data.error) {
      console.error("Resend API error:", data.error);
      return NextResponse.json(
        { error: data.error.message || "Failed to send email." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, id: data.data?.id });
  } catch (err: any) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: err.message || "An unexpected error occurred." },
      { status: 500 },
    );
  }
}
