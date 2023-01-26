// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Captures submissions from web forms.
// 
// REQUEST
// POST /api/submissions
// Content-Type: application/x-www-form-urlencoded | application/json
//
// RESPONSE
// Type: application/json
// Response: { status: 'success' | 'error' | 'unavailable', messsage: String }
export default (req, res) => {
  if (req.method === 'POST') {
    // Our own little Chaos Monkey to test handling of server errors
    if (Math.random() < 0.25) {
      res.status(503).json({ status: 'unavailable', message: 'Server is down' })
    } else {
      console.log('Submission:', req.body)
      res.status(201).json({ status: 'success', message: 'Submission Saved!' })
    }
  } else {
    res.status(405).json({ status: 'error', message: 'Must use HTTP POST method' })
  }
}
