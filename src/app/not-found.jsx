import Link from "next/link"
const Notfound = () => {
  return (
    <div>
      <h2>Not Found!!</h2>
      <p>The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Link href="/">Return to Homepage</Link>
    </div>
  )
}

export default Notfound