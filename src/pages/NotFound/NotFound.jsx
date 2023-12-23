import { useEffect } from "react";

export default function NotFound() {
  useEffect(()=>{
    document.title = "NotFound"
  })
  return (
    <div>
      <h1>Page Not Found</h1>
    </div>
  );
}
