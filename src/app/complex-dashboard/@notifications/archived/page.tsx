import Link from "next/link";
import { Card } from "@/components/card";

export default function Archived() {
  return (
    <Card>
      <div>
        <p>Archived notifications</p>
        <br />
        <Link href="/complex-dashboard">Go to Complex Dashboard</Link>
      </div>
    </Card>
  );
}
