export async function POST(request) {
  const formData = await request.formData();
  const email = formData.get("email");
  // Fake "subscription" handler
  console.log("New subscriber:", email);
  return new Response(JSON.stringify({ ok: true, email }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
