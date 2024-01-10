import { OrganizationList, UserButton } from "@clerk/nextjs";
import React from "react";

export default function CreateOrganizationPage() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <OrganizationList
        hidePersonal
        afterSelectOrganizationUrl="/organization/:id"
        afterCreateOrganizationUrl="/organization/:id"
      />
    </div>
  );
}
