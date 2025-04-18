"use client";
import { PageHeader } from "@/components/members/header";
import { MembersTable } from "@/components/members/table";

export default function MembersPage() {
  return (
    <div className="container  py-6 space-y-6">
      <PageHeader
        title="Members"
        description="Manage your team members and their account access."
      />
      <MembersTable />
    </div>
  );
}
