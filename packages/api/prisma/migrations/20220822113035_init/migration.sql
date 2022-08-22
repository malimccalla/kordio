-- CreateTable
CREATE TABLE "companies" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "contact_email" TEXT,
    "location" TEXT,
    "website" TEXT,
    "description" TEXT,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);
