export default function Page() {
  return <button onClick={() => fetch("/api")}>Do request to /api</button>;
}
