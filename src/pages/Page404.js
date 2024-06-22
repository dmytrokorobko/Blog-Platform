import { Link } from "react-router-dom";

export function Page404() {
   return (
      <section>
         <h1>404 - page isn't found</h1>
         <Link to="/">Go to Home page</Link>
      </section>
   )
}