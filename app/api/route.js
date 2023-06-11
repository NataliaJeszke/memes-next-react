export async function GET(request) {
  return new Response("Hello World!");
}

export async function POST(request) {
  return new Response({ msg: "to jest metoda POST" });
}
