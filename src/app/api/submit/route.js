export async function POST(req) {
  try {
    const { name, email, phone, organization, message } = await req.json();

    const BOT_TOKEN = "7974569016:AAFCAoyPl0oHlzwKXr9VN19mDB21dSD8GMM";
    const CHAT_ID = "-4682495521";

    const text = `New Request:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Organization: ${organization}
      Message: ${message}`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(
      text
    )}`;

    const response = await fetch(url);
    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(`Telegram Error: ${errorDetails}`);
    }

    return new Response(JSON.stringify({ status: "success" }), { status: 200 });
  } catch (error) {
    console.error("Error:", error.message);
    return new Response(
      JSON.stringify({ status: "error", message: error.message }),
      { status: 500 }
    );
  }
}
