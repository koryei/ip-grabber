export default function handler(req, res) {
  // 1. Extract the IP address provided by Vercel's edge network
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  // 2. Extract extra geolocation metrics provided by Vercel
  const country = req.headers['x-vercel-ip-country'] || 'Unknown';
  const region = req.headers['x-vercel-ip-country-region'] || 'Unknown';
  const city = req.headers['x-vercel-ip-city'] || 'Unknown';

  // 3. Print it to the Vercel Runtime Logs console
  console.log(`[VISITOR] IP: ${ip} | Location: ${city}, ${region}, ${country}`);

  // 4. Respond to the visitor
  res.status(200).json({ 
    success: true, 
    status: "Logged" 
  });
}
