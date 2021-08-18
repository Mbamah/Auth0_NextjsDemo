import Profile from "../components/Profile";
import Link from "next/link";


function welcome() {
    return (
      <div>
        <Profile />
        <Link href="/api/auth/logout">Logout</Link>
      </div>
    );
}

export default welcome
