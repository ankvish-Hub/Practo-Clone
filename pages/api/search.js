
const doctors = [
  {
    id: 1,
    name: "Aesthetic Heart Dermatology & Cardiology Clinic",
    type: "Clinic",
    specialists: ["Dermatologist"],
    experience: "11 - 13 years",
    location: "Jayanagar",
    city: "Bangalore",
    fees: 800,
    rating: 97,
    stories: 159,
    available: false,
    image: "",
    ad: true,
    gender: "Female"
  },
  {
    id: 2,
    name: "Dr. Sheelavathi Natraj",
    type: "Dermatologist",
    specialists: ["Dermatologist"],
    experience: "21 years",
    location: "JP Nagar",
    city: "Bangalore",
    fees: 800,
    rating: 94,
    stories: 1506,
    available: true,
    image: "",
    ad: false,
    gender: "Female"
  },
  {
    id: 3,
    name: "Dr. Rajesh Kumar",
    type: "Pediatrician",
    specialists: ["Pediatrician"],
    experience: "5 years",
    location: "JP Nagar",
    city: "Bangalore",
    fees: 600,
    rating: 92,
    stories: 800,
    available: false,
    image: "",
    ad: false,
    gender: "Male"
  },
  {
    id: 4,
    name: "Dr. Urvi Kumar",
    type: "Pediatrician",
    specialists: ["Pediatrician"],
    experience: "7 years",
    location: "JP Nagar",
    city: "Bangalore",
    fees: 600,
    rating: 92,
    stories: 800,
    available: true,
    image: "",
    ad: false,
    gender: "Female"
  },
  {
    id: 5,
    name: "Dr. Shreya Shukla",
    type: "Gynecologist",
    specialists: ["Gynecologist"],
    experience: "1 years",
    location: "JP Nagar",
    city: "Bangalore",
    fees: 600,
    rating: 92,
    stories: 800,
    available: false,
    image: "",
    ad: false,
    gender: "Female"
  },
  {
    id: 6,
    name: "Dr. Rajesh Yadav",
    type: "Gynecologist",
    specialists: ["Gynecologist"],
    experience: "4 years",
    location: "JP Nagar",
    city: "Bangalore",
    fees: 600,
    rating: 92,
    stories: 800,
    available: true,
    image: "",
    ad: false,
    gender: "Male"
  }

];

export default function handler(req, res) {
  const { location = '', specialist = '' } = req.query;
  const filtered = doctors.filter(doc =>
    doc.specialists.some(s => s.toLowerCase().includes(specialist.toLowerCase())) &&
    (doc.location.toLowerCase().includes(location.toLowerCase()) || doc.city.toLowerCase().includes(location.toLowerCase()))
  );
  res.status(200).json(filtered);
}
