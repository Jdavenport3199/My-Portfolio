import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const requestData = await request.json();

  try {
    const htmlBody = `
    <p><b>${requestData.topic}</b></p>
    <p>${requestData.message}</p>
    <br>
    <p>${requestData.name}</p>
    <p>${requestData.email}</p>
  `;

    const data = await resend.emails.send({
      from: 'justindavenport.space <onboarding@resend.dev>',
      // from: requestData.email,
      to: ['justindavenport.space@gmail.com'],
      subject: requestData.topic,
      html: htmlBody
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}