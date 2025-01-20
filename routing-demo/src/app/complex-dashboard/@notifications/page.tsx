import { Card } from "@/components/card";
import Link from "next/link";
export default function Notifications() {
  return (
    <Card>
      <div>Notifications component
        <br />
        <Link href="/complex-dashboard/archived">Archived</Link>
      </div>
    </Card>
  );
}
